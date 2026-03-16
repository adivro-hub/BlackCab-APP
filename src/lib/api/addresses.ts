import { apiClient } from "./client";
import type {
  AddressSearchRequest,
  AddressSearchResponse,
  AddressPositionRequest,
  AddressResponse,
  RecentAddressResponse,
  FavoriteAddressesResponse,
} from "@/lib/types/generated/sherbook-api";

export async function searchAddresses(
  query: string,
  options?: {
    latitude?: number;
    longitude?: number;
    limit?: number;
  }
): Promise<AddressSearchResponse> {
  return apiClient.post<AddressSearchRequest, AddressSearchResponse>(
    "/addresses/search/query",
    {
      searchString: query,
      customerType: "RETAIL",
      ...options,
    } as AddressSearchRequest
  );
}

export async function searchByPosition(
  latitude: number,
  longitude: number
): Promise<AddressResponse> {
  return apiClient.post<AddressPositionRequest, AddressResponse>(
    "/addresses/search/position",
    {
      latitude,
      longitude,
    } as AddressPositionRequest
  );
}

export async function loadRecentAddresses(): Promise<RecentAddressResponse> {
  return apiClient.post("/addresses/book/load/recent", {
    customerType: "RETAIL",
  });
}

export async function loadFavouriteAddresses(): Promise<FavoriteAddressesResponse> {
  return apiClient.post("/addresses/book/load/favourites", {
    customerTypes: ["RETAIL"],
  });
}
