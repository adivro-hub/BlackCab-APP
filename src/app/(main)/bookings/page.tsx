"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function BookingsPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">My Trips</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Booking History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-12 text-gray-400">
            <Clock className="mb-2 h-12 w-12" />
            <p className="text-sm font-medium">No trips yet</p>
            <p className="text-xs">Your booking history will appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
