'use client';

import React from 'react';
import { CheckCircle2, XCircle, Layers, Code2 } from 'lucide-react';

export default function Compare() {
  const comparisonData = [
    {
      cw: '100% Hands-On Production Level Projects',
      others: 'Pre-recorded, Purely Theoretical Tutorials',
    },
    {
      cw: '1-on-1 Code Reviews & Dedicated Mentorship',
      others: 'Zero Personalized Feedback or Guidance',
    },
    {
      cw: 'Dynamic Syllabi Updated Quarterly for Tech Trends',
      others: 'Outdated, Static Curricula From Years Ago',
    },
    {
      cw: 'Live Mock Interviews & Career Placement Support',
      others: 'Generic Completion Certificates Only',
    },
    {
      cw: 'Affordable Pricing with Lifetime Community Access',
      others: 'Exorbitant Fees with Time-Limited Access',
    },
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-black px-5 py-20 font-sans text-white sm:px-10">
      
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]"></div>

      {/* Top Badge */}
      <div className="mb-4 rounded-md border border-blue-500/30 bg-blue-950/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase">
        Comparison
      </div>

      {/* Main Heading */}
      <h2 className="mb-14 max-w-3xl text-center text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
        Why Developers Choose <span className="font-semibold text-blue-400">Coding World</span> Over Conventional Platforms
      </h2>

      {/* Comparison Container */}
      <div className="z-10 w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* Coding World Column (Highlighted) */}
          <div className="flex flex-col gap-6 rounded-2xl border border-blue-500/40 bg-[#0d1527]/80 p-6 shadow-[0_0_30px_rgba(59,130,246,0.1)] sm:p-8">
            
            {/* Header */}
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-white">Coding World</h3>
                <p className="text-xs text-blue-400">Career-Focused Mastery</p>
              </div>
            </div>

            {/* List */}
            <ul className="flex flex-col gap-5">
              {comparisonData.map((item, index) => (
                <li key={index} className="flex items-center gap-3.5 text-sm font-medium text-gray-200 sm:text-base">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span>{item.cw}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Column */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-black/40 p-6 sm:p-8">
            
            {/* Header */}
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-gray-300">Traditional Platforms</h3>
                <p className="text-xs text-gray-300">Standard Courses</p>
              </div>
            </div>

            {/* List */}
            <ul className="flex flex-col gap-5">
              {comparisonData.map((item, index) => (
                <li key={index} className="flex items-center gap-3.5 text-sm font-medium text-gray-400 sm:text-base">
                  <XCircle className="h-5 w-5 shrink-0 text-red-500/80" />
                  <span>{item.others}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}