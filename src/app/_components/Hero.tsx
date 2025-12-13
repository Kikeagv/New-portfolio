"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WeatherBox } from "./WeatherBox";
import { SpotifyBox } from "./SpotifyBox";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTM2NDY4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    position: { top: "10%", left: "5%" },
    size: "w-64 h-40",
    speed: 0.02,
  },
  {
    url: "https://images.unsplash.com/photo-1610569171388-dd6e3d27e340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2hlcyUyMG5vdGVib29rfGVufDF8fHx8MTc2NTM4MjAyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    position: { top: "60%", left: "8%" },
    size: "w-56 h-56",
    speed: 0.015,
  },
  {
    url: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MzQ0MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    position: { top: "15%", right: "10%" },
    size: "w-48 h-64",
    speed: 0.025,
  },
  {
    url: "https://images.unsplash.com/photo-1652498196118-4577d5f6abd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWVzdGhldGljJTIwd29ya3BsYWNlfGVufDF8fHx8MTc2NTM4MjAyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    position: { top: "65%", right: "5%" },
    size: "w-60 h-44",
    speed: 0.018,
  },
  {
    url: "https://images.unsplash.com/photo-1622117523535-ecb446c0c1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NjUzNzExODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    position: { top: "35%", left: "15%" },
    size: "w-52 h-52",
    speed: 0.022,
  },
  {
    url: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUzMTE4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    position: { top: "40%", right: "18%" },
    size: "w-56 h-40",
    speed: 0.028,
  },
];

interface HeroProps {
  onVersionChange: (version: "human" | "ai") => void;
  selectedVersion: "human" | "ai";
}

export function Hero({ onVersionChange, selectedVersion }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-neutral-50 via-blue-50 to-purple-50">
      {/* Parallax Gallery Background */}
      <div className="pointer-events-none absolute inset-0">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute ${image.size} overflow-hidden rounded-2xl opacity-20 shadow-2xl transition-opacity hover:opacity-30`}
            style={{
              ...image.position,
              transform: `translate(${mousePosition.x * (image.speed * 100)}px, ${mousePosition.y * (image.speed * 100)}px)`,
            }}
          >
            <Image
              src={image.url}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* Weather Box */}
      <div className="absolute top-8 right-8 z-20">
        <WeatherBox />
      </div>

      {/* Version Switcher */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 p-2 shadow-lg backdrop-blur-sm">
          <button
            onClick={() => onVersionChange("human")}
            className="relative rounded-full px-6 py-3 transition-colors"
          >
            {selectedVersion === "human" && (
              <motion.div
                layoutId="active-version"
                className="absolute inset-0 rounded-full bg-neutral-900"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <div className="relative z-10 flex items-center gap-2">
              <span
                className={`text-sm ${selectedVersion === "human" ? "text-white" : "text-neutral-600"}`}
              >
                Version for Humans
              </span>
            </div>
          </button>

          <button
            onClick={() => onVersionChange("ai")}
            className="relative rounded-full px-6 py-3 transition-colors"
          >
            {selectedVersion === "ai" && (
              <motion.div
                layoutId="active-version"
                className="absolute inset-0 rounded-full bg-neutral-900"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <div className="relative z-10 flex items-center gap-2">
              <span
                className={`text-sm ${selectedVersion === "ai" ? "text-white" : "text-neutral-600"}`}
              >
                Version for AI Agents
              </span>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Spotify Box */}
      <div className="absolute bottom-8 left-8 z-20">
        <SpotifyBox />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
        {/* Name badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-sm text-neutral-600">Available for work</span>
        </motion.div>

        {/* Hero text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-12 max-w-6xl text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="mb-4 block">
            <span className="inline-block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enrique García
            </span>{" "}
            <span className="text-neutral-900">is making</span>
          </span>
          <span className="mb-4 block">
            <span className="text-neutral-900">banking simpler through</span>
          </span>
          <span className="block text-neutral-900">
            research and intentional design
          </span>
        </motion.h1>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-white shadow-lg shadow-neutral-900/20 transition-shadow hover:shadow-xl hover:shadow-neutral-900/30"
          >
            <Download className="h-5 w-5" />
            Download resume
          </motion.button>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-neutral-900 bg-white px-8 py-4 text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              View projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
