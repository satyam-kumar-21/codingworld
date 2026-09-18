'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    question: 'Are Coding World courses suitable for absolute beginners?',
    answer:
      'Yes! Our cohorts are carefully structured to take you from core programming fundamentals up to advanced production-level engineering. Whether you are writing your first line of code or looking to upscale your tech stack, our courses cater to all skill levels.',
  },
  {
    id: 2,
    question: 'Does Coding World provide placement support and career guidance?',
    answer:
      'Abolutely. We offer dedicated career support including resume audits, LinkedIn & GitHub portfolio reviews, 1-on-1 mock technical interviews, and direct referrals through our tech hiring network.',
  },
  {
    id: 3,
    question: 'What programming languages and modern stacks are covered?',
    answer:
      'We specialize in modern full-stack development and AI integration. Stacks include JavaScript (ES6+), TypeScript, React 19, Next.js 15, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and AI model workflows.',
  },
  {
    id: 4,
    question: 'Are the cohort sessions live or recorded, and do I get lifetime access?',
    answer:
      'Our programs combine live interactive workshops with high-quality recorded video modules. You get lifetime access to all course materials, lecture recordings, code repositories, and future updates.',
  },
  {
    id: 5,
    question: 'Do students build real-world production projects during the course?',
    answer:
      '100% yes. We believe in learning by doing. Throughout the program, you will construct scalable full-stack applications, deploy them to production, and build an impressive portfolio that stands out to recruiters.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-black px-4 py-24 font-sans text-white sm:px-8 md:px-12">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      {/* Header */}
      <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-blue-500/30 bg-blue-950/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase">
          <HelpCircle className="h-3.5 w-3.5" /> FAQS
        </div>

        <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
          Frequently Asked Questions From <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Our Students
          </span>
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.id}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? 'border-blue-500/40 bg-[#090d16] shadow-[0_0_25px_rgba(59,130,246,0.15)]'
                  : 'border-white/10 bg-[#0a0e17]/80 hover:border-white/20 hover:bg-[#0d121f]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="flex w-full items-center justify-between p-6 text-left transition-colors sm:p-7"
              >
                <span className="text-base font-medium tracking-tight text-white sm:text-lg">
                  {faq.question}
                </span>

                <div
                  className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-blue-500/40 bg-blue-500/10 text-blue-400' : 'text-gray-400'
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Expandable Content */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-relaxed text-gray-400 sm:px-7 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}