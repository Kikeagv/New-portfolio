"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun, CloudRain, Wind } from "lucide-react";

export function WeatherBox() {
  const [time, setTime] = useState(new Date());

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

  // Mock weather data for San Salvador
  const weather = {
    temp: 28,
    condition: "Partly Cloudy",
    icon: Sun,
  };

  const WeatherIcon = weather.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-lg backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0">
          <WeatherIcon className="h-8 w-8 text-orange-500" />
        </div>
        <div>
          <div className="mb-1 text-2xl text-neutral-900">
            {sanSalvadorTime}
          </div>
          <div className="text-sm text-neutral-600">San Salvador</div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg text-neutral-900">{weather.temp}°C</span>
            <span className="text-xs text-neutral-500">
              {weather.condition}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
