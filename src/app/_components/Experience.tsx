"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior UX/UI Designer",
    company: "FinTech Solutions",
    period: "2022 - Present",
    description:
      "Leading design initiatives for mobile banking products, conducting user research, and establishing design systems that serve 2M+ users.",
    achievements: [
      "Redesigned mobile app increasing user engagement by 45%",
      "Built comprehensive design system used across 5 products",
      "Led UX research initiatives with 100+ user interviews",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UX Designer",
    company: "Banco Digital",
    period: "2020 - 2022",
    description:
      "Designed and shipped key features for digital banking platform, collaborating with cross-functional teams to deliver user-centered solutions.",
    achievements: [
      "Designed onboarding flow with 65% completion rate",
      "Reduced support tickets by 30% through UX improvements",
      "Conducted usability tests with 200+ participants",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Product Designer",
    company: "StartUp Finance",
    period: "2019 - 2020",
    description:
      "Owned end-to-end design process for fintech startup, from user research and wireframing to high-fidelity prototypes and user testing.",
    achievements: [
      "Designed MVP that secured $2M in funding",
      "Created brand identity and design language",
      "Collaborated with developers to implement designs",
    ],
    color: "from-amber-500 to-orange-500",
  },
];

export function Experience() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-neutral-900" />
            <h2 className="text-neutral-900">Experience</h2>
          </div>
          <p className="max-w-2xl text-neutral-600">
            Over 5 years of experience crafting user-centered design solutions
            for the financial industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot - centered vertically */}
                <div className="absolute top-1/2 left-6 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full border-4 border-neutral-900 bg-white md:block" />

                {/* Timeline line to next item */}
                {index < experiences.length - 1 && (
                  <div
                    className="absolute top-1/2 left-8 hidden w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-orange-500 md:block"
                    style={{
                      height: "calc(100% + 3rem)", // 3rem is half of the gap-12 (space-y-12)
                    }}
                  />
                )}

                <div className="md:ml-24">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-neutral-200 bg-linear-to-br from-neutral-50 to-white p-8 shadow-lg transition-shadow hover:shadow-xl"
                  >
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-2 text-neutral-900">{exp.title}</h3>
                        <p className="text-neutral-900">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">
                        <Calendar className="h-4 w-4 text-neutral-500" />
                        <span className="text-sm text-neutral-600">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-neutral-600">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + i * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`mt-1.5 h-2 w-2 rounded-full bg-linear-to-r ${exp.color} shrink-0`}
                          />
                          <p className="text-sm text-neutral-600">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
