"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/lib/stores/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Car, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { registerUser, isLoading, error, clearError } = useAuthStore();

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearError();

    try {
      await registerUser(phone, name, email);
      setSuccess(true);
    } catch {
      // Error is handled by the store
    }
  }

  if (success) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">You&apos;re in!</h1>
          <p className="mt-2 text-base text-muted-foreground">
            A password has been sent to your phone via SMS. Use it to sign in.
          </p>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <Button
            onClick={() => router.push("/login")}
            className="h-11 w-full rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-700 text-base font-medium shadow-lg shadow-zinc-900/20 dark:from-white dark:to-zinc-200 dark:text-zinc-900"
          >
            <span className="flex items-center gap-2">
              Go to Sign In
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Logo & heading */}
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 text-white shadow-lg shadow-zinc-900/20 dark:from-white dark:to-zinc-200 dark:text-zinc-900">
          <Car className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Create account</h1>
        <p className="mt-2 text-base text-muted-foreground">
          Join BlackCab and start booking rides
        </p>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/[0.03] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="flex items-start gap-3 rounded-xl bg-red-50 p-3.5 text-base text-red-700 dark:bg-red-950/50 dark:text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
              className="rounded-xl py-2.5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
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
            <Label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="rounded-xl py-2.5"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-700 text-base font-medium shadow-lg shadow-zinc-900/20 transition-all hover:shadow-xl hover:shadow-zinc-900/30 dark:from-white dark:to-zinc-200 dark:text-zinc-900"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Creating account...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Register
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Footer links */}
      <div className="text-center text-base text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-foreground transition-colors hover:text-foreground/80"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
