"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuthStore } from "@/lib/stores/auth-store";
import { BookingMap } from "@/components/booking/booking-map";
import {
  Search,
  MapPin,
  Clock,
  Star,
  Car,
  Zap,
  Users,
  Navigation,
} from "lucide-react";

const serviceTypes = [
  { id: "standard", label: "Standard", icon: Car, eta: "3 min" },
  { id: "comfort", label: "Comfort", icon: Star, eta: "5 min" },
  { id: "xl", label: "XL", icon: Users, eta: "8 min" },
  { id: "express", label: "Express", icon: Zap, eta: "1 min" },
];

export default function BookPage() {
  const { user } = useAuthStore();
  const [dropoff, setDropoff] = useState("");
  const [pickupCoords, setPickupCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [selectedService, setSelectedService] = useState("standard");

  const detectLocation = useCallback(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPickupCoords({ lat: latitude, lng: longitude });
      },
      () => {},
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  useEffect(() => {
    detectLocation();
  }, [detectLocation]);

  return (
    <div className="relative flex h-[calc(100dvh-3.5rem-3.5rem)] flex-col md:h-[calc(100dvh-3.5rem)] md:flex-row">
      {/* Map — full background on mobile */}
      <div className="absolute inset-0 md:relative md:flex-1">
        <BookingMap pickupCoords={pickupCoords} />
      </div>

      {/* Re-center button */}
      <button
        onClick={detectLocation}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all active:scale-95 md:right-auto md:left-3"
      >
        <Navigation className="h-4 w-4 text-zinc-700" />
      </button>

      {/* Bottom sheet — compact on mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end md:pointer-events-auto md:relative md:inset-auto md:w-[420px] md:border-l md:border-zinc-200 md:bg-white">
        <div className="pointer-events-auto overflow-y-auto overscroll-contain rounded-t-2xl bg-white px-4 pb-4 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:max-h-none md:rounded-none md:px-5 md:pb-6 md:pt-5 md:shadow-none">
          {/* Drag handle */}
          <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-zinc-300 md:hidden" />

          {/* Destination input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100">
                <MapPin className="h-3.5 w-3.5 text-red-600" />
              </div>
            </div>
            <input
              type="text"
              placeholder="Where to?"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-13 pr-10 text-base outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-3 focus:ring-zinc-200"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Quick destinations */}
          <div className="mt-3 flex gap-2">
            <button className="flex flex-1 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-left transition-all active:scale-[0.98]">
              <span className="text-sm">🏠</span>
              <span className="text-xs font-medium text-zinc-700">Home</span>
            </button>
            <button className="flex flex-1 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-left transition-all active:scale-[0.98]">
              <span className="text-sm">💼</span>
              <span className="text-xs font-medium text-zinc-700">Work</span>
            </button>
          </div>

          {/* Service types — horizontal scroll on mobile */}
          <div className="mt-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {serviceTypes.map((service) => {
                const Icon = service.icon;
                const isActive = selectedService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 transition-all active:scale-[0.97] ${
                      isActive
                        ? "border-zinc-900 bg-zinc-900 text-white shadow-md"
                        : "border-zinc-200 bg-white text-zinc-700"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <div className="text-left">
                      <p className="text-xs font-semibold">{service.label}</p>
                      <p
                        className={`text-[10px] ${isActive ? "text-zinc-300" : "text-zinc-400"}`}
                      >
                        <Clock className="mr-0.5 inline h-2.5 w-2.5" />
                        {service.eta}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
