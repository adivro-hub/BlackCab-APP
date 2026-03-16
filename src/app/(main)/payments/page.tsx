"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-6 text-2xl font-bold">Payment Methods</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Saved Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-12 text-gray-400">
            <CreditCard className="mb-2 h-12 w-12" />
            <p className="text-sm font-medium">No payment methods</p>
            <p className="text-xs">Add a card to get started</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
