"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuthStore } from "@/lib/stores/auth-store";
import { BookingMap } from "@/components/booking/booking-map";
import {
  Search,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Plus,
  Car,
  Zap,
  Users,
} from "lucide-react";

const quickDestinations = [
  { label: "Home", icon: "🏠", subtitle: "Add home address" },
  { label: "Work", icon: "💼", subtitle: "Add work address" },
];

const serviceTypes = [
  {
    id: "standard",
    label: "Standard",
    icon: Car,
    description: "Affordable rides",
    eta: "3-5 min",
  },
  {
    id: "comfort",
    label: "Comfort",
    icon: Star,
    description: "Premium cars",
    eta: "5-8 min",
  },
  {
    id: "xl",
    label: "XL",
    icon: Users,
    description: "Up to 6 seats",
    eta: "8-12 min",
  },
  {
    id: "express",
    label: "Express",
    icon: Zap,
    description: "Fastest pickup",
    eta: "1-3 min",
  },
];

export default function BookPage() {
  const { user } = useAuthStore();
  const [dropoff, setDropoff] = useState("");
  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | null>(null);

  const firstName = user?.name?.split(" ")[0] || "there";
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

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

  // Auto-detect location on mount
  useEffect(() => {
    detectLocation();
  }, [detectLocation]);

  return (
    <div className="relative flex h-[calc(100vh-3.5rem)] flex-col md:flex-row">
      {/* Map — full background on mobile, right panel on desktop */}
      <div className="absolute inset-0 md:relative md:flex-1">
        <BookingMap pickupCoords={pickupCoords} />
      </div>

      {/* Booking panel — bottom sheet on mobile, side panel on desktop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end md:pointer-events-auto md:relative md:inset-auto md:w-[420px] md:border-l md:border-white/60 md:bg-white/70 md:backdrop-blur-xl md:dark:border-white/10 md:dark:bg-zinc-900/70">
        {/* Scrollable content */}
        <div className="pointer-events-auto max-h-[55vh] overflow-y-auto overscroll-contain rounded-t-3xl bg-white/95 px-5 pb-24 pt-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:max-h-none md:rounded-none md:bg-transparent md:px-6 md:pb-8 md:pt-6 md:shadow-none">
          {/* Drag handle (mobile) */}
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-zinc-300 md:hidden" />

          {/* Greeting */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
              {greeting}, {firstName}
            </h1>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Where would you like to go?
            </p>
          </div>

          {/* Destination input */}
          <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl shadow-black/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Where to?"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full rounded-xl border border-input bg-transparent px-3 py-2.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/50"
                />
                <button className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <Search className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Quick destinations */}
            <div className="mt-4 flex gap-2.5">
              {quickDestinations.map((dest) => (
                <button
                  key={dest.label}
                  className="flex flex-1 items-center gap-2.5 rounded-xl border border-input bg-muted/30 px-3 py-2.5 text-left transition-all hover:bg-muted/60"
                >
                  <span className="text-lg">{dest.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium">{dest.label}</p>
                    <p className="truncate text-[10px] text-muted-foreground">{dest.subtitle}</p>
                  </div>
                  <Plus className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Service types */}
          <div className="mt-6">
            <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Choose a ride
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              {serviceTypes.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    className="group rounded-2xl border border-white/60 bg-white/80 p-3.5 text-left shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 transition-colors group-hover:bg-zinc-900 group-hover:text-white dark:bg-zinc-800 dark:group-hover:bg-white dark:group-hover:text-zinc-900">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold">{service.label}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {service.eta}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent trips */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Recent trips
              </h2>
              <button className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                View all
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="flex w-full items-center gap-3.5 rounded-2xl border border-white/60 bg-white/80 p-3.5 text-left transition-all hover:border-zinc-300 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-28 animate-pulse rounded bg-muted" />
                    <div className="mt-1.5 h-2.5 w-40 animate-pulse rounded bg-muted/60" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
