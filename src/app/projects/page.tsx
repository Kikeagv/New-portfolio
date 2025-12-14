"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: 'Ruta SV: Digital Wayfinding',
    client: 'Public Transit Initiative',
    period: 'Jan - Apr 2024',
    description: 'Designed El Salvador\'s first comprehensive digital wayfinding system for public transportation',
    metric: '42 user interviews',
    details: 'Offline-first mobile app helping millions navigate Salvadoran bus systems with route planning, cost calculation, and real-time tracking.',
    color: 'from-blue-600 to-cyan-500',
    link: '/projects/ruta-sv',
  },
  {
    id: 2,
    title: 'Mobile Banking Redesign',
    client: 'FinTech Solutions',
    period: 'Jan - Jun 2023',
    description: 'Redesigned the mobile banking experience to reduce transaction time and increase user satisfaction',
    metric: '40% faster transactions',
    details: 'Complete UX overhaul for a digital banking platform, serving 2M+ users with streamlined flows and modern interface.',
    color: 'from-blue-500 to-cyan-500',
    link: '/projects/mobile-banking',
  },
  {
    id: 3,
    title: 'Investment Dashboard',
    client: 'Banco Digital',
    period: 'Mar - Jul 2023',
    description: 'Created an intuitive investment dashboard that helps users make informed decisions with real-time data',
    metric: '60% more active investors',
    details: 'Data visualization redesign for investment platform, making complex financial data accessible to everyday users.',
    color: 'from-purple-500 to-pink-500',
    link: '/projects',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-neutral-50 border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link href="/">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-9 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-neutral-900 text-6xl"
          >
            Detailed Case Studies
          </motion.h1>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {projectsData.map((project, index) => (
            <Link key={project.id} href={project.link}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer mb-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left side - Text content */}
                  <div className="p-12 lg:p-16 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-neutral-900">{project.title}</h2>
                        <span className="text-sm text-neutral-400">{project.period}</span>
                      </div>
                      
                      <p className="text-neutral-700 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <p className="text-sm text-neutral-500 mb-4">
                        {project.metric}
                      </p>
                    </div>

                    <p className="text-neutral-600 leading-relaxed mt-8">
                      {project.details}
                    </p>
                  </div>

                  {/* Right side - Visual */}
                  <div className="relative min-h-[400px] lg:min-h-125">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
                    
                    {/* Mockup placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="relative w-full h-full max-w-md">
                        {/* Phone mockup frame */}
                        <div className="absolute inset-0 bg-neutral-900 rounded-[2.5rem] shadow-2xl p-3">
                          <div className="w-full h-full bg-neutral-800 rounded-[2rem] overflow-hidden">
                            {/* Status bar */}
                            <div className="h-8 bg-neutral-900/50 flex items-center justify-between px-6 text-white text-xs">
                              <span>9:41</span>
                              <div className="flex gap-1">
                                <div className="w-4 h-3 border border-white/50 rounded-sm" />
                              </div>
                            </div>
                            
                            {/* Content area */}
                            <div className="p-6 space-y-4">
                              <div className="h-16 bg-white/10 rounded-xl backdrop-blur-sm" />
                              <div className="h-32 bg-white/10 rounded-xl backdrop-blur-sm" />
                              <div className="h-24 bg-white/10 rounded-xl backdrop-blur-sm" />
                              <div className="grid grid-cols-2 gap-4">
                                <div className="h-20 bg-white/10 rounded-xl backdrop-blur-sm" />
                                <div className="h-20 bg-white/10 rounded-xl backdrop-blur-sm" />
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
