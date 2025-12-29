import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Weather data schema
const WeatherDataSchema = z.object({
  current: z.object({
    temperature_2m: z.number(),
    weather_code: z.number(),
    wind_speed_10m: z.number(),
  }),
  current_units: z.object({
    temperature_2m: z.string(),
    wind_speed_10m: z.string(),
  }),
});

// Weather condition mapping based on WMO weather codes
const getWeatherCondition = (
  code: number,
): { condition: string; icon: "sun" | "cloud" | "cloud-rain" | "wind" } => {
  // WMO Weather Interpretation Codes
  if (code === 0) return { condition: "Clear", icon: "sun" };
  if (code === 1 || code === 2 || code === 3)
    return { condition: "Partly Cloudy", icon: "cloud" };
  if (code >= 45 && code <= 48) return { condition: "Foggy", icon: "cloud" };
  if (code >= 51 && code <= 67)
    return { condition: "Rainy", icon: "cloud-rain" };
  if (code >= 71 && code <= 77)
    return { condition: "Snowy", icon: "cloud-rain" };
  if (code >= 80 && code <= 82)
    return { condition: "Rain Showers", icon: "cloud-rain" };
  if (code >= 85 && code <= 86)
    return { condition: "Snow Showers", icon: "cloud-rain" };
  if (code === 95) return { condition: "Thunderstorm", icon: "cloud-rain" };
  if (code >= 96 && code <= 99)
    return { condition: "Thunderstorm", icon: "cloud-rain" };

  // Default for other codes
  return { condition: "Cloudy", icon: "cloud" };
};

export const weatherRouter = createTRPCRouter({
  getCurrent: publicProcedure.query(async () => {
    try {
      // San Salvador coordinates
      const latitude = 13.6929;
      const longitude = -89.2182;

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=America%2FEl_Salvador`;

      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Portfolio-Weather-Widget/1.0",
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(
          `Weather API request failed: ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as unknown;

      // Validate the response data
      const validatedData = WeatherDataSchema.parse(data);

      const { condition, icon } = getWeatherCondition(
        validatedData.current.weather_code,
      );

      return {
        temperature: Math.round(validatedData.current.temperature_2m),
        condition,
        icon,
        windSpeed: Math.round(validatedData.current.wind_speed_10m),
        location: "San Salvador",
        lastUpdated: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Weather API error:", error);

      // Return fallback data if API fails
      return {
        temperature: 28,
        condition: "Partly Cloudy",
        icon: "sun" as const,
        windSpeed: 10,
        location: "San Salvador",
        lastUpdated: new Date().toISOString(),
      };
    }
  }),
});
