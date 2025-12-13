import { motion } from "framer-motion";
import { Download, Copy, Check } from "lucide-react";
import { useState } from "react";

const markdownContent = `# Enrique García - UX/UI Designer Portfolio

## Summary
UX/UI Designer specializing in banking and financial services. Making banking simpler through research and intentional design.

**Contact:** enrique@example.com  
**Location:** Mexico  
**Status:** Available for work

---

## Experience

### Senior UX/UI Designer | FinTech Solutions
**Period:** 2022 - Present

Leading design initiatives for mobile banking products, conducting user research, and establishing design systems that serve 2M+ users.

**Key Achievements:**
- Redesigned mobile app increasing user engagement by 45%
- Built comprehensive design system used across 5 products
- Led UX research initiatives with 100+ user interviews

---

### UX Designer | Banco Digital
**Period:** 2020 - 2022

Designed and shipped key features for digital banking platform, collaborating with cross-functional teams to deliver user-centered solutions.

**Key Achievements:**
- Designed onboarding flow with 65% completion rate
- Reduced support tickets by 30% through UX improvements
- Conducted usability tests with 200+ participants

---

### Product Designer | StartUp Finance
**Period:** 2019 - 2020

Owned end-to-end design process for fintech startup, from user research and wireframing to high-fidelity prototypes and user testing.

**Key Achievements:**
- Designed MVP that secured $2M in funding
- Created brand identity and design language
- Collaborated with developers to implement designs

---

## Selected Projects

### Mobile Banking Redesign
**Category:** UX Research & Design

Redesigned the mobile banking experience to reduce transaction time by 40% and increase user satisfaction scores.

---

### Investment Dashboard
**Category:** UI Design & Data Visualization

Created an intuitive investment dashboard that helps users make informed decisions with real-time data.

---

### Onboarding Flow Optimization
**Category:** UX Research

Conducted user research and redesigned onboarding flow, increasing completion rates by 65%.

---

## Skills & Expertise

- User Research
- UX/UI Design
- Prototyping
- Design Systems
- Usability Testing
- Information Architecture
- Interaction Design
- Visual Design

---

## Statistics

- **5+ Years** Experience
- **50+** Projects Delivered
- **100+** Research Sessions
- **40%** Average UX Improvement

---

## About

I'm a UX/UI designer specializing in financial services, with a passion for making complex banking systems accessible and delightful for everyday users.

My approach combines rigorous user research with intentional design decisions. I believe that great design isn't just about aesthetics—it's about understanding user needs and creating solutions that truly work.

Based in Mexico, I've worked with fintech startups and established banks to transform digital experiences that millions of users interact with daily.

---

## Contact Information

**Email:** enrique@example.com  
**LinkedIn:** linkedin.com/in/enriquegarcia  
**GitHub:** github.com/enriquegarcia  
**Twitter:** @enriquegarcia

---

*Last updated: December 2025*
`;

interface AIVersionProps {
  _className?: string;
}

export function AIVersion({ _className }: AIVersionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    void setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "enrique-garcia-portfolio.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ai-version" className="min-h-screen bg-neutral-900 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="mb-2 text-white">AI-Optimized Portfolio</h2>
              <p className="text-neutral-400">
                Structured markdown format for AI agents and automated systems
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                <Download className="h-4 w-4" />
                Download
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
        >
          <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/50 px-6 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 text-sm text-neutral-500">portfolio.md</span>
          </div>
          <pre className="max-h-150 overflow-x-auto overflow-y-auto p-8 text-sm leading-relaxed text-neutral-300">
            <code>{markdownContent}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
