"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function RutaSVCaseStudyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 mix-blend-difference">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/projects">
            <motion.span
              className="flex items-center gap-2 text-sm text-white"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="h-4 w-4" />
              Work
            </motion.span>
          </Link>
          <span className="text-sm text-white">Ruta SV</span>
        </div>
      </nav>

      {/* Hero - Full viewport, cinematic */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#0a0a0a] to-cyan-950" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-sm tracking-[0.3em] text-blue-400 uppercase"
          >
            Case Study
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 text-5xl leading-[1.1] font-light text-white md:text-7xl lg:text-8xl"
          >
            What if a city&rsquo;s entire
            <br />
            <span className="text-blue-400 italic">transit knowledge</span>
            <br />
            lived in people&rsquo;s heads?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-xl text-lg text-neutral-400"
          >
            I designed El Salvador&rsquo;s first public transit app—for users
            who&rsquo;d never used one.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* The Hook - Big statement */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="mx-auto max-w-4xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl leading-relaxed font-light text-neutral-900 md:text-4xl lg:text-5xl"
          >
            In San Salvador, there are no route maps. No schedules. No apps.
            <span className="text-neutral-400">
              {" "}
              If you want to know which bus goes where, you ask a stranger and
              hope they&rsquo;re right.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Context - Visual impact */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="flex aspect-square flex-col justify-end rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8"
            >
              <p className="text-6xl font-light text-white md:text-7xl">0</p>
              <p className="mt-2 text-blue-200">transit apps existed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex aspect-square flex-col justify-end rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-800 p-8"
            >
              <p className="text-6xl font-light text-white md:text-7xl">
                $0.25
              </p>
              <p className="mt-2 text-cyan-200">exact fare, no change given</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex aspect-square flex-col justify-end rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-8"
            >
              <p className="text-6xl font-light text-white md:text-7xl">∞</p>
              <p className="mt-2 text-neutral-400">
                routes learned by word of mouth
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Role - Clean, confident */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
                My Role
              </p>
              <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
                Lead Product Designer
              </h2>
              <p className="mt-6 text-lg text-neutral-600">
                End-to-end ownership from research through shipped product,
                leading a team of 7 over 16 weeks.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-blue-500 pl-6">
                <p className="font-medium text-neutral-900">Research</p>
                <p className="mt-1 text-neutral-600">
                  42 interviews, 8 focus groups, 50+ hours in the field
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Strategy</p>
                <p className="mt-1 text-neutral-600">
                  Defined product vision, principles, and information
                  architecture
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Design</p>
                <p className="mt-1 text-neutral-600">
                  Complete UI system, interaction design, and prototyping
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Testing</p>
                <p className="mt-1 text-neutral-600">
                  3 rounds of usability testing with 55 participants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research - Immersive story */}
      <section className="bg-neutral-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
              Research
            </p>
            <h2 className="max-w-3xl text-3xl font-light text-white md:text-4xl lg:text-5xl">
              I spent four weeks doing what most designers skip—
              <span className="text-neutral-500">
                actually living the problem.
              </span>
            </h2>
          </motion.div>

          {/* Photo grid */}
          <div className="mb-16 grid gap-4 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800 md:col-span-7"
            >
              {/* PLACEHOLDER */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-neutral-600">
                  Riding buses across San Salvador
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800 md:col-span-5"
            >
              {/* PLACEHOLDER */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-neutral-600">
                  Interviewing commuters at stops
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800 md:col-span-5"
            >
              {/* PLACEHOLDER */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-neutral-600">Focus group sessions</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800 md:col-span-7"
            >
              {/* PLACEHOLDER */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-neutral-600">Affinity mapping synthesis</p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-neutral-300">
              Desk research wouldn&rsquo;t cut it here. To design for this
              context, I needed to feel the anxiety of not knowing if a bus
              would come. I needed to experience asking strangers for directions
              and getting conflicting answers. I needed to understand why people
              arrive 30 minutes early &ldquo;just in case.&rdquo;
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              So I rode. I waited. I got lost. I talked to students, domestic
              workers, vendors, elderly riders. I learned that the problem
              wasn&rsquo;t missing information—it was constant uncertainty.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight - Full impact */}
      <section className="relative overflow-hidden bg-blue-600 py-32 md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.3))]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-sm tracking-wider text-blue-200 uppercase">
            The Core Insight
          </p>
          <h2 className="text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
            &ldquo;Every ride is an act of faith.&rdquo;
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100">
            The research revealed that navigation wasn&rsquo;t the core
            problem—emotional labor was. Every journey required risk assessment,
            contingency planning, and managing the anxiety of uncertainty.
          </p>
        </div>
      </section>

      {/* Insights breakdown */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              What I Learned
            </p>
            <h2 className="max-w-2xl text-3xl font-light text-neutral-900 md:text-4xl">
              Four insights that shaped every design decision
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Data is a luxury",
                insight:
                  "Users ration mobile data carefully. Plans are expensive and limited.",
                decision:
                  "Built offline-first. Core features work without any connection.",
              },
              {
                number: "02",
                title: "Cash is survival",
                insight:
                  "Not everyone has bank accounts. Digital-only would exclude many.",
                decision:
                  "Supported both digital tickets and cash payment workflows.",
              },
              {
                number: "03",
                title: "Trust is earned",
                insight:
                  "Previous apps failed. Users are skeptical of new solutions.",
                decision:
                  "Added confidence indicators. Transparent about data quality.",
              },
              {
                number: "04",
                title: "Anxiety is the enemy",
                insight:
                  "People waste hours arriving early because they can't know when buses come.",
                decision:
                  "Real-time tracking with honest uncertainty communication.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-neutral-200 p-8"
              >
                <span className="text-sm text-blue-600">{item.number}</span>
                <h3 className="mt-4 text-xl font-medium text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral-600">{item.insight}</p>
                <p className="mt-4 border-t border-neutral-100 pt-4 text-sm text-neutral-500">
                  <span className="font-medium text-neutral-700">
                    Design decision:
                  </span>{" "}
                  {item.decision}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote break */}
      <section className="bg-neutral-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote>
            <p className="text-2xl font-light text-neutral-800 italic md:text-3xl">
              &ldquo;I&rsquo;ve lived here three years and still don&rsquo;t
              know all the routes. I ask different people each time, and
              sometimes the information is wrong.&rdquo;
            </p>
            <cite className="mt-6 block text-neutral-500">
              María, 24 — University Student
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Process
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              From insight to interface
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Every design choice traced back to research. No feature existed
              without a clear user need behind it.
            </p>
          </div>

          {/* Design principles as bold visual */}
          <div className="mb-20 overflow-hidden rounded-2xl bg-neutral-950 p-1">
            <div className="grid md:grid-cols-4">
              {[
                { label: "Offline First", desc: "Download once, use anywhere" },
                {
                  label: "Progressive",
                  desc: "Simple start, depth when ready",
                },
                { label: "Transparent", desc: "Honest about limitations" },
                { label: "Visual", desc: "Icons over text" },
              ].map((principle, index) => (
                <div
                  key={principle.label}
                  className={`p-8 ${index !== 3 ? "border-b border-neutral-800 md:border-r md:border-b-0" : ""}`}
                >
                  <p className="text-lg font-medium text-white">
                    {principle.label}
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Wireframes */}
          <div className="mb-8">
            <p className="mb-4 text-sm text-neutral-400">Exploration</p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100">
            {/* PLACEHOLDER */}
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-neutral-400">Wireframe explorations</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pivot - Story of iteration */}
      <section className="bg-neutral-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
              The Pivot
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              My first design was wrong.
              <span className="text-neutral-500">
                {" "}
                Here&rsquo;s how testing saved it.
              </span>
            </h2>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-neutral-300">
                I initially designed separate tabs for each journey stage:
                planning, active navigation, and history. It made sense to me.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                Testing with 20 users revealed the truth: nobody understood
                which tab to use when. They&rsquo;d start a search, switch tabs
                looking for results, get lost. Task completion was 62%.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-neutral-500">
                The fix: one adaptive screen that transforms based on context.
                Route search when idle. Live navigation during trips. Summary
                after. Same information, zero confusion.
              </p>
              <p className="mt-8 text-sm text-blue-400">
                Task completion jumped to 95%.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-xs tracking-wider text-neutral-600 uppercase">
                  Before
                </p>
                <div className="aspect-[9/16] overflow-hidden rounded-xl bg-neutral-900">
                  {/* PLACEHOLDER */}
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-sm text-neutral-700">Tab-based UI</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs tracking-wider text-neutral-600 uppercase">
                  After
                </p>
                <div className="aspect-[9/16] overflow-hidden rounded-xl bg-neutral-900">
                  {/* PLACEHOLDER */}
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-sm text-neutral-700">Adaptive screen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Solution - Hero showcase */}
      <section className="bg-gradient-to-b from-neutral-950 to-blue-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm tracking-wider text-blue-400 uppercase">
              The Solution
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
              Ruta SV
            </h2>
          </div>

          {/* Main showcase */}
          <div className="mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-16">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-black/20">
              {/* PLACEHOLDER */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-xl text-white/40">Hero app showcase</p>
              </div>
            </div>
          </div>

          {/* Feature screens */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                screen: "Route Search",
                desc: "Find any route with destination or landmark search",
              },
              {
                screen: "Live Tracking",
                desc: "See exactly where your bus is—with confidence scores",
              },
              {
                screen: "Navigation",
                desc: "Step-by-step guidance with stop alerts",
              },
              {
                screen: "Cost View",
                desc: "Total fare upfront with segment breakdown",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.screen}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900">
                  {/* PLACEHOLDER */}
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-sm text-neutral-700">{feature.screen}</p>
                  </div>
                </div>
                <p className="mt-4 font-medium text-white">{feature.screen}</p>
                <p className="mt-1 text-sm text-neutral-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design details */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Craft
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Details that made the difference
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-neutral-100">
                {/* PLACEHOLDER - Color system */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-neutral-400">Color system</p>
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900">
                Colors from culture
              </h3>
              <p className="mt-2 text-neutral-600">
                Route colors match the actual painted buses. Users make instant
                visual connections between app and reality.
              </p>
            </div>

            <div>
              <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-neutral-100">
                {/* PLACEHOLDER - Typography */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-neutral-400">Typography scale</p>
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900">
                Outdoor readability
              </h3>
              <p className="mt-2 text-neutral-600">
                16pt minimum. High contrast mode. 48px touch targets. Designed
                for bright sunlight and moving buses.
              </p>
            </div>

            <div>
              <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-neutral-100">
                {/* PLACEHOLDER - Language */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-neutral-400">Language samples</p>
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900">
                Written by locals
              </h3>
              <p className="mt-2 text-neutral-600">
                Native speakers wrote all copy using Salvadoran idioms.
                &ldquo;El Centro&rdquo; not &ldquo;Centro Histórico.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-neutral-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
              Impact
            </p>
            <h2 className="max-w-2xl text-3xl font-light text-white md:text-4xl">
              Six months after launch
            </h2>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "45K+", label: "Active users" },
              { value: "250K", label: "Monthly route searches" },
              { value: "4.6★", label: "App store rating" },
              { value: "85%", label: "30-day retention" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-neutral-900 p-6"
              >
                <p className="text-3xl font-light text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-neutral-300">
              The Ministry of Transport has expressed interest in making Ruta SV
              the official platform for El Salvador. Several bus operators have
              installed GPS tracking specifically to participate.
            </p>
          </div>
        </div>
      </section>

      {/* Final quote - Emotional close */}
      <section className="bg-blue-600 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote>
            <p className="text-2xl font-light text-white md:text-4xl lg:text-5xl">
              &ldquo;Before Ruta SV, I would only work in areas I knew well. Now
              I can accept jobs anywhere in San Salvador. This app literally
              earned me more money.&rdquo;
            </p>
            <cite className="mt-8 block text-blue-200">
              Claudia — Domestic Worker
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Reflection */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
            Reflection
          </p>
          <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
            What this project taught me
          </h2>

          <div className="mt-12 space-y-8">
            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="font-medium text-neutral-900">
                Constraints clarify
              </h3>
              <p className="mt-2 text-neutral-600">
                Designing for limited data, varying literacy, and offline use
                forced cleaner architecture and simpler interactions. These
                &ldquo;limitations&rdquo; produced a better product for
                everyone.
              </p>
            </div>

            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-neutral-900">
                Field research is non-negotiable
              </h3>
              <p className="mt-2 text-neutral-600">
                The insights that shaped this product couldn&rsquo;t have come
                from surveys or remote interviews. Context matters. Feeling the
                problem matters.
              </p>
            </div>

            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-neutral-900">
                What I&rsquo;d do differently
              </h3>
              <p className="mt-2 text-neutral-600">
                I&rsquo;d involve bus drivers earlier. We focused on passengers
                but underestimated how driver adoption affects the entire
                system. Their buy-in matters more than I initially recognized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-neutral-200 bg-white">
        <Link href="/projects/healthcare" className="block">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm tracking-wider text-neutral-400 uppercase">
                  Next Project
                </p>
                <p className="mt-2 text-2xl text-neutral-900 md:text-3xl">
                  Healthcare Consultation System
                </p>
              </div>
              <ArrowRight className="h-8 w-8 text-neutral-400" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
