import { getErrorMessage } from "@/lib/utils/constants";
import type {
  TokenRefreshResponse,
} from "@/lib/types/generated/sherbook-api";

export class SherbookApiError extends Error {
  constructor(
    public readonly status: string,
    public readonly errorMessage: string | undefined,
    public readonly path: string
  ) {
    super(errorMessage || getErrorMessage(status));
    this.name = "SherbookApiError";
  }
}

export class AuthExpiredError extends Error {
  constructor() {
    super("Session expired. Please log in again.");
    this.name = "AuthExpiredError";
  }
}

type TokenStore = {
  getSessionToken: () => string | null;
  getRefreshToken: () => string | null;
  setTokens: (session: string, refresh: string) => void;
  clearTokens: () => void;
};

class SherbookClient {
  private baseUrl: string;
  private tokenStore: TokenStore | null = null;
  private refreshPromise: Promise<void> | null = null;

  constructor(baseUrl: string = "/api/sherbook") {
    this.baseUrl = baseUrl;
  }

  setTokenStore(store: TokenStore) {
    this.tokenStore = store;
  }

  async post<TReq, TRes>(
    path: string,
    body: TReq,
    options?: { skipAuth?: boolean; captchaToken?: string }
  ): Promise<TRes> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (!options?.skipAuth && this.tokenStore) {
      const token = this.tokenStore.getSessionToken();
      if (token) {
        headers["SESSION-TOKEN"] = token;
      }
    }

    if (options?.captchaToken) {
      headers["X-Captcha-Token"] = options.captchaToken;
      console.log(`[SherbookClient] Setting X-Captcha-Token for ${path}, token length: ${options.captchaToken.length}`);
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      credentials: "include",
    });

    if (response.status === 401 && !options?.skipAuth) {
      await this.handleTokenRefresh();
      return this.post(path, body, { ...options, skipAuth: false });
    }

    const data = (await response.json()) as TRes & {
      status?: string;
      errorMessage?: string;
    };

    if (data.status === "TOKEN_NOT_VALID" && !options?.skipAuth) {
      await this.handleTokenRefresh();
      return this.post(path, body, { ...options, skipAuth: false });
    }

    if (data.status && data.status !== "OK") {
      throw new SherbookApiError(data.status, data.errorMessage, path);
    }

    return data;
  }

  async get<TRes>(path: string): Promise<TRes> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "GET",
      credentials: "include",
    });

    return (await response.json()) as TRes;
  }

  private async handleTokenRefresh(): Promise<void> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }
    this.refreshPromise = this._doRefresh();
    try {
      await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  private async _doRefresh(): Promise<void> {
    if (!this.tokenStore) throw new AuthExpiredError();

    const refreshToken = this.tokenStore.getRefreshToken();
    if (!refreshToken) {
      this.tokenStore.clearTokens();
      throw new AuthExpiredError();
    }

    try {
      const res = await this.post<
        { refreshToken: string },
        TokenRefreshResponse
      >(
        "/login/refresh",
        { refreshToken },
        { skipAuth: true }
      );

      if (res.newAccessToken && res.newRefreshToken) {
        this.tokenStore.setTokens(res.newAccessToken, res.newRefreshToken);
      } else {
        this.tokenStore.clearTokens();
        throw new AuthExpiredError();
      }
    } catch (error) {
      if (error instanceof AuthExpiredError) throw error;
      this.tokenStore.clearTokens();
      throw new AuthExpiredError();
    }
  }
}

export const apiClient = new SherbookClient();
