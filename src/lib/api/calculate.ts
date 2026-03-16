import { apiClient } from "./client";
import type {
  PriceRequest,
  PriceResponse,
  DelayRequest,
  DelayResponse,
  JourneyTimeRequest,
  JourneyTimeResponse,
  QuotationRequest,
  QuotationResponse,
  RouteRequest,
  RouteResponse,
  PrebookLimitRequest,
  PrebookLimitResponse,
} from "@/lib/types/generated/sherbook-api";

export async function calculatePrice(
  request: PriceRequest
): Promise<PriceResponse> {
  return apiClient.post("/calculate/price", request);
}

export async function calculateDelay(
  request: DelayRequest
): Promise<DelayResponse> {
  return apiClient.post("/calculate/delay", request);
}

export async function calculateJourneyTime(
  request: JourneyTimeRequest
): Promise<JourneyTimeResponse> {
  return apiClient.post("/calculate/journeyTime", request);
}

export async function calculateQuotation(
  request: QuotationRequest
): Promise<QuotationResponse> {
  return apiClient.post("/calculate/quotation", request);
}

export async function calculateRoute(
  request: RouteRequest
): Promise<RouteResponse> {
  return apiClient.post("/calculate/route", request);
}

export async function calculatePrebookLimit(
  request: PrebookLimitRequest
): Promise<PrebookLimitResponse> {
  return apiClient.post("/calculate/prebookLimit", request);
}
