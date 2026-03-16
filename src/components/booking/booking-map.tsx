"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";

const MAP_ID = "blackcab-booking-map";

interface BookingMapProps {
  pickupCoords: { lat: number; lng: number } | null;
  dropoffCoords?: { lat: number; lng: number } | null;
}

function MapContent({ pickupCoords, dropoffCoords }: BookingMapProps) {
  const map = useMap();
  const hasInitialized = useRef(false);

  // Center the marker in the visible top portion of the map (above the panel).
  // On mobile the bottom ~65% is covered by the booking sheet,
  // so we offset the center downward so the marker appears in the visible strip.
  const panToVisible = useCallback(
    (coords: { lat: number; lng: number }) => {
      if (!map) return;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // The bottom sheet covers ~55% of the screen.
        // Visible map strip is the top ~45%.
        // We want the marker centered in that strip (~22% from top).
        // Map center is at 50%, so shift by ~28% of map height.
        const mapDiv = map.getDiv();
        const mapHeight = mapDiv.offsetHeight;
        const offsetPx = mapHeight * 0.25;

        // Project, shift, un-project
        const projection = map.getProjection();
        if (projection) {
          const point = projection.fromLatLngToPoint(
            new google.maps.LatLng(coords.lat, coords.lng)
          );
          if (point) {
            const scale = Math.pow(2, map.getZoom() || 15);
            point.y += offsetPx / scale;
            const shifted = projection.fromPointToLatLng(point);
            if (shifted) {
              map.panTo({ lat: shifted.lat(), lng: shifted.lng() });
              return;
            }
          }
        }
      }

      map.panTo(coords);
    },
    [map]
  );

  useEffect(() => {
    if (!map || !pickupCoords) return;

    if (!hasInitialized.current) {
      map.setZoom(15);
      // Small delay to let the map fully initialize before projecting
      setTimeout(() => panToVisible(pickupCoords), 100);
      hasInitialized.current = true;
    } else {
      panToVisible(pickupCoords);
    }
  }, [map, pickupCoords, panToVisible]);

  useEffect(() => {
    if (!map || !pickupCoords || !dropoffCoords) return;

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(pickupCoords);
    bounds.extend(dropoffCoords);
    map.fitBounds(bounds, { top: 40, bottom: 40, left: 40, right: 40 });
  }, [map, pickupCoords, dropoffCoords]);

  return (
    <>
      {pickupCoords && (
        <AdvancedMarker position={pickupCoords}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30 ring-4 ring-white">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>
        </AdvancedMarker>
      )}

      {dropoffCoords && (
        <AdvancedMarker position={dropoffCoords}>
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/30 ring-4 ring-white">
              <div className="h-2.5 w-2.5 rounded-full bg-white" />
            </div>
            <div className="mt-0.5 h-3 w-0.5 bg-red-500" />
          </div>
        </AdvancedMarker>
      )}
    </>
  );
}

export function BookingMap({ pickupCoords, dropoffCoords }: BookingMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full items-center justify-center bg-muted/30 text-sm text-muted-foreground">
        Map unavailable
      </div>
    );
  }

  // Default center: Bucharest
  const defaultCenter = { lat: 44.4268, lng: 26.1025 };
  const center = pickupCoords || defaultCenter;

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={center}
        defaultZoom={pickupCoords ? 15 : 12}
        mapId={MAP_ID}
        gestureHandling="greedy"
        disableDefaultUI
        zoomControl
        style={{ width: "100%", height: "100%" }}
        colorScheme="LIGHT"
      >
        <MapContent pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
      </Map>
    </APIProvider>
  );
}
