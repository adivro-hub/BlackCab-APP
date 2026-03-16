"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { requestNewPassword } from "@/lib/api/auth";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Car, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";

const RECAPTCHA_SITE_KEY = "6LdksrkrAAAAAJjlGLJx_xPuBU6bhfML2wlNEyfe";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const getCaptchaToken = useCallback(async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "password_recovery" });
          resolve(token);
        } catch (err) {
          reject(err);
        }
      });
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const captchaToken = await getCaptchaToken();
      await requestNewPassword(phone, captchaToken);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send password");
    } finally {
      setIsLoading(false);
    }
  }

  if (success) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Check your phone</h1>
          <p className="mt-2 text-base text-muted-foreground">
            A new password has been sent to {phone} via SMS.
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
        <h1 className="text-3xl font-semibold tracking-tight">Reset password</h1>
        <p className="mt-2 text-base text-muted-foreground">
          We&apos;ll send a new password to your phone via SMS
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

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-700 text-base font-medium shadow-lg shadow-zinc-900/20 transition-all hover:shadow-xl hover:shadow-zinc-900/30 dark:from-white dark:to-zinc-200 dark:text-zinc-900"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send New Password
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-base text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
