"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const COUNTRIES = [
  { code: "+40", flag: "🇷🇴", name: "Romania", format: "7XX XXX XXX" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom", format: "7XXX XXXXXX" },
  { code: "+1", flag: "🇺🇸", name: "United States", format: "(XXX) XXX-XXXX" },
  { code: "+49", flag: "🇩🇪", name: "Germany", format: "1XX XXXXXXX" },
  { code: "+33", flag: "🇫🇷", name: "France", format: "6 XX XX XX XX" },
  { code: "+39", flag: "🇮🇹", name: "Italy", format: "3XX XXX XXXX" },
  { code: "+34", flag: "🇪🇸", name: "Spain", format: "6XX XXX XXX" },
  { code: "+36", flag: "🇭🇺", name: "Hungary", format: "XX XXX XXXX" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria", format: "XX XXX XXXX" },
  { code: "+373", flag: "🇲🇩", name: "Moldova", format: "XX XXX XXX" },
] as const;

interface PhoneInputProps {
  value: string;
  onChange: (fullNumber: string) => void;
  disabled?: boolean;
  id?: string;
  required?: boolean;
}

export function PhoneInput({
  value,
  onChange,
  disabled,
  id,
  required,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Parse value into country code and number
  const parsed = React.useMemo(() => {
    for (const country of COUNTRIES) {
      if (value.startsWith(country.code)) {
        return {
          country,
          number: value.slice(country.code.length).trim(),
        };
      }
    }
    return { country: COUNTRIES[0], number: value.replace(/^\+?\d{1,3}\s?/, "") };
  }, [value]);

  const [selectedCountry, setSelectedCountry] = React.useState(parsed.country);
  const [localNumber, setLocalNumber] = React.useState(parsed.number);

  // Sync when value changes externally
  React.useEffect(() => {
    setSelectedCountry(parsed.country);
    setLocalNumber(parsed.number);
  }, [parsed.country, parsed.number]);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const num = e.target.value;
    setLocalNumber(num);
    onChange(`${selectedCountry.code}${num}`);
  }

  function handleCountrySelect(country: (typeof COUNTRIES)[number]) {
    setSelectedCountry(country);
    setIsOpen(false);
    onChange(`${country.code}${localNumber}`);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={cn(
          "flex items-center gap-0 rounded-xl border border-input bg-transparent transition-all",
          "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        {/* Country selector */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "flex items-center gap-1.5 rounded-l-xl px-3 py-2.5 text-sm font-medium",
            "border-r border-input bg-muted/30 hover:bg-muted/60 transition-colors",
            "focus:outline-none"
          )}
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="text-muted-foreground">{selectedCountry.code}</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>

        {/* Number input */}
        <input
          id={id}
          type="tel"
          inputMode="numeric"
          value={localNumber}
          onChange={handleNumberChange}
          placeholder={selectedCountry.format}
          disabled={disabled}
          required={required}
          className={cn(
            "flex-1 bg-transparent px-3 py-2.5 text-sm outline-none",
            "placeholder:text-muted-foreground"
          )}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1.5 w-full overflow-hidden rounded-xl border border-input bg-popover shadow-lg animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="max-h-56 overflow-y-auto py-1">
            {COUNTRIES.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className={cn(
                  "flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-muted/60",
                  selectedCountry.code === country.code && "bg-muted"
                )}
              >
                <span className="text-base leading-none">{country.flag}</span>
                <span className="flex-1 text-left">{country.name}</span>
                <span className="text-muted-foreground">{country.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
