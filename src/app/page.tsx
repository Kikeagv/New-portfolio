"use client";

import { useState } from "react";
import { HeroWrapper } from "~/app/_components/HeroWrapper";
import { Projects } from "~/app/_components/Projects";
import { About } from "~/app/_components/About";
import { Experience } from "~/app/_components/Experience";
import { Contact } from "~/app/_components/Contact";
import { AIVersion } from "~/app/_components/AIVersion";

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState<"human" | "ai">(
    "human",
  );

  const handleVersionChange = (version: "human" | "ai") => {
    setSelectedVersion(version);

    // If switching to AI version, scroll to the AI component
    if (version === "ai") {
      void setTimeout(() => {
        const element = document.getElementById("ai-version");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <HeroWrapper
        onVersionChange={handleVersionChange}
        selectedVersion={selectedVersion}
      />
      {selectedVersion === "human" ? (
        <>
          <Projects />
          <About />
          <Experience />
          <Contact />
        </>
      ) : (
        <AIVersion />
      )}
    </>
  );
}
