"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun, CloudRain, Wind, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

// Icon mapping
const iconMap = {
  sun: Sun,
  cloud: Cloud,
  "cloud-rain": CloudRain,
  wind: Wind,
} as const;

export function WeatherBox() {
  const [time, setTime] = useState(new Date());

  // Fetch weather data with tRPC and React Query
  const {
    data: weather,
    isLoading,
    error,
  } = api.weather.getCurrent.useQuery(undefined, {
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert to San Salvador time (CST - UTC-6)
  const sanSalvadorTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/El_Salvador",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(time);

  // Get the appropriate weather icon
  const WeatherIcon = weather ? iconMap[weather.icon] : Sun;
  const iconColor =
    weather?.icon === "sun"
      ? "text-orange-500"
      : weather?.icon === "cloud-rain"
        ? "text-blue-500"
        : weather?.icon === "wind"
          ? "text-gray-500"
          : "text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0">
          {isLoading ? (
            <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
          ) : (
            <WeatherIcon className={`h-8 w-8 ${iconColor}`} />
          )}
        </div>
        <div className="flex-1">
          <div className="mb-1 text-2xl text-neutral-900">
            {sanSalvadorTime}
          </div>
          <div className="text-sm text-neutral-600">
            {weather?.location ?? "San Salvador"}
          </div>

          {isLoading ? (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg text-neutral-400">Loading...</span>
            </div>
          ) : error ? (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-red-500">Weather unavailable</span>
            </div>
          ) : weather ? (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg text-neutral-900">
                {weather.temperature}°C
              </span>
              <span className="text-xs text-neutral-500">
                {weather.condition}
              </span>
              {weather.windSpeed && (
                <span className="text-xs text-neutral-400">
                  • {weather.windSpeed} km/h
                </span>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
