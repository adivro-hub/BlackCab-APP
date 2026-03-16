"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useSettingsStore } from "@/lib/stores/settings-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Car, ArrowRight, AlertCircle, AlertTriangle } from "lucide-react";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/book";

  const { login, isLoading, error, clearError } = useAuthStore();
  const { loadAll } = useSettingsStore();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [settingsError, setSettingsError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearError();
    setSettingsError(null);

    try {
      await login(phone, password);
    } catch {
      return;
    }

    try {
      await loadAll();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setSettingsError(msg);
      console.warn("Settings load failed:", err);
    }

    router.push(redirect);
  }

  return (
    <div className="space-y-8">
      {/* Logo & heading */}
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white shadow-lg shadow-zinc-900/20 dark:from-white dark:to-zinc-200 dark:text-zinc-900">
          <Car className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to your BlackCab account
        </p>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="flex items-start gap-3 rounded-xl bg-red-50 p-3.5 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {settingsError && (
            <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-3.5 text-sm text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Settings: {settingsError}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Phone Number
            </Label>
            <PhoneInput
              id="phone"
              value={phone}
              onChange={setPhone}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your PIN"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="rounded-xl py-2.5"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-700 text-sm font-medium shadow-lg shadow-zinc-900/20 transition-all hover:shadow-xl hover:shadow-zinc-900/30 dark:from-white dark:to-zinc-200 dark:text-zinc-900"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Sign In
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Footer links */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <Link
          href="/register"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Create account
        </Link>
        <span className="h-4 w-px bg-border" />
        <Link
          href="/forgot-password"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
