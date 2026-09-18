'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react'; // Removed Youtube

export default function YTSection() {
  return (
    <section className="w-full bg-black px-5 py-10 font-sans sm:px-10 md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2.5rem] bg-[#111] p-4 md:flex-row md:p-6 lg:gap-6">
        
        {/* Left Column (Stats & CTA) */}
        <div className="flex w-full flex-col gap-4 lg:w-[55%] lg:gap-6">
          
          {/* Top Row: YouTube & Learners Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            
            {/* YouTube Stats Card */}
            <div className="flex flex-col justify-between rounded-3xl bg-black px-6 py-8 border border-white/5">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  {/* Replaced Lucide component with raw SVG */}
                  <svg 
                    className="h-8 w-8 text-red-500" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-3xl font-light tracking-tight text-white sm:text-4xl">850k</span>
                </div>
                <p className="text-sm text-gray-400">Coding World Subscribers</p>
              </div>
              <p className="mt-12 text-sm leading-relaxed text-gray-300">
                Dive into a thriving and vibrant open-source learning ecosystem.
              </p>
            </div>

            {/* Career-Driven Learners Card */}
            <div className="flex flex-col justify-between rounded-3xl bg-black px-6 py-8 border border-white/5">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <Star className="h-7 w-7 text-blue-500" fill="currentColor" />
                  <span className="text-3xl font-light tracking-tight text-white sm:text-4xl">1.5 Million</span>
                </div>
                <p className="text-sm text-gray-400">Career-Driven Developers</p>
              </div>
              <p className="mt-12 text-sm leading-relaxed text-gray-300">
                Join a massive worldwide community of tech enthusiasts and coders.
              </p>
            </div>
            
          </div>

          {/* Bottom Row: Big CTA */}
          <div className="flex h-full flex-col justify-between rounded-3xl bg-black px-6 py-10 border border-white/5">
            <h2 className="text-4xl font-light uppercase leading-[1.2] text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Launch <br className="hidden sm:block" />
              <div className="my-2 inline-flex -space-x-3 align-middle sm:my-0 sm:mx-3">
                <img className="h-10 w-10 rounded-full border-[3px] border-black object-cover sm:h-12 sm:w-12" src="https://i.pravatar.cc/100?img=11" alt="Learner" />
                <img className="h-10 w-10 rounded-full border-[3px] border-black object-cover sm:h-12 sm:w-12" src="https://i.pravatar.cc/100?img=12" alt="Learner" />
                <img className="h-10 w-10 rounded-full border-[3px] border-black object-cover sm:h-12 sm:w-12" src="https://i.pravatar.cc/100?img=33" alt="Learner" />
              </div>
              Your <br className="hidden sm:block" />
              Dream Tech Career With Us!
            </h2>
            
            <div className="mt-8">
              <button aria-label="Explore Coding World programs" className="flex h-12 w-20 items-center justify-center rounded-full border border-gray-700 text-white transition-colors hover:bg-white/10">
                <ArrowRight strokeWidth={1.5} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Right Column (Video Section) */}
        <div className="relative flex min-h-[560px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-blue-900/30 bg-[#020617] px-6 py-10 lg:min-h-[620px] lg:w-[45%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="https://www.pexels.com/download/video/30284959/" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617]/75 via-[#020617]/30 to-[#020617]/85" />

          <h3 className="relative z-10 text-4xl font-light text-white sm:text-5xl">
            Start <br /> Learning
          </h3>

          <button aria-label="Get in touch with Coding World" className="relative z-10 self-start rounded-full border border-blue-500/50 px-6 py-2.5 text-sm font-medium text-blue-100 backdrop-blur-sm transition-colors hover:bg-blue-500/20">
            Get in touch →
          </button>
          
        </div>
        
      </div>
    </section>
  );
}