"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Mobile Banking Redesign",
    category: "UX Research & Design",
    description:
      "Redesigned the mobile banking experience to reduce transaction time by 40% and increase user satisfaction scores.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Investment Dashboard",
    category: "UI Design & Data Visualization",
    description:
      "Created an intuitive investment dashboard that helps users make informed decisions with real-time data.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Onboarding Flow Optimization",
    category: "UX Research",
    description:
      "Conducted user research and redesigned onboarding flow, increasing completion rates by 65%.",
    color: "from-amber-500 to-orange-500",
  },
];

export function Projects() {
  return (
    <section className="bg-white px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-neutral-900">
                Selected Projects
              </h2>
              <p className="max-w-2xl text-lg text-neutral-600">
                A showcase of projects where research meets design to create
                meaningful banking experiences.
              </p>
            </div>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-white transition-colors hover:bg-neutral-800"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <Link href="/projects">
                <div className="relative mb-6 aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-neutral-100 to-neutral-50">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-10 transition-opacity group-hover:opacity-20`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="h-6 w-6 text-neutral-900" />
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-500">{project.category}</p>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
