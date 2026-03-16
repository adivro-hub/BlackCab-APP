import { apiClient } from "./client";
import type {
  LoadChatRequest,
  LoadChatResponse,
  MessageToDriverRequest,
  MessageToDriverResponse,
} from "@/lib/types/generated/sherbook-api";

export async function loadChat(
  jobId: string,
  customerType: string = "RETAIL"
): Promise<LoadChatResponse> {
  return apiClient.post<LoadChatRequest, LoadChatResponse>("/chat/load", {
    id: jobId,
    customerType,
  } as LoadChatRequest);
}

export async function sendMessage(
  jobId: string,
  message: string,
  customerType: string = "RETAIL"
): Promise<MessageToDriverResponse> {
  return apiClient.post<MessageToDriverRequest, MessageToDriverResponse>(
    "/chat/send",
    {
      id: jobId,
      customerType,
      message,
    } as MessageToDriverRequest
  );
}

export async function markChatRead(jobId: string): Promise<void> {
  await apiClient.post("/chat/markRead", {
    id: jobId,
    customerType: "RETAIL",
  });
}
