"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function HealthcareCaseStudyPage() {
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
          <span className="text-sm text-white">Healthcare</span>
        </div>
      </nav>

      {/* Hero - Full viewport, cinematic */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-[#0a0a0a] to-teal-950" />

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
            className="mb-6 text-sm tracking-[0.3em] text-emerald-400 uppercase"
          >
            Case Study
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 text-5xl leading-[1.1] font-light text-white md:text-7xl lg:text-8xl"
          >
            What happens when
            <br />
            <span className="text-emerald-400 italic">
              healthcare goes digital
            </span>
            <br />
            but patients don&rsquo;t?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-xl text-lg text-neutral-400"
          >
            I designed a telehealth platform for the people technology usually
            leaves behind.
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
            During the pandemic, telehealth adoption surged 154%.
            <span className="text-neutral-400">
              {" "}
              But for older adults, most platforms felt like they were designed
              to exclude them.
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
              className="flex aspect-square flex-col justify-end rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8"
            >
              <p className="text-6xl font-light text-white md:text-7xl">65+</p>
              <p className="mt-2 text-emerald-200">target age group</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex aspect-square flex-col justify-end rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 p-8"
            >
              <p className="text-6xl font-light text-white md:text-7xl">14px</p>
              <p className="mt-2 text-teal-200">industry standard body text</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex aspect-square flex-col justify-end rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-8"
            >
              <p className="text-6xl font-light text-white md:text-7xl">38%</p>
              <p className="mt-2 text-neutral-400">
                of seniors abandon health apps
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
                Solo UX/UI Designer
              </h2>
              <p className="mt-6 text-lg text-neutral-600">
                End-to-end ownership of the entire design process over 12
                weeks—from research in participants&rsquo; homes to a shipped,
                WCAG AAA compliant product.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-emerald-500 pl-6">
                <p className="font-medium text-neutral-900">Research</p>
                <p className="mt-1 text-neutral-600">
                  18 participants, ages 65-82, in their homes
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Strategy</p>
                <p className="mt-1 text-neutral-600">
                  Information architecture, user flows, design principles
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Design</p>
                <p className="mt-1 text-neutral-600">
                  Complete design system, UI, interaction patterns
                </p>
              </div>
              <div className="border-l-2 border-neutral-200 pl-6">
                <p className="font-medium text-neutral-900">Testing</p>
                <p className="mt-1 text-neutral-600">
                  3 rounds with 24 participants on their own devices
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
              I didn&rsquo;t test in a lab.
              <span className="text-neutral-500">
                {" "}
                I went to their living rooms.
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
                  Home visit interview sessions
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
                <p className="text-neutral-600">Observing real device usage</p>
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
                <p className="text-neutral-600">Competitor app testing</p>
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
                <p className="text-neutral-600">Research synthesis</p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-neutral-300">
              Lab testing would have been faster. But it would have missed
              everything that mattered—the reading glasses left in another room,
              the grandkids interrupting, the anxiety of using an unfamiliar app
              alone.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              I conducted contextual inquiries with 18 participants in their
              homes, watching them struggle with competitor apps on their own
              devices, in their own lighting, with their own distractions. The
              insights were brutal—and essential.
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight - Full impact */}
      <section className="relative overflow-hidden bg-emerald-600 py-32 md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.3))]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-sm tracking-wider text-emerald-200 uppercase">
            The Core Insight
          </p>
          <h2 className="text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
            &ldquo;The interface made me feel old and stupid.&rdquo;
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-emerald-100">
            That quote from a 72-year-old participant changed everything. The
            problem wasn&rsquo;t capability—it was dignity. Every design choice
            had to restore confidence, not undermine it.
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
              Five barriers between patients and care
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Vision isn't optional",
                insight:
                  "Every participant over 70 struggled with text under 16pt.",
                decision: "18pt body text minimum. WCAG AAA contrast ratios.",
              },
              {
                number: "02",
                title: "Hidden means invisible",
                insight:
                  "Hamburger menus and swipe gestures were never discovered without prompting.",
                decision:
                  "Flat navigation. Everything visible from the dashboard.",
              },
              {
                number: "03",
                title: "Jargon creates anxiety",
                insight:
                  "'Portal,' 'synchronous,' even 'reschedule' caused confusion.",
                decision:
                  "Plain language throughout. 'Change your appointment' not 'reschedule.'",
              },
              {
                number: "04",
                title: "Mistakes feel permanent",
                insight:
                  "Users were terrified of accidentally canceling appointments.",
                decision:
                  "Forgiving interactions. Clear undo. Confirmation for everything.",
              },
              {
                number: "05",
                title: "Trust requires transparency",
                insight:
                  "Skepticism about video calls—would they receive the same care?",
                decision:
                  "Doctor photos, credentials, and clear explanation of what happens.",
              },
              {
                number: "06",
                title: "Options overwhelm",
                insight: "Multiple CTAs caused decision paralysis.",
                decision:
                  "One primary action per screen. Clear visual hierarchy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-neutral-200 p-8"
              >
                <span className="text-sm text-emerald-600">{item.number}</span>
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

      {/* Persona - Dorothy */}
      <section className="bg-neutral-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-200">
                {/* PLACEHOLDER */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-neutral-400">Dorothy illustration</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="mb-2 text-sm tracking-wider text-neutral-400 uppercase">
                Primary Persona
              </p>
              <h3 className="text-2xl font-light text-neutral-900">
                Dorothy, 73
              </h3>
              <p className="mt-4 text-lg text-neutral-600">
                Retired teacher. Lives independently. Manages arthritis and high
                blood pressure. Comfortable texting grandkids but finds most
                apps &ldquo;too complicated.&rdquo;
              </p>
              <p className="mt-4 text-lg text-neutral-800">
                Her goal: manage her own healthcare without constantly asking
                her children for help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote break */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote>
            <p className="text-2xl font-light text-neutral-800 italic md:text-3xl">
              &ldquo;I just want to talk to my doctor without feeling like I
              need a computer science degree.&rdquo;
            </p>
            <cite className="mt-6 block text-neutral-500">
              Research participant, age 72
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-neutral-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm tracking-wider text-neutral-500 uppercase">
              Process
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Every choice passed through one filter
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              Does this reduce cognitive load, improve accessibility, or build
              confidence? If not, it didn&rsquo;t ship.
            </p>
          </div>

          {/* Design principles as bold visual */}
          <div className="mb-20 overflow-hidden rounded-2xl bg-white/5 p-1">
            <div className="grid md:grid-cols-4">
              {[
                { label: "Clarity First", desc: "One action per screen" },
                { label: "Flat Navigation", desc: "No hidden menus ever" },
                { label: "Forgiving", desc: "Easy undo, clear confirmation" },
                { label: "Accessible", desc: "WCAG AAA throughout" },
              ].map((principle, index) => (
                <div
                  key={principle.label}
                  className={`p-8 ${index !== 3 ? "border-b border-white/10 md:border-r md:border-b-0" : ""}`}
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

          {/* Information Architecture */}
          <div className="mb-16">
            <p className="mb-4 text-sm text-neutral-500">
              Information Architecture
            </p>
            <p className="mb-8 max-w-2xl text-lg text-neutral-300">
              Card sorting with 18 participants validated a flat structure. When
              given the choice between a hamburger menu with nested options
              versus upfront cards, 16 out of 18 preferred cards—&ldquo;easier
              to see everything at once.&rdquo;
            </p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900">
            {/* PLACEHOLDER */}
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-neutral-700">
                Information architecture diagram
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Iterations - Story of learning */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Iterations
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Three rounds of testing.
              <span className="text-neutral-400"> Three painful lessons.</span>
            </h2>
          </div>

          <div className="space-y-16">
            {/* Round 1 */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="text-sm text-emerald-600">Round 1</span>
                <h3 className="mt-2 text-xl font-medium text-neutral-900">
                  The calendar problem
                </h3>
                <p className="mt-4 text-neutral-600">
                  My initial month-view calendar seemed intuitive. Users
                  disagreed. They tapped unavailable dates repeatedly, unable to
                  distinguish them from available ones. Frustration was visible.
                </p>
                <p className="mt-4 text-neutral-800">
                  <span className="font-medium">The fix:</span> Only show
                  available dates clearly. Gray out and cross through
                  unavailable days. Add &ldquo;soonest available&rdquo;
                  suggestions above the calendar.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs tracking-wider text-neutral-400 uppercase">
                    Before
                  </p>
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-neutral-400">Month view</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs tracking-wider text-neutral-400 uppercase">
                    After
                  </p>
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-neutral-400">
                        Clear availability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="md:order-2">
                <span className="text-sm text-emerald-600">Round 2</span>
                <h3 className="mt-2 text-xl font-medium text-neutral-900">
                  The button confusion
                </h3>
                <p className="mt-4 text-neutral-600">
                  &ldquo;Cancel&rdquo; and &ldquo;Confirm&rdquo; looked too
                  similar. Tired or stressed users tapped the wrong
                  one—sometimes canceling appointments they meant to keep.
                </p>
                <p className="mt-4 text-neutral-800">
                  <span className="font-medium">The fix:</span> Natural language
                  that describes outcomes: &ldquo;Cancel Appointment&rdquo; vs
                  &ldquo;Keep Appointment.&rdquo; Destructive actions in red,
                  positive in green.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:order-1">
                <div className="space-y-2">
                  <p className="text-xs tracking-wider text-neutral-400 uppercase">
                    Before
                  </p>
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-neutral-400">
                        Generic buttons
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs tracking-wider text-neutral-400 uppercase">
                    After
                  </p>
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-neutral-400">
                        Descriptive actions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 3 */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="text-sm text-emerald-600">Round 3</span>
                <h3 className="mt-2 text-xl font-medium text-neutral-900">
                  The silent mute
                </h3>
                <p className="mt-4 text-neutral-600">
                  During mock video consultations, participants accidentally
                  muted themselves and didn&rsquo;t realize it. They kept
                  talking. The small mute icon wasn&rsquo;t enough signal.
                </p>
                <p className="mt-4 text-neutral-800">
                  <span className="font-medium">The fix:</span> Large,
                  persistent &ldquo;You&rsquo;re Muted&rdquo; banner when
                  active. System detects speaking while muted and shows an
                  alert: &ldquo;Looks like you&rsquo;re trying to speak. Tap to
                  unmute.&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs tracking-wider text-neutral-400 uppercase">
                    Before
                  </p>
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-neutral-400">
                        Small icon only
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs tracking-wider text-neutral-400 uppercase">
                    After
                  </p>
                  <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-neutral-400">
                        Prominent banner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Solution - Hero showcase */}
      <section className="bg-gradient-to-b from-neutral-950 to-emerald-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm tracking-wider text-emerald-400 uppercase">
              The Solution
            </p>
            <h2 className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
              Healthcare Consultation System
            </h2>
          </div>

          {/* Main showcase */}
          <div className="mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-500 p-8 md:p-16">
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
                screen: "SMS Login",
                desc: "No passwords. Just a code sent to your phone.",
              },
              {
                screen: "Dashboard",
                desc: "Four clear cards. Upcoming appointments front and center.",
              },
              {
                screen: "Booking",
                desc: "Three steps. Choose doctor, pick time, confirm.",
              },
              {
                screen: "Video Call",
                desc: "Doctor fills the screen. Four large buttons. That's it.",
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

      {/* Key Features Deep Dive */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Key Features
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Designed for confidence, not just completion
            </h2>
          </div>

          <div className="space-y-24">
            {/* Pre-consultation waiting room */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                {/* PLACEHOLDER */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-neutral-400">Waiting room screen</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-light text-neutral-900">
                  Pre-consultation waiting room
                </h3>
                <p className="mt-4 text-neutral-600">
                  Opens 15 minutes before appointments. Users see their camera
                  preview, test their mic, and review a checklist. A countdown
                  shows exactly when the doctor joins.
                </p>
                <p className="mt-4 text-neutral-800">
                  This &ldquo;pre-flight check&rdquo; eliminated 90% of
                  technical issues that previously derailed consultations.
                </p>
              </div>
            </div>

            {/* Post-visit summary */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 md:order-2">
                {/* PLACEHOLDER */}
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-neutral-400">Post-visit summary</p>
                </div>
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-light text-neutral-900">
                  Post-visit summary
                </h3>
                <p className="mt-4 text-neutral-600">
                  After each appointment: plain-language notes, prescriptions
                  auto-sent to pharmacy, follow-up instructions, and educational
                  links. Downloadable as PDF or emailable to family.
                </p>
                <p className="mt-4 text-neutral-800">
                  Research showed participants worried about forgetting what
                  doctors said. Now they don&rsquo;t have to remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility details */}
      <section className="bg-neutral-100 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <p className="mb-4 text-sm tracking-wider text-neutral-400 uppercase">
              Accessibility
            </p>
            <h2 className="text-3xl font-light text-neutral-900 md:text-4xl">
              Not an afterthought. The foundation.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8">
              <p className="text-4xl font-light text-emerald-600">18pt</p>
              <p className="mt-2 font-medium text-neutral-900">
                Minimum body text
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                Industry standard is 14-16pt. Every participant over 70
                struggled with that. We went bigger.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <p className="text-4xl font-light text-emerald-600">7:1</p>
              <p className="mt-2 font-medium text-neutral-900">
                Contrast ratio
              </p>
              <p className="mt-4 text-sm text-neutral-600">
                WCAG AAA standard, not just AA. Readable for users with moderate
                vision impairment.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <p className="text-4xl font-light text-emerald-600">48px</p>
              <p className="mt-2 font-medium text-neutral-900">Touch targets</p>
              <p className="mt-4 text-sm text-neutral-600">
                Bigger than Apple&rsquo;s 44px guideline. Accommodates tremors,
                arthritis, and moving contexts.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8">
              <p className="font-medium text-neutral-900">
                Dynamic text sizing
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Scales to 200% without breaking layouts or requiring horizontal
                scroll. Presented as an option during onboarding—not buried in
                settings.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <p className="font-medium text-neutral-900">
                Screen reader optimized
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Proper heading hierarchies, descriptive labels for all
                interactive elements. Works seamlessly with VoiceOver and
                TalkBack.
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
              The numbers that matter
            </h2>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "95%", label: "Task completion", sub: "up from 62%" },
              { value: "86", label: "SUS score", sub: "Grade A: Excellent" },
              {
                value: "47%",
                label: "Faster tasks",
                sub: "average completion time",
              },
              { value: "4.6/5", label: "Confidence", sub: "up from 3.2" },
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
                <p className="mt-2 text-sm text-neutral-300">{stat.label}</p>
                <p className="text-xs text-neutral-500">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-neutral-300">
              The design has been presented at two regional healthcare
              conferences as a case study in inclusive design. Multiple hospital
              systems have expressed interest in implementing similar approaches
              in their patient portals.
            </p>
          </div>
        </div>
      </section>

      {/* Final quote - Emotional close */}
      <section className="bg-emerald-600 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote>
            <p className="text-2xl font-light text-white md:text-4xl lg:text-5xl">
              &ldquo;This is the first health app I&rsquo;ve used that
              doesn&rsquo;t make me feel old and stupid. I actually feel like I
              can do this on my own.&rdquo;
            </p>
            <cite className="mt-8 block text-emerald-200">
              Testing participant, age 78
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
            <div className="border-l-2 border-emerald-500 pl-6">
              <h3 className="font-medium text-neutral-900">
                Accessible design is just good design
              </h3>
              <p className="mt-2 text-neutral-600">
                Younger family members who tested the app alongside their older
                relatives appreciated the clarity too. When you design for those
                who need it most, you create something that works better for
                everyone.
              </p>
            </div>

            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-neutral-900">
                Context testing is non-negotiable
              </h3>
              <p className="mt-2 text-neutral-600">
                Lab testing would have missed the reading glasses in another
                room, the grandkids interrupting, the afternoon sun washing out
                the screen. Real environments reveal real problems.
              </p>
            </div>

            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="font-medium text-neutral-900">
                What I&rsquo;d do differently
              </h3>
              <p className="mt-2 text-neutral-600">
                I&rsquo;d involve healthcare providers earlier. Understanding
                their workflows would ensure the system works seamlessly on both
                ends. I&rsquo;d also explore voice interaction—several
                participants mentioned interest in voice commands for
                navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-neutral-200 bg-white">
        <Link href="/projects/ruta-sv" className="block">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm tracking-wider text-neutral-400 uppercase">
                  Next Project
                </p>
                <p className="mt-2 text-2xl text-neutral-900 md:text-3xl">
                  Ruta SV
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
