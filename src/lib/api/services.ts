import { apiClient } from "./client";
import type {
  LoadServicesResponse,
  LoadPaymentTypesResponse,
  InitialSettingsResponse,
  SystemSettingsResponse,
  BookingSettingsResponse,
  PortalConfigResponse,
} from "@/lib/types/generated/sherbook-api";

export async function loadInitialSettings(): Promise<InitialSettingsResponse> {
  return apiClient.post("/settings/initial", {});
}

export async function loadSystemSettings(): Promise<SystemSettingsResponse> {
  return apiClient.post("/settings/system", {});
}

export async function loadBookingSettings(): Promise<BookingSettingsResponse> {
  return apiClient.post("/settings/booking", {
    customerTypes: ["RETAIL"],
  });
}

export async function loadServices(): Promise<LoadServicesResponse> {
  return apiClient.post("/data/services/load", {
    customerTypes: ["RETAIL"],
  });
}

export async function loadPaymentTypes(): Promise<LoadPaymentTypesResponse> {
  return apiClient.post("/data/paymentTypes", {
    customerTypes: ["RETAIL"],
  });
}

export async function loadPortalConfig(): Promise<PortalConfigResponse> {
  return apiClient.get("/portal/config");
}
