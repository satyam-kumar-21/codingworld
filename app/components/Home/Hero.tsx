'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] w-full scroll-mt-8 flex-col items-center justify-center overflow-hidden bg-black px-5 py-20 font-sans">
      
      {/* Background Blue Glow & Grid Placeholder */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:h-[500px] sm:w-[600px]"></div>
      
      <div className="z-10 flex w-full max-w-5xl flex-col items-center text-center">
        
        {/* Top Label */}
        <p className="mb-5 text-xs font-bold tracking-[0.2em] text-blue-500 uppercase sm:text-sm">
          Code. Learn. Build. Grow.
        </p>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Transform Into The Developer <br className="hidden md:block" />
          That The <span className="relative inline-block rounded-md border border-blue-500/50 bg-blue-900/10 px-2 py-0.5">Industry</span> Demands!
        </h1>

        {/* Subheading */}
        <p className="mb-10 max-w-3xl text-base text-gray-400 sm:text-lg md:text-xl">
          Join an elite network of learners leveling up their programming skills for top-tier tech roles at CodingWorld.
        </p>

        {/* Social Proof / Avatars */}
        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex -space-x-3">
            <img className="h-10 w-10 rounded-full border-2 border-black object-cover" src="https://i.pravatar.cc/100?img=11" alt="Student" />
            <img className="h-10 w-10 rounded-full border-2 border-black object-cover" src="https://i.pravatar.cc/100?img=12" alt="Student" />
            <img className="h-10 w-10 rounded-full border-2 border-black object-cover" src="https://i.pravatar.cc/100?img=33" alt="Student" />
            <img className="h-10 w-10 rounded-full border-2 border-black object-cover" src="https://i.pravatar.cc/100?img=14" alt="Student" />
          </div>
          <p className="text-sm font-medium text-gray-300">
            <span className="font-bold text-blue-500">500K+</span> Developers mastering modern tech stacks
          </p>
        </div>

        {/* CTA Button */}
        <button className="group flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          Explore Programs
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </button>

      </div>
    </section>
  );
}