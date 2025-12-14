"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AffinityMapping } from "~/app/_components/research/AffinityMapping";

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'research', label: 'Research & Discovery' },
  { id: 'affinity', label: 'Affinity Mapping' },
  { id: 'strategy', label: 'Design Strategy' },
  { id: 'solution', label: 'The Solution' },
  { id: 'testing', label: 'Testing & Iteration' },
];

export default function RutaSVCaseStudyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

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
      <header className="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/projects">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-400 mb-4"
          >
            Public Transit UX/UI Case Study
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl lg:text-6xl mb-12"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: '1.2' }}
          >
            Ruta SV: Bringing Digital Wayfinding to El Salvador&rsquo;s Bus System
          </motion.h1>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden bg-linear-to-br from-blue-600 to-cyan-500 p-12"
          >
            {/* PLACEHOLDER: Replace with hero mockup showing app on phone with San Salvador bus in background */}
            <div className="w-full h-100 bg-neutral-800/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/20">
              <p className="text-white/60 text-lg">Hero Image: App mockup with San Salvador transit backdrop</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32 space-y-12">
                {/* Timeline */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">Timeline</h3>
                  <p className="text-neutral-900">16 weeks</p>
                </div>

                {/* Key Areas */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">Key areas</h3>
                  <p className="text-neutral-900 text-sm leading-relaxed">
                    UX Research, Mobile Design, Information Architecture, Usability Testing, Design Systems
                  </p>
                </div>

                {/* People Involved */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">Team</h3>
                  <p className="text-neutral-900 text-sm">
                    3 UX Designers, 1 Researcher, 2 Developers, Transit Experts
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-sm text-neutral-400 mb-3">Tools</h3>
                  <p className="text-neutral-900 text-sm">
                    Figma, Maze, Dovetail, Google Maps API
                  </p>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:block pt-8 border-t border-neutral-200">
                  <div className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({
                            behavior: 'smooth',
                          });
                        }}
                        className={`block text-sm py-2 border-l-2 pl-4 transition-colors ${
                          activeSection === section.id
                            ? 'border-blue-500 text-neutral-900'
                            : 'border-transparent text-neutral-400 hover:text-neutral-900'
                        }`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Next Case Study */}
                <div className="pt-8 border-t border-neutral-200">
                  <p className="text-sm text-neutral-400 mb-2">Next Case Study</p>
                  <Link
                    href="/projects"
                    className="text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    View All Projects →
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-20">
              {/* Overview */}
              <div id="overview" className="space-y-8">
                <p className="text-xl text-neutral-700 leading-relaxed">
                  Ruta SV reimagines public transportation for El Salvador by creating the country&rsquo;s first
                  comprehensive digital wayfinding system—a complete mobility platform respecting the realities
                  of Salvadoran life: limited data plans, cash-based payments, and a transit system built on
                  community knowledge.
                </p>

                <p className="text-neutral-600 leading-relaxed">
                  As Lead Product Designer, I led research efforts to understand how millions of Salvadorans
                  navigate a bus system that operates more on trust and oral tradition than official schedules,
                  then designed solutions that bridge digital convenience with existing user behaviors.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="border-l-2 border-neutral-900 pl-6">
                    <p className="text-4xl text-neutral-900 mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      42 interviews
                    </p>
                    <p className="text-neutral-600">In-depth user research sessions</p>
                  </div>
                  <div className="border-l-2 border-neutral-900 pl-6">
                    <p className="text-4xl text-neutral-900 mb-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      Offline-first
                    </p>
                    <p className="text-neutral-600">Core functionality without data</p>
                  </div>
                </div>
              </div>

              {/* The Challenge */}
              <div id="challenge" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  The Challenge
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Unlike major cities with formal metro systems and official route maps, El Salvador&rsquo;s public
                  transportation operates semi-formally. Routes are identified by numbers and colors, but schedules
                  are approximate at best. There&rsquo;s no official app, no digital ticketing, and most information
                  is shared verbally between passengers and drivers.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The cash-only payment system means exact change is required, with no way to plan costs in advance
                  for multi-leg journeys. Real-time information doesn&rsquo;t exist, leading to long waits with no idea
                  when the next bus will arrive. Women especially mentioned safety concerns about waiting alone
                  at night.
                </p>

                {/* Quote */}
                <div className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-blue-500">
                  <p className="text-neutral-700 text-lg italic leading-relaxed mb-4">
                    &ldquo;I&rsquo;ve lived in San Salvador for three years and I still don&rsquo;t know all the routes. I have
                    to ask different people each time I want to go somewhere new, and sometimes the information
                    is wrong.&rdquo;
                  </p>
                  <p className="text-neutral-500 text-sm">— María, university student</p>
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  The digital divide adds another layer of complexity. While smartphone penetration is relatively
                  high in urban areas, data plans are expensive and often limited. Any solution needed to work
                  efficiently with minimal data usage and provide core functionality even when offline.
                </p>
              </div>

              {/* Research & Discovery */}
              <div id="research" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Research & Discovery
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Understanding the problem required immersing ourselves in the daily reality of bus commuters.
                  Over four weeks, the research team conducted 42 in-depth interviews, 8 focus groups in different
                  neighborhoods, and spent countless hours riding buses and observing behavior at major transit hubs.
                </p>

                {/* Research Image Placeholder - Now replaced with Affinity Mapping */}
                <div className="my-12">
                  <AffinityMapping />
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  The user base was more diverse than initially assumed. While lower-income workers form the core
                  ridership, university students, domestic workers, market vendors, and middle-class commuters all
                  rely on buses daily. This meant designing for vastly different levels of digital literacy.
                </p>
              </div>

              {/* Affinity Mapping Section */}
              <div id="affinity" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Affinity Mapping Insights
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Through affinity mapping, we identified six key theme areas that encompassed the user experience
                  challenges. These insights directly informed our design strategy and feature prioritization.
                </p>
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <p className="text-neutral-700 leading-relaxed">
                    The mapping revealed that users&rsquo; core struggle isn&rsquo;t just finding routes—it&rsquo;s the emotional labor 
                    of constantly navigating uncertainty. Every ride involves risk assessment, contingency planning, 
                    and emotional management. This understanding shifted our focus from simply providing information 
                    to building user confidence and reducing cognitive load.
                  </p>
                </div>
              </div>

              {/* Design Strategy */}
              <div id="strategy" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Design Strategy & Principles
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Armed with research insights, we established core design principles that would guide every decision.
                  These weren&rsquo;t just aspirational statements—they became the filter through which we evaluated every
                  feature and interaction.
                </p>

                {/* Strategy Image Placeholder */}
                <div className="rounded-2xl overflow-hidden my-8">
                  {/* PLACEHOLDER: Replace with design principles visualization or wireframes */}
                  <div className="w-full h-100 bg-neutral-100 flex items-center justify-center border-2 border-dashed border-neutral-300">
                    <p className="text-neutral-400 text-lg">Image: Design principles & early wireframes</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Offline First</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Designed the entire app to work offline by default. Users download maps by region, access
                      complete schedules, and plan journeys without internet. Only real-time tracking and ticket
                      purchases require connectivity.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Meet Users Where They Are</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Integrates with existing payment habits. Users can buy digital tickets OR use the app to
                      plan routes and pay cash on board. This hybrid approach respects that not everyone has
                      a credit card.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Progressive Complexity</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Interface reveals complexity gradually. First-time users see simple destination search;
                      advanced features like saved routes and custom preferences appear as users become comfortable.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Visual Over Verbal</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Given varying literacy levels, we prioritized visual communication. Icons, colors, and maps
                      convey information alongside text. Route numbers use the actual colors of the buses.
                    </p>
                  </div>
                </div>
              </div>

              {/* The Solution */}
              <div id="solution" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  The Solution: Ruta SV
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Ruta SV is built around four core user needs: getting from point A to point B, understanding costs,
                  knowing when buses arrive, and reducing travel anxiety. Each feature addresses one or more of these
                  needs while respecting the constraints of the local context.
                </p>

                {/* Solution Screens Placeholder */}
                <div className="rounded-2xl overflow-hidden my-8">
                  {/* PLACEHOLDER: Replace with app screens showing key features */}
                  <div className="w-full h-125 bg-linear-to-br from-blue-50 to-cyan-50 flex items-center justify-center border-2 border-dashed border-blue-200 rounded-2xl">
                    <p className="text-blue-400 text-lg">Screens: Route planning, cost breakdown, real-time tracking, navigation mode</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-neutral-900 mb-3">Intelligent Route Planning</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Goes beyond simple directions—users set preferences for fewest transfers, fastest route, or
                      minimal walking. Results always show at least three options, helping users understand trade-offs
                      and respecting their agency in decision-making.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-neutral-900 mb-3">Transparent Cost Calculation</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Every route displays total cost upfront with segment breakdown. Ticket bundles show clear savings:
                      &ldquo;You&rsquo;ll save $0.25&rdquo; rather than just listing prices. Payment bridges digital (credit card,
                      Tigo Money) and physical (cash on board) worlds.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-neutral-900 mb-3">Real-Time Tracking (When Available)</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      For GPS-equipped routes, users see exactly where their bus is. The app is honest about data
                      quality—when real-time isn&rsquo;t available, it shows scheduled times with a clear indicator.
                      Users can set alerts when their bus is approaching.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-neutral-900 mb-3">Step-by-Step Navigation</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Large, clear instructions guide users: &ldquo;Walk 5 minutes north,&rdquo; &ldquo;Wait for Route 29,&rdquo; &ldquo;Get off
                      in 3 stops.&rdquo; During the ride, the app counts down to their destination with vibration alerts
                      when their stop approaches.
                    </p>
                  </div>
                </div>

                {/* Design Details */}
                <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 space-y-6 mt-8">
                  <h3 className="text-2xl text-neutral-900">Design Details That Matter</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-lg font-medium text-neutral-900 mb-2">Visual Identity</p>
                      <p className="text-sm text-neutral-600">
                        Colors drawn from El Salvador&rsquo;s vibrant &ldquo;chicken buses&rdquo;&mdash;route-specific colors match actual
                        painted buses, making the app feel distinctly Salvadoran.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-neutral-900 mb-2">Readability</p>
                      <p className="text-sm text-neutral-600">
                        16pt body text minimum, key info at 24-28pt. High-visibility mode for bright sunlight.
                        Touch targets never smaller than 48x48 pixels.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-neutral-900 mb-2">Localization</p>
                      <p className="text-sm text-neutral-600">
                        Written by native speakers using Salvadoran idioms. Local place names (&ldquo;El Centro&rdquo; not
                        &ldquo;Centro Histórico&rdquo;) make the app feel homegrown.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testing & Iteration */}
              <div id="testing" className="space-y-6">
                <h2 className="text-3xl text-neutral-900" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Testing & Iteration
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Testing happened in waves, starting with low-fidelity prototypes and progressing to field testing.
                  Each round revealed insights that fundamentally changed our approach.
                </p>

                {/* Testing Image Placeholder */}
                <div className="rounded-2xl overflow-hidden my-8">
                  {/* PLACEHOLDER: Replace with usability testing photos or iteration comparison */}
                  <div className="w-full h-100 bg-neutral-100 flex items-center justify-center border-2 border-dashed border-neutral-300">
                    <p className="text-neutral-400 text-lg">Image: Usability testing sessions & design iterations</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Round 1: Testing Core Concepts</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Early wireframe testing with 20 participants revealed our initial design was too complicated.
                      Separate tabs for different journey stages confused users. <strong>Solution:</strong> A dynamic
                      home screen that adapts to context—showing route planning when idle, navigation when traveling,
                      and trip summaries when complete.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-2xl p-8">
                    <h3 className="text-xl text-neutral-900 mb-4">Round 2: Real-World Usability</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Working prototypes given to 15 participants for a week of real commuting revealed critical
                      issues lab testing missed. The map interface was nearly unusable in bright sunlight—we increased
                      contrast and added high-visibility mode. Battery drain from constant GPS was problematic—we
                      optimized to use GPS only when actively navigating.
                    </p>
                    <p className="text-neutral-600 leading-relaxed mt-4">
                      Most importantly, many users didn&rsquo;t trust real-time tracking initially—waiting early &ldquo;just in case.&rdquo;
                      We added confidence indicators showing data quality. After seeing accurate predictions consistently,
                      trust grew.
                    </p>
                  </div>
                </div>

                {/* Final Quote */}
                <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-500 mt-8">
                    <p className="text-neutral-700 text-lg italic leading-relaxed mb-4">
                      &ldquo;Before Ruta SV, I would only work in areas I knew well. Now I can accept jobs anywhere in
                    San Salvador. This app literally earned me more money.&rdquo;
                    </p>
                  <p className="text-neutral-500 text-sm">— Claudia, domestic worker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
