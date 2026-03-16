import { apiClient } from "./client";
import type {
  JobOfferRequest,
  JobOfferResponse,
  JobOfferCheckRequest,
  JobOfferCheckResponse,
  JobOfferCancelRequest,
  BookJobRequest,
  BookJobResponse,
  CancelBookingRequest,
  CancelBookingResponse,
  BookingDetailsResponse,
  BookingIdRequest,
  DetailedBookingsResponse,
  DriverPositionResponse,
  DriverDetailsResponse,
  DriverDetailsRequest,
  BaseResponse,
} from "@/lib/types/generated/sherbook-api";

export async function makeOffer(
  request: JobOfferRequest
): Promise<JobOfferResponse> {
  return apiClient.post("/offer/make", request);
}

export async function checkOffer(
  offerId: string,
  customerType: string = "RETAIL"
): Promise<JobOfferCheckResponse> {
  return apiClient.post<JobOfferCheckRequest, JobOfferCheckResponse>(
    "/offer/check",
    { offerId, customerType } as JobOfferCheckRequest
  );
}

export async function cancelOffer(
  offerId: string,
  customerType: string = "RETAIL"
): Promise<BaseResponse> {
  return apiClient.post<JobOfferCancelRequest, BaseResponse>(
    "/offer/cancel",
    { offerId, customerType } as JobOfferCancelRequest
  );
}

export async function bookJob(
  request: BookJobRequest
): Promise<BookJobResponse> {
  return apiClient.post("/job/book", request);
}

export async function cancelBooking(
  jobId: string,
  customerType: string = "RETAIL"
): Promise<CancelBookingResponse> {
  return apiClient.post<CancelBookingRequest, CancelBookingResponse>(
    "/booking/cancel",
    { id: jobId, customerType } as CancelBookingRequest
  );
}

export async function loadBookingDetails(
  jobId: string,
  customerType: string = "RETAIL"
): Promise<BookingDetailsResponse> {
  return apiClient.post<BookingIdRequest, BookingDetailsResponse>(
    "/booking/load/details",
    { id: jobId, customerType } as BookingIdRequest
  );
}

export async function loadActiveBookings(): Promise<DetailedBookingsResponse> {
  return apiClient.post("/booking/load/active/full", {
    customerTypes: ["RETAIL"],
  });
}

export async function loadBookingHistory(): Promise<DetailedBookingsResponse> {
  return apiClient.post("/booking/load/history/full", {
    customerTypes: ["RETAIL"],
  });
}

export async function loadDriverPosition(
  jobId: string,
  customerType: string = "RETAIL"
): Promise<DriverPositionResponse> {
  return apiClient.post<BookingIdRequest, DriverPositionResponse>(
    "/booking/load/driverPosition",
    { id: jobId, customerType } as BookingIdRequest
  );
}

export async function loadDriverDetails(
  jobId: string,
  customerType: string = "RETAIL"
): Promise<DriverDetailsResponse> {
  return apiClient.post<DriverDetailsRequest, DriverDetailsResponse>(
    "/booking/load/driver/details",
    { id: jobId, customerType } as DriverDetailsRequest
  );
}
