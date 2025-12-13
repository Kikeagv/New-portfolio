"use client";

import { useState } from "react";
import { Hero } from "./Hero";

interface HeroWrapperProps {
  className?: string;
  onVersionChange?: (version: "human" | "ai") => void;
  selectedVersion?: "human" | "ai";
}

export function HeroWrapper({
  onVersionChange: externalOnVersionChange,
  selectedVersion: externalSelectedVersion,
}: HeroWrapperProps) {
  const [internalSelectedVersion, setInternalSelectedVersion] = useState<
    "human" | "ai"
  >("human");

  // Use external version if provided, otherwise use internal state
  const selectedVersion = externalSelectedVersion ?? internalSelectedVersion;

  const handleVersionChange = (version: "human" | "ai") => {
    // Update internal state if no external handler is provided
    if (!externalOnVersionChange) {
      setInternalSelectedVersion(version);
    }
    // Call external handler if provided
    if (externalOnVersionChange) {
      externalOnVersionChange(version);
    }
  };

  return (
    <Hero
      onVersionChange={handleVersionChange}
      selectedVersion={selectedVersion}
    />
  );
}
