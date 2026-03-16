"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth-store";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Clock, User, LogOut, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/book", label: "Book", icon: MapPin },
  { href: "/bookings", label: "My Trips", icon: Clock },
  { href: "/payments", label: "Payments", icon: CreditCard },
  { href: "/profile", label: "Profile", icon: User },
];

export function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <>
      {/* Desktop header — hidden on mobile */}
      <header className="sticky top-0 z-40 hidden border-b border-white/60 bg-white/70 backdrop-blur-xl md:block dark:border-white/10 dark:bg-zinc-900/70">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <Link href="/book" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white dark:from-white dark:to-zinc-200 dark:text-zinc-900">
              <Car className="h-4 w-4" />
            </div>
            <span className="text-base font-semibold tracking-tight">BlackCab</span>
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all",
                    isActive
                      ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-900"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {user && (
              <span className="hidden text-sm text-muted-foreground md:block">
                {user.name}
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => logout()}
              className="rounded-xl text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/60 bg-white/80 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-zinc-900/80">
        <div className="flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-xl transition-all",
                    isActive && "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
