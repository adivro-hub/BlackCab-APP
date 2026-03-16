import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  loadInitialSettings,
  loadSystemSettings,
  loadBookingSettings,
  loadServices,
  loadPaymentTypes,
  loadPortalConfig,
} from "@/lib/api/services";
import type {
  InitialSettingsDto,
  SystemSettingsDto,
  BookingSettingsDto,
  ServiceDto,
  PaymentTypeDto,
  PortalConfigDto,
} from "@/lib/types/generated/sherbook-api";

interface SettingsState {
  initialSettings: InitialSettingsDto | null;
  systemSettings: SystemSettingsDto | null;
  bookingSettings: BookingSettingsDto[] | null;
  services: ServiceDto[] | null;
  paymentTypes: PaymentTypeDto[] | null;
  portalConfig: PortalConfigDto | null;
  isLoaded: boolean;
  isLoading: boolean;

  loadAll: () => Promise<void>;
  reset: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      initialSettings: null,
      systemSettings: null,
      bookingSettings: null,
      services: null,
      paymentTypes: null,
      portalConfig: null,
      isLoaded: false,
      isLoading: false,

      loadAll: async () => {
        set({ isLoading: true });
        try {
          const [
            initialRes,
            systemRes,
            bookingRes,
            servicesRes,
            paymentRes,
            portalRes,
          ] = await Promise.all([
            loadInitialSettings(),
            loadSystemSettings(),
            loadBookingSettings(),
            loadServices(),
            loadPaymentTypes(),
            loadPortalConfig(),
          ]);

          set({
            initialSettings: initialRes.initialSettings ?? null,
            systemSettings: systemRes.systemSettings ?? null,
            bookingSettings: bookingRes.bookingSettings ?? null,
            services: servicesRes.services ?? null,
            paymentTypes: paymentRes.paymentTypes ?? null,
            portalConfig: portalRes.config ?? null,
            isLoaded: true,
            isLoading: false,
          });
        } catch (error) {
          console.error("Failed to load settings:", error);
          set({ isLoading: false });
          throw error;
        }
      },

      reset: () =>
        set({
          initialSettings: null,
          systemSettings: null,
          bookingSettings: null,
          services: null,
          paymentTypes: null,
          portalConfig: null,
          isLoaded: false,
          isLoading: false,
        }),
    }),
    {
      name: "blackcab-settings",
      partialize: (state) => ({
        initialSettings: state.initialSettings,
        systemSettings: state.systemSettings,
        bookingSettings: state.bookingSettings,
        services: state.services,
        paymentTypes: state.paymentTypes,
        portalConfig: state.portalConfig,
        isLoaded: state.isLoaded,
      }),
    }
  )
);
