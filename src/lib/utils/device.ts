import type { DeviceDto } from "@/lib/types/generated/sherbook-api";

const DEVICE_ID_KEY = "blackcab-device-id";

function generateUUID(): string {
  return crypto.randomUUID();
}

function getOrCreateDeviceId(): string {
  if (typeof window === "undefined") return "server";
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = generateUUID();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
}

export function buildWebDeviceDto(): DeviceDto {
  const deviceId = getOrCreateDeviceId();
  return {
    deviceId,
    osId: "iPhone OS",
    osVersion: "17.0",
    appVersion: "3.15.1",
    appId: "com.haulmont.miiles",
    screenWidth: typeof window !== "undefined" ? window.screen.width : 390,
    screenHeight: typeof window !== "undefined" ? window.screen.height : 844,
    fingerprint: deviceId,
    imei: "",
    type: "IPHONE" as DeviceDto["type"],
  };
}
