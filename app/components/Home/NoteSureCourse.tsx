'use client';

import React from 'react';
import { Clock, Award, Headphones, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const COURSES = [
  {
    id: 1,
    number: '01',
    title: 'Full-Stack Web Development & AI Engineering Cohort',
    description: 'Build production-ready web apps, master scalable backend architecture, DevOps, and integrate cutting-edge AI models.',
    duration: '6 Months',
    certified: 'Yes Certified',
    support: '24/7 Mentor Support',
    price: 'Rs. 7,999',
    originalPrice: 'Rs. 15,999',
    isComingSoon: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    glowColor: 'from-blue-600/20 via-blue-500/5 to-transparent',
  },
  {
    id: 2,
    number: '02',
    title: 'Complete Next.js 15 & Modern Full-Stack Masterclass',
    description: 'Master App Router, Server Components, Server Actions, Authentication, and deploy high-performance applications.',
    duration: '3 Months',
    certified: 'Yes Certified',
    support: '24/7 Mentor Support',
    price: 'Coming Soon',
    originalPrice: '',
    isComingSoon: true,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glowColor: 'from-cyan-600/20 via-blue-500/5 to-transparent',
  },
  {
    id: 3,
    number: '03',
    title: 'Data Structures, Algorithms & System Design',
    description: 'Master core problem-solving techniques, optimize code performance, and crack technical coding interviews at top tech firms.',
    duration: '5 Months',
    certified: 'Yes Certified',
    support: '24/7 Mentor Support',
    price: 'Rs. 6,499',
    originalPrice: 'Rs. 12,999',
    isComingSoon: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    glowColor: 'from-indigo-600/20 via-blue-500/5 to-transparent',
  },
];

export default function NoteSureCourse() {
  return (
    <section id="courses" className="relative w-full scroll-mt-8 bg-black px-4 py-24 font-sans text-white sm:px-8 md:px-12">
      
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

      {/* Header */}
      <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" /> Featured Programs
        </div>

        <h2 className="mb-6 text-3xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
          Not Sure Which Course Fits You? <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Coding World
          </span> Is Here To Help.
        </h2>

        <p className="mb-8 max-w-2xl text-sm text-gray-400 sm:text-base">
          Explore curated learning paths designed by industry leaders to get you build-ready, interview-ready, and job-ready.
        </p>

        <button className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] active:scale-95">
          Explore All Courses <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Smooth Premium Stacking Container */}
      <div className="relative mx-auto max-w-5xl space-y-12 pb-24">
        {COURSES.map((course, index) => {
          const stickyTop = 100 + index * 28;

          return (
            <div
              key={course.id}
              style={{
                top: `${stickyTop}px`,
              }}
              className="sticky transition-all duration-500 ease-out transform-gpu"
            >
              {/* Outer Glow Card Wrapper */}
              <div
                className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090d16]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-white/20`}
              >
                {/* Subtle Card Ambient Background Gradient */}
                <div className={`pointer-events-none absolute -inset-px rounded-[2.5rem] bg-gradient-to-br ${course.glowColor} opacity-50 transition-opacity group-hover:opacity-100`} />

                <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  
                  {/* Left Column: Course Banner Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 lg:col-span-5">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Floating Status Badge */}
                    {course.isComingSoon ? (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-600/90 px-3.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" /> Coming Soon
                      </div>
                    ) : (
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Enrollment Open
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/60 px-3 py-1 text-xs font-mono font-medium text-gray-300 backdrop-blur-md">
                      CARD {course.number}
                    </div>
                  </div>

                  {/* Right Column: Course Info */}
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      <h3 className="mb-3 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-3xl">
                        {course.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:text-base">
                        {course.description}
                      </p>

                      {/* Info Badges */}
                      <div className="mb-8 flex flex-wrap gap-2.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-gray-300 transition-colors hover:bg-white/10">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-gray-300 transition-colors hover:bg-white/10">
                          <Award className="h-4 w-4 text-blue-400" />
                          <span>{course.certified}</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-gray-300 transition-colors hover:bg-white/10">
                          <Headphones className="h-4 w-4 text-blue-400" />
                          <span>{course.support}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer / CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                      <div>
                        {course.isComingSoon ? (
                          <div className="flex flex-col">
                            <span className="text-xs text-blue-400 uppercase font-semibold tracking-wider">Status</span>
                            <span className="text-2xl font-bold tracking-tight text-white">Launching Soon</span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs text-gray-400 uppercase font-medium">Price</span>
                            <span className="text-2xl font-bold text-white sm:text-3xl">
                              {course.price}
                            </span>
                            {course.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {course.originalPrice}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <button
                        disabled={course.isComingSoon}
                        className={`group/btn flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                          course.isComingSoon
                            ? 'cursor-not-allowed border border-white/10 bg-white/5 text-gray-500'
                            : 'bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                        }`}
                      >
                        <span>{course.isComingSoon ? 'Notify Me' : 'Check Course'}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}