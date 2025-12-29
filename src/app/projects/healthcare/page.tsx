"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "problem", label: "The Problem" },
  { id: "research", label: "Understanding Users" },
  { id: "design", label: "Design Process" },
  { id: "solution", label: "The Solution" },
  { id: "impact", label: "Impact & Outcomes" },
];

export default function HealthcareCaseStudyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/projects">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Projects</span>
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-neutral-900 px-6 pt-20 pb-12">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-neutral-400"
          >
            Healthcare UX/UI Case Study
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 text-5xl text-white lg:text-6xl"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              lineHeight: "1.2",
            }}
          >
            Reimagining Digital Healthcare for Older Adults
          </motion.h1>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-500 p-12"
          >
            {/* PLACEHOLDER: Replace with hero mockup showing app interface with older adult using it */}
            <div className="flex h-[400px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-neutral-800/30">
              <p className="text-lg text-white/60">
                Hero Image: App mockup with telehealth consultation interface
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="space-y-12 lg:sticky lg:top-32">
                {/* Timeline */}
                <div>
                  <h3 className="mb-3 text-sm text-neutral-400">Timeline</h3>
                  <p className="text-neutral-900">12 weeks</p>
                </div>

                {/* Key Areas */}
                <div>
                  <h3 className="mb-3 text-sm text-neutral-400">Key areas</h3>
                  <p className="text-sm leading-relaxed text-neutral-900">
                    Accessibility Design, User Research, Interaction Design,
                    Design Systems, Usability Testing
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h3 className="mb-3 text-sm text-neutral-400">Role</h3>
                  <p className="text-sm text-neutral-900">
                    UX/UI Designer (End-to-end)
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="mb-3 text-sm text-neutral-400">Tools</h3>
                  <p className="text-sm text-neutral-900">
                    Figma, UserTesting.com, Optimal Workshop, Miro
                  </p>
                </div>

                {/* Navigation */}
                <nav className="hidden border-t border-neutral-200 pt-8 lg:block">
                  <div className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                        className={`block border-l-2 py-2 pl-4 text-sm transition-colors ${
                          activeSection === section.id
                            ? "border-emerald-500 text-neutral-900"
                            : "border-transparent text-neutral-400 hover:text-neutral-900"
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Next Case Study */}
                <div className="border-t border-neutral-200 pt-8">
                  <p className="mb-2 text-sm text-neutral-400">
                    Next Case Study
                  </p>
                  <Link
                    href="/projects"
                    className="text-neutral-900 transition-colors hover:text-neutral-600"
                  >
                    View All Projects →
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-20 lg:col-span-9">
              {/* Overview */}
              <div id="overview" className="space-y-8">
                <p className="text-xl leading-relaxed text-neutral-700">
                  A video consultation platform specifically optimized for users
                  aged 65 and older—enabling older adults to book appointments,
                  attend video consultations, and manage their healthcare
                  through an interface that prioritizes clarity, accessibility,
                  and ease of use.
                </p>

                <p className="leading-relaxed text-neutral-600">
                  As the sole UX/UI Designer, I led the end-to-end design
                  process from research through high-fidelity prototypes,
                  focusing on reducing cognitive load, improving accessibility,
                  and building user confidence for a population often excluded
                  from digital health solutions.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
                  <div className="border-l-2 border-neutral-900 pl-6">
                    <p
                      className="mb-2 text-4xl text-neutral-900"
                      style={{
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                      }}
                    >
                      WCAG AAA
                    </p>
                    <p className="text-neutral-600">Accessibility compliance</p>
                  </div>
                  <div className="border-l-2 border-neutral-900 pl-6">
                    <p
                      className="mb-2 text-4xl text-neutral-900"
                      style={{
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                      }}
                    >
                      86 SUS
                    </p>
                    <p className="text-neutral-600">
                      System Usability Scale (Grade A)
                    </p>
                  </div>
                </div>
              </div>

              {/* The Problem */}
              <div id="problem" className="space-y-6">
                <h2
                  className="text-3xl text-neutral-900"
                  style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                >
                  The Problem
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  During the pandemic, telehealth adoption surged by 154% among
                  all age groups. However, older adults consistently reported
                  lower satisfaction and higher dropout rates. Primary
                  complaints centered around confusing interfaces, small text,
                  complex navigation, and overwhelming amounts of information.
                </p>
                <p className="leading-relaxed text-neutral-600">
                  Existing healthcare apps were designed with younger,
                  tech-savvy users in mind. Features like multi-tap gestures,
                  hidden menus, and jargon-heavy language created unnecessary
                  barriers for older patients who simply wanted to see their
                  doctor.
                </p>

                {/* Quote */}
                <div className="rounded-2xl border-l-4 border-emerald-500 bg-neutral-50 p-8">
                  <p className="mb-4 text-lg leading-relaxed text-neutral-700 italic">
                    &ldquo;I just want to talk to my doctor without feeling like
                    I need a computer science degree.&rdquo;
                  </p>
                  <p className="text-sm text-neutral-500">
                    — Research participant, age 72
                  </p>
                </div>
              </div>

              {/* Understanding Users */}
              <div id="research" className="space-y-6">
                <h2
                  className="text-3xl text-neutral-900"
                  style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                >
                  Understanding the Users
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  The research phase involved 18 participants aged 65-82,
                  combining in-depth interviews, usability testing of competitor
                  apps, and contextual inquiry sessions in participants&apos;
                  homes. The goal was to understand not just what frustrated
                  older users, but why.
                </p>

                {/* Research Image Placeholder */}
                <div className="my-8 overflow-hidden rounded-2xl">
                  {/* PLACEHOLDER: Replace with research session photos or user journey map */}
                  <div className="flex h-[400px] w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100">
                    <p className="text-lg text-neutral-400">
                      Image: Contextual inquiry sessions & user research
                    </p>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl bg-neutral-50 p-8">
                  <h3 className="text-xl text-neutral-900">
                    Key Research Insights
                  </h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-500">•</span>
                      <span>
                        <strong>Vision & motor skills matter</strong> — Text
                        smaller than 16pt caused difficulty; touch targets under
                        44x44px led to frequent mis-taps
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-500">•</span>
                      <span>
                        <strong>Cognitive load is real</strong> — Multiple
                        competing CTAs caused decision paralysis; hidden
                        navigation was rarely discovered
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-500">•</span>
                      <span>
                        <strong>Medical terminology creates anxiety</strong> —
                        Words like &ldquo;synchronous&rdquo; and
                        &ldquo;portal&rdquo; caused confusion and made users
                        feel &ldquo;stupid&rdquo;
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-500">•</span>
                      <span>
                        <strong>Trust needs to be earned</strong> — Seeing
                        doctor photos, credentials, and understanding exactly
                        what happens builds confidence
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 text-emerald-500">•</span>
                      <span>
                        <strong>Fear of making mistakes</strong> — Users needed
                        clear confirmation at each step and easy ways to go back
                        without consequence
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Persona */}
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
                  <h3 className="mb-4 text-xl text-neutral-900">
                    User Persona: Meet Dorothy
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    Dorothy, 73, retired teacher, lives independently but
                    manages arthritis and high blood pressure. She&apos;s
                    comfortable with her smartphone for texting and email, but
                    finds most apps &ldquo;too complicated.&rdquo; She values
                    her independence highly and wants to manage her own
                    healthcare without constantly asking her children for help.
                    Dorothy represents our target user: capable and motivated,
                    but needing interfaces that respect her abilities and
                    limitations.
                  </p>
                </div>
              </div>

              {/* Design Process */}
              <div id="design" className="space-y-6">
                <h2
                  className="text-3xl text-neutral-900"
                  style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                >
                  Design Process & Strategy
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  The design process followed an iterative approach with
                  continuous user feedback. The guiding principle was simple:
                  every design decision needed to either reduce cognitive load,
                  improve accessibility, or build user confidence.
                </p>

                {/* Design Process Image Placeholder */}
                <div className="my-8 overflow-hidden rounded-2xl">
                  {/* PLACEHOLDER: Replace with wireframes or design system components */}
                  <div className="flex h-[400px] w-full items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100">
                    <p className="text-lg text-neutral-400">
                      Image: Information architecture & wireframes
                    </p>
                  </div>
                </div>

                <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-neutral-50 p-8">
                    <h3 className="mb-4 text-xl text-neutral-900">
                      Flat Navigation
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Instead of deep hierarchies, everything presents from a
                      central dashboard with clear, labeled cards. Users can
                      always return home with a single tap. Card sorting
                      validated this: 16 of 18 participants preferred cards over
                      hamburger menus.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-8">
                    <h3 className="mb-4 text-xl text-neutral-900">
                      Enhanced Typography
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Body text starts at 18pt, not the industry-standard
                      14-16pt. Color palette prioritizes contrast ratios of 7:1
                      or higher (WCAG AAA), ensuring readability even for users
                      with moderate vision impairment.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-8">
                    <h3 className="mb-4 text-xl text-neutral-900">
                      One Action Per Screen
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Each screen has one clear path forward, emphasized through
                      size, position, and color. Secondary actions are visually
                      de-emphasized but still accessible. This dramatically
                      reduced decision fatigue.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-8">
                    <h3 className="mb-4 text-xl text-neutral-900">
                      Forgiving Interactions
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      Prominent back buttons work intuitively. Changes
                      aren&apos;t committed until explicit confirmation.
                      Extended 10-minute timeouts with clear warnings. System
                      remembers partial progress in booking flows.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Solution */}
              <div id="solution" className="space-y-6">
                <h2
                  className="text-3xl text-neutral-900"
                  style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                >
                  The Solution
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  The final design is a mobile-first healthcare platform guiding
                  users through five core tasks: authentication, appointment
                  scheduling, pre-consultation preparation, video consultations,
                  and post-visit follow-up. Each flow feels like a natural
                  conversation, with the interface serving as a supportive
                  guide.
                </p>

                {/* Solution Screens Placeholder */}
                <div className="my-8 overflow-hidden rounded-2xl">
                  {/* PLACEHOLDER: Replace with app screens showing key features */}
                  <div className="flex h-[500px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
                    <p className="text-lg text-emerald-400">
                      Screens: Dashboard, booking flow, waiting room, video
                      consultation
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-xl text-neutral-900">
                      Simplified Authentication
                    </h3>
                    <p className="leading-relaxed text-neutral-600">
                      Users log in with phone number and a six-digit SMS code—no
                      passwords to remember or reset. Six large input boxes
                      auto-advance with clear visual feedback. Biometric login
                      offered after first successful sign-in.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl text-neutral-900">
                      Card-Based Dashboard
                    </h3>
                    <p className="leading-relaxed text-neutral-600">
                      Four large, clearly labeled cards: Schedule Appointment,
                      My Appointments, Messages, and Health Records. Upcoming
                      appointments prominently featured at top with countdown
                      and one-tap access to join when it&apos;s time.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl text-neutral-900">
                      Three-Step Booking Flow
                    </h3>
                    <p className="leading-relaxed text-neutral-600">
                      Choose doctor → Select date/time → Provide visit details.
                      Each step shows progress clearly with easy backward
                      navigation. System remembers primary care physician and
                      favorite times for personalized suggestions.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl text-neutral-900">
                      Pre-Consultation Waiting Room
                    </h3>
                    <p className="leading-relaxed text-neutral-600">
                      Accessible 15 minutes before appointment. Users see camera
                      preview, test microphone, and review preparation
                      checklist. Countdown timer shows exactly when doctor will
                      join. This pre-flight check dramatically reduced technical
                      issues during consultations.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl text-neutral-900">
                      Simplified Video Interface
                    </h3>
                    <p className="leading-relaxed text-neutral-600">
                      Doctor&apos;s video fills the screen; patient video as
                      repositionable picture-in-picture. Only four essential
                      controls: mic toggle, camera toggle, end call, settings.
                      Each button large, clearly labeled with universal icons.
                      End call requires confirmation.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl text-neutral-900">
                      Post-Visit Summary
                    </h3>
                    <p className="leading-relaxed text-neutral-600">
                      Auto-generated summary in plain language includes
                      doctor&apos;s notes, new prescriptions (sent to pharmacy),
                      follow-up instructions, and educational resources.
                      Downloadable as PDF or emailable to family members.
                    </p>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="mt-8 space-y-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
                  <h3 className="text-2xl text-neutral-900">
                    Accessibility Beyond Compliance
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <p className="mb-2 text-lg font-medium text-neutral-900">
                        Touch Targets
                      </p>
                      <p className="text-sm text-neutral-600">
                        Exceed 48x48dp throughout. Screen reader support with
                        proper heading hierarchies. Works seamlessly with
                        VoiceOver and TalkBack.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-lg font-medium text-neutral-900">
                        Dynamic Text
                      </p>
                      <p className="text-sm text-neutral-600">
                        Font size increases up to 200% without breaking layouts
                        or requiring horizontal scrolling. Dark mode reduces eye
                        strain.
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-lg font-medium text-neutral-900">
                        Reduced Motion
                      </p>
                      <p className="text-sm text-neutral-600">
                        Animations can be disabled for users who find motion
                        distracting. These aren&apos;t hidden—presented during
                        onboarding as helpful options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact & Outcomes */}
              <div id="impact" className="space-y-6">
                <h2
                  className="text-3xl text-neutral-900"
                  style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
                >
                  Impact & Outcomes
                </h2>
                <p className="leading-relaxed text-neutral-600">
                  Beyond usability metrics, the project demonstrates that
                  accessible design benefits everyone. Younger family members
                  who tested the app alongside older relatives appreciated the
                  clarity. Several healthcare providers noted they&apos;d prefer
                  this system over their current platforms.
                </p>

                {/* Success Metrics */}
                <div className="space-y-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
                  <h3 className="text-2xl text-neutral-900">Success Metrics</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-4xl text-neutral-900">95%</p>
                      <p className="text-sm text-neutral-600">
                        Successfully booked appointments without assistance (up
                        from 62%)
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-4xl text-neutral-900">100%</p>
                      <p className="text-sm text-neutral-600">
                        Successfully joined and completed mock video
                        consultations
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-4xl text-neutral-900">47%</p>
                      <p className="text-sm text-neutral-600">
                        Decrease in average task completion time
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 text-4xl text-neutral-900">4.6/5</p>
                      <p className="text-sm text-neutral-600">
                        User confidence scores (up from 3.2)
                      </p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed text-neutral-600">
                  The design has been presented at two regional healthcare
                  conferences as a case study in inclusive design. Multiple
                  hospital systems have expressed interest in implementing
                  similar approaches. Most importantly, research participants
                  report feeling more confident about using telehealth services.
                </p>

                {/* Final Quote */}
                <div className="mt-8 rounded-2xl border-l-4 border-emerald-500 bg-neutral-50 p-8">
                  <p className="mb-4 text-lg leading-relaxed text-neutral-700 italic">
                    &ldquo;This is the first health app I&apos;ve used that
                    doesn&apos;t make me feel old and stupid. I actually feel
                    like I can do this on my own.&rdquo;
                  </p>
                  <p className="text-sm text-neutral-500">
                    — Testing participant, age 78
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
