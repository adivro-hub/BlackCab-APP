import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginRetail, register, logout as apiLogout } from "@/lib/api/auth";
import { apiClient } from "@/lib/api/client";
import type { RetailAuthInfoDto } from "@/lib/types/generated/sherbook-api";

interface AuthState {
  sessionToken: string | null;
  refreshToken: string | null;
  retailToken: string | null;
  user: RetailAuthInfoDto | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (phone: string, password: string) => Promise<void>;
  registerUser: (phone: string, name: string, email: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => {
      // Wire up the API client's token store
      apiClient.setTokenStore({
        getSessionToken: () => get().sessionToken,
        getRefreshToken: () => get().refreshToken,
        setTokens: (session, refresh) =>
          set({ sessionToken: session, refreshToken: refresh }),
        clearTokens: () =>
          set({
            sessionToken: null,
            refreshToken: null,
            retailToken: null,
            user: null,
            isAuthenticated: false,
          }),
      });

      return {
        sessionToken: null,
        refreshToken: null,
        retailToken: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        _hasHydrated: false,

        setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),

        login: async (phone, password) => {
          set({ isLoading: true, error: null });
          try {
            const response = await loginRetail(phone, password);

            // API returns OK even with wrong password, but no tokens
            if (!response.sessionToken) {
              set({
                isLoading: false,
                error: response.errorMessage || "Login failed. Check your phone number and password.",
              });
              throw new Error(response.errorMessage || "No session token received");
            }

            set({
              sessionToken: response.sessionToken,
              refreshToken: response.sessionRefreshToken ?? null,
              retailToken: response.token ?? null,
              user: response.authInfo ?? null,
              isAuthenticated: true,
              isLoading: false,
            });

            // Set cookie for middleware auth checks
            document.cookie = `blackcab-session=${response.sessionToken}; path=/; SameSite=Lax`;
          } catch (error) {
            set({
              isLoading: false,
              error:
                error instanceof Error
                  ? error.message
                  : "Login failed",
            });
            throw error;
          }
        },

        registerUser: async (phone, name, email) => {
          set({ isLoading: true, error: null });
          try {
            await register(phone, name, email);
            set({ isLoading: false });
          } catch (error) {
            set({
              isLoading: false,
              error:
                error instanceof Error
                  ? error.message
                  : "Registration failed",
            });
            throw error;
          }
        },

        logout: async () => {
          try {
            await apiLogout();
          } catch {
            // Logout may fail if session already expired, that's fine
          }
          set({
            sessionToken: null,
            refreshToken: null,
            retailToken: null,
            user: null,
            isAuthenticated: false,
            error: null,
          });
          document.cookie =
            "blackcab-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        },

        clearError: () => set({ error: null }),
      };
    },
    {
      name: "blackcab-auth",
      partialize: (state) => ({
        sessionToken: state.sessionToken,
        refreshToken: state.refreshToken,
        retailToken: state.retailToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
        // Re-set cookie after hydration
        if (state?.sessionToken) {
          document.cookie = `blackcab-session=${state.sessionToken}; path=/; SameSite=Lax`;
        }
      },
    }
  )
);
