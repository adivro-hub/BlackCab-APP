"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MessageCircle } from "lucide-react";

export default function TrackingPage() {
  const { jobId } = useParams<{ jobId: string }>();

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Tracking Ride</h1>
      <p className="mb-4 text-sm text-gray-500">Booking: {jobId}</p>

      <div className="grid gap-6 md:grid-cols-[1fr,1fr]">
        {/* Map */}
        <Card className="flex min-h-[400px] items-center justify-center bg-gray-100">
          <div className="text-center text-gray-400">
            <MapPin className="mx-auto mb-2 h-12 w-12" />
            <p className="text-sm font-medium">Live Tracking Map</p>
            <p className="text-xs">Driver position will update in real-time</p>
          </div>
        </Card>

        {/* Ride Info */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Driver Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Driver info will appear when a driver is assigned
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageCircle className="h-4 w-4" />
                Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Chat with your driver during the ride
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
