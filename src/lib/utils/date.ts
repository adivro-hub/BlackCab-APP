import { format, parse } from "date-fns";
import { SHERBOOK_DATE_FORMAT } from "./constants";

export function toSherbookDate(date: Date): string {
  return format(date, SHERBOOK_DATE_FORMAT);
}

export function fromSherbookDate(dateStr: string): Date {
  return parse(dateStr, SHERBOOK_DATE_FORMAT, new Date());
}

export function formatDisplayDate(date: Date): string {
  return format(date, "dd MMM yyyy, HH:mm");
}

export function formatShortDate(date: Date): string {
  return format(date, "dd MMM, HH:mm");
}
