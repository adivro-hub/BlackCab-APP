export const SHERBOOK_DATE_FORMAT = "dd/MM/yyyy HH:mm";

export const BOOKING_STATUS = {
  BOOKED: 0,
  DRIVER_ON_WAY: 10,
  DRIVER_AT_PICKUP: 20,
  PASSENGER_ON_BOARD: 30,
  DONE: 40,
  CANCELLED: 50,
} as const;

export const BOOKING_STATUS_LABELS: Record<number, string> = {
  [BOOKING_STATUS.BOOKED]: "Booked",
  [BOOKING_STATUS.DRIVER_ON_WAY]: "Driver on the way",
  [BOOKING_STATUS.DRIVER_AT_PICKUP]: "Driver at pickup",
  [BOOKING_STATUS.PASSENGER_ON_BOARD]: "On board",
  [BOOKING_STATUS.DONE]: "Completed",
  [BOOKING_STATUS.CANCELLED]: "Cancelled",
};

export const CUSTOMER_TYPE = {
  RETAIL: "RETAIL",
  CORPORATE: "CORPORATE",
  ANONYMOUS: "ANONYMOUS",
} as const;

export const ERROR_MESSAGES: Record<string, string> = {
  OK: "Success",
  INVALID_PASSWORD: "Incorrect password. Please try again.",
  USER_NOT_FOUND: "No account found with this phone number.",
  USER_ALREADY_EXISTS: "An account with this phone number already exists.",
  FULLY_BOOKED: "No vehicles available at this time. Please try later.",
  TOO_EARLY_FOR_PREBOOK: "This booking is too far in advance.",
  TOO_LATE_FOR_PREBOOK: "This time slot is no longer available.",
  INVALID_OPERATIONAL_AREA: "Service is not available in this area.",
  TOKEN_NOT_VALID: "Your session has expired. Please log in again.",
  INVALID_REQUEST: "Invalid request. Please check your input.",
  INVALID_CUSTOMER_TYPE: "Authentication error.",
  ACCOUNT_ON_HOLD: "Your account is on hold. Please contact support.",
  USER_ON_HOLD: "Your account is suspended. Please contact support.",
  UNABLE_TO_SEND_PASSWORD: "Unable to send password. Please try again later.",
  SMARTPHONE_VALIDATION_FAILED: "Device validation failed.",
  APPLICATION_OUTDATED: "Please update the application.",
  FIELDS_VALIDATION_FAILED: "Please check your input and try again.",
  CAPTCHA_REQUIRED: "Captcha verification required.",
  DRIVER_NOT_FOUND: "No drivers available. Please try again.",
};

export function getErrorMessage(status: string): string {
  return ERROR_MESSAGES[status] || `An error occurred (${status})`;
}
