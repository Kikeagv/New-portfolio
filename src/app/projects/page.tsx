"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Ruta SV: Digital Wayfinding",
    client: "Public Transit Initiative",
    period: "Jan - Apr 2024",
    description:
      "Designed El Salvador's first comprehensive digital wayfinding system for public transportation",
    metric: "42 user interviews",
    details:
      "Offline-first mobile app helping millions navigate Salvadoran bus systems with route planning, cost calculation, and real-time tracking.",
    color: "from-blue-600 to-cyan-500",
    link: "/projects/ruta-sv",
  },
  {
    id: 2,
    title: "Healthcare for Older Adults",
    client: "TeleHealth Initiative",
    period: "May - Jul 2024",
    description:
      "Designed a WCAG AAA-compliant telehealth platform optimized for users aged 65 and older",
    metric: "95% success rate",
    details:
      "Accessible video consultation platform enabling older adults to book appointments, attend consultations, and manage healthcare independently.",
    color: "from-emerald-600 to-teal-500",
    link: "/projects/healthcare",
  },
  {
    id: 3,
    title: "Mobile Banking Redesign",
    client: "FinTech Solutions",
    period: "Jan - Jun 2023",
    description:
      "Redesigned the mobile banking experience to reduce transaction time and increase user satisfaction",
    metric: "40% faster transactions",
    details:
      "Complete UX overhaul for a digital banking platform, serving 2M+ users with streamlined flows and modern interface.",
    color: "from-blue-500 to-cyan-500",
    link: "/projects/mobile-banking",
  },
  {
    id: 4,
    title: "Investment Dashboard",
    client: "Banco Digital",
    period: "Mar - Jul 2023",
    description:
      "Created an intuitive investment dashboard that helps users make informed decisions with real-time data",
    metric: "60% more active investors",
    details:
      "Data visualization redesign for investment platform, making complex financial data accessible to everyday users.",
    color: "from-purple-500 to-pink-500",
    link: "/projects",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link href="/">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-neutral-50 px-6 py-9">
        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl text-neutral-900"
          >
            Detailed Case Studies
          </motion.h1>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-32">
          {projectsData.map((project, index) => (
            <Link key={project.id} href={project.link}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="mb-16 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                  {/* Left side - Text content */}
                  <div className="flex flex-col justify-between p-12 lg:p-16">
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-neutral-900">{project.title}</h2>
                        <span className="text-sm text-neutral-400">
                          {project.period}
                        </span>
                      </div>

                      <p className="mb-6 text-lg leading-relaxed text-neutral-700">
                        {project.description}
                      </p>

                      <p className="mb-4 text-sm text-neutral-500">
                        {project.metric}
                      </p>
                    </div>

                    <p className="mt-8 leading-relaxed text-neutral-600">
                      {project.details}
                    </p>
                  </div>

                  {/* Right side - Visual */}
                  <div className="relative min-h-[400px] lg:min-h-125">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

                    {/* Mockup placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="relative h-full w-full max-w-md">
                        {/* Phone mockup frame */}
                        <div className="absolute inset-0 rounded-[2.5rem] bg-neutral-900 p-3 shadow-2xl">
                          <div className="h-full w-full overflow-hidden rounded-[2rem] bg-neutral-800">
                            {/* Status bar */}
                            <div className="flex h-8 items-center justify-between bg-neutral-900/50 px-6 text-xs text-white">
                              <span>9:41</span>
                              <div className="flex gap-1">
                                <div className="h-3 w-4 rounded-sm border border-white/50" />
                              </div>
                            </div>

                            {/* Content area */}
                            <div className="space-y-4 p-6">
                              <div className="h-16 rounded-xl bg-white/10 backdrop-blur-sm" />
                              <div className="h-32 rounded-xl bg-white/10 backdrop-blur-sm" />
                              <div className="h-24 rounded-xl bg-white/10 backdrop-blur-sm" />
                              <div className="grid grid-cols-2 gap-4">
                                <div className="h-20 rounded-xl bg-white/10 backdrop-blur-sm" />
                                <div className="h-20 rounded-xl bg-white/10 backdrop-blur-sm" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
