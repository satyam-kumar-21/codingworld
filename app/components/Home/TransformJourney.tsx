'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

// Background floating card showcase items
const BACKGROUND_CARDS = [
  {
    id: 1,
    title: 'Fullstack Next.js 15',
    tag: 'Cohort 2026',
    image: '/journey1.jpg',
    position: 'top-6 left-[8%] sm:left-[12%]',
    rotation: '-rotate-6',
    blur: 'blur-[3px]',
    opacity: 'opacity-40 sm:opacity-50',
  },
  {
    id: 2,
    title: 'Awwwards Portfolio',
    tag: 'Interactive Web',
    image: '/jorney2.jpg',
    position: 'top-10 right-[8%] sm:right-[14%]',
    rotation: 'rotate-6',
    blur: 'blur-[4px]',
    opacity: 'opacity-30 sm:opacity-45',
  },
  {
    id: 3,
    title: 'React & Redux Toolkit',
    tag: 'Frontend Engineering',
    image: '/j3.jpg',
    position: 'top-2 left-[42%]',
    rotation: '-rotate-2',
    blur: 'blur-[5px]',
    opacity: 'opacity-25 sm:opacity-40',
  },
  {
    id: 4,
    title: 'Node.js Microservices',
    tag: 'Backend Architecture',
    image: '/j4.jpg',
    position: 'bottom-8 left-[10%] sm:left-[16%]',
    rotation: 'rotate-3',
    blur: 'blur-[4px]',
    opacity: 'opacity-35 sm:opacity-50',
  },
  {
    id: 5,
    title: 'Modern JS Mastery',
    tag: 'Core Fundamentals',
    image: '/j5.jpg',
    position: 'bottom-6 right-[10%] sm:right-[15%]',
    rotation: '-rotate-6',
    blur: 'blur-[3px]',
    opacity: 'opacity-40 sm:opacity-50',
  },
  {
    id: 6,
    title: 'UI/UX & Web Design',
    tag: 'Figma to Code',
    image: '/j6.jpg',
    position: 'bottom-2 left-[45%]',
    rotation: 'rotate-2',
    blur: 'blur-[6px]',
    opacity: 'opacity-20 sm:opacity-35',
  },
];

export default function TransformJourney() {
  return (
    <section id="bootcamp" className="relative flex min-h-[440px] w-full scroll-mt-8 items-center justify-center overflow-hidden bg-black py-16 font-sans text-white sm:min-h-[500px] sm:py-20 md:min-h-[580px] md:py-28">
      
      {/* Dynamic Ambient Blue Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-cyan-500/20 blur-[180px]" />

      {/* Floating Blurred Background Cards */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {BACKGROUND_CARDS.map((card) => (
          <div
            key={card.id}
            className={`absolute hidden md:flex w-52 sm:w-64 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0d121f]/90 p-2.5 shadow-2xl transition-all duration-700 ${card.position} ${card.rotation} ${card.blur} ${card.opacity}`}
          >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-900">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-[11px] font-medium text-gray-300">{card.title}</span>
              <span className="text-[9px] text-gray-300">{card.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Radial Edge Mask for Depth */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-radial-gradient from-transparent via-black/60 to-black" />

      {/* Main Center Content */}
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          START YOUR EVOLUTION
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
          Transform Your Learning Journey Into <br />
          A Career Breakthrough With <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Coding World
          </span>
        </h2>

        {/* Call to Action Button */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#courses"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] active:scale-95"
          >
            <span>Explore Courses</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>

    </section>
  );
}