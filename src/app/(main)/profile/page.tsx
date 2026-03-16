"use client";

import { useAuthStore } from "@/lib/stores/auth-store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Profile</h1>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <CardTitle className="text-lg">{user?.name || "User"}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input value={user?.name || ""} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input value={user?.phone || ""} readOnly />
          </div>
          <p className="text-sm text-gray-400">
            Profile editing will be available once the API is connected.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
