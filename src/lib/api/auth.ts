import { apiClient } from "./client";
import { buildWebDeviceDto } from "@/lib/utils/device";
import type {
  RetailLoginRequest,
  RetailLoginResponse,
  RegistrationRequest,
  RegistrationResponse,
  TokenRefreshRequest,
  TokenRefreshResponse,
} from "@/lib/types/generated/sherbook-api";

export async function loginRetail(
  phone: string,
  password: string
): Promise<RetailLoginResponse> {
  return apiClient.post<RetailLoginRequest, RetailLoginResponse>(
    "/login/retail",
    {
      phone,
      password,
      device: buildWebDeviceDto(),
    },
    { skipAuth: true }
  );
}

export async function register(
  phone: string,
  name: string,
  email: string
): Promise<RegistrationResponse> {
  const response = await apiClient.post<RegistrationRequest, RegistrationResponse>(
    "/registration/new",
    {
      phone,
      name,
      email,
      device: buildWebDeviceDto(),
    },
    { skipAuth: true }
  );

  if (response.status !== "OK") {
    throw new Error(
      response.errorMessage || `Registration failed: ${response.status}`
    );
  }

  return response;
}

export async function checkRegistration(
  phone: string
): Promise<RegistrationResponse> {
  return apiClient.post<{ phone: string }, RegistrationResponse>(
    "/registration/check",
    { phone },
    { skipAuth: true }
  );
}

export async function requestNewPassword(
  phone: string,
  captchaToken?: string
): Promise<void> {
  const response = await apiClient.post<{ phone: string; device: ReturnType<typeof buildWebDeviceDto> }, { status?: string; errorMessage?: string }>(
    "/registration/password",
    {
      phone,
      device: buildWebDeviceDto(),
    },
    { skipAuth: true, captchaToken }
  );

  if (response.status !== "OK") {
    throw new Error(
      response.errorMessage || `Password reset failed: ${response.status}`
    );
  }
}

export async function refreshToken(
  refreshTokenValue: string
): Promise<TokenRefreshResponse> {
  return apiClient.post<TokenRefreshRequest, TokenRefreshResponse>(
    "/login/refresh",
    { refreshToken: refreshTokenValue },
    { skipAuth: true }
  );
}

export async function logout(): Promise<void> {
  await apiClient.post("/login/logout", {
    customerTypes: ["RETAIL"],
  });
}
