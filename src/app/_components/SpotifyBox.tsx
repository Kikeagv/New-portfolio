"use client";

import { motion } from "framer-motion";
import { Music, Play, Pause } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function SpotifyBox() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder song data
  const currentSong = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    albumArt:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    duration: "3:20",
    progress: 65, // percentage
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-80 rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-lg backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center gap-2">
        <Music className="h-4 w-4 text-green-500" />
        <span className="text-xs text-neutral-400">
          Recently played on Spotify
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Album Art */}
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-800">
          <Image
            src={currentSong.albumArt}
            alt={currentSong.album}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Song Info */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 truncate text-sm text-white">
            {currentSong.title}
          </div>
          <div className="truncate text-xs text-neutral-400">
            {currentSong.artist}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-700">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: `${currentSong.progress}%` }}
              animate={{
                width: isPlaying ? "100%" : `${currentSong.progress}%`,
              }}
              transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
            />
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-600"
          >
            {isPlaying ? (
              <Pause className="h-3 w-3 text-white" />
            ) : (
              <Play className="ml-0.5 h-3 w-3 text-white" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
