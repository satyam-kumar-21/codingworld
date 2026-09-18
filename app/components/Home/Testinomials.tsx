'use client';

import React from 'react';
import { Star } from 'lucide-react';

const TOP_ROW_TESTIMONIALS = [
  {
    id: 1,
    name: 'Rohan Sharma',
    role: 'Full Stack Developer',
    rating: 4.9,
    avatar: '/student1.jpg',
    review: 'The project-based learning approach here completely transformed my career. The Next.js and backend modules are explained with extreme clarity!',
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'MERN Stack Developer',
    rating: 5.0,
    avatar: '/student2.jpg',
    review: 'Hands down the best web dev platform! Whenever I got stuck in complex Async React or state management, the mentor support was right there.',
  },
  {
    id: 3,
    name: 'Aman Gupta',
    role: 'Frontend Engineer',
    rating: 4.8,
    avatar: '/student3.jpg',
    review: 'Structured curriculum tailored to modern industry demands. Helped me polish my UI engineering skills and land my dream tech job.',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'UI/UX & Web Developer',
    rating: 4.9,
    avatar: '/student4.jpg',
    review: 'Building real-world scalable web apps with Next.js and Tailwind CSS gave me the portfolio confidence I was missing for months.',
  },
];

const BOTTOM_ROW_TESTIMONIALS = [
  {
    id: 5,
    name: 'Vikram Malhotra',
    role: 'Software Engineer',
    rating: 5.0,
    avatar: '/student5.jpg',
    review: 'The AI integration and advanced web architecture sections are outstanding. Everything is practical and straight to the point.',
  },
  {
    id: 6,
    name: 'Ananya Das',
    role: 'Backend Developer',
    rating: 4.8,
    avatar: '/student6.jpg',
    review: 'Node.js, Express, and database optimization concepts are taught with deep practical examples. Worth every single penny!',
  },
  {
    id: 7,
    name: 'Kabir Mehta',
    role: 'Coding Mentor',
    rating: 4.9,
    avatar: '/student7.jpg',
    review: 'I love recommending these cohorts to aspiring developers. The quality of teaching and real-world code reviews set a new benchmark.',
  },
  {
    id: 8,
    name: 'Neha Kapoor',
    role: 'Junior Web Developer',
    rating: 4.8,
    avatar: '/student8.jpg',
    review: 'Zero fluff, pure coding! I went from struggling with basic JavaScript fundamentals to deploying full-stack web applications effortlessly.',
  },
];

// Reusable Testimonial Card
const TestimonialCard = ({ item }: { item: typeof TOP_ROW_TESTIMONIALS[0] }) => (
  <div className="group relative flex w-[350px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-[#090d16]/90 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-[#0e1424] sm:w-[420px]">
    <div>
      {/* Header: User Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-12 w-12 rounded-full border border-blue-500/30 object-cover"
        />
        <div>
          <h4 className="text-base font-semibold text-white transition-colors group-hover:text-blue-400">
            {item.name}
          </h4>
          <p className="text-xs text-gray-400">{item.role}</p>
        </div>
      </div>

      <div className="my-4 h-[1px] w-full bg-white/10" />

      {/* Rating */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-bold text-white">{item.rating}</span>
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Feedback Text */}
      <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
        "{item.review}"
      </p>
    </div>
  </div>
);

export default function Testimonials() {
  const topRow = [...TOP_ROW_TESTIMONIALS, ...TOP_ROW_TESTIMONIALS];
  const bottomRow = [...BOTTOM_ROW_TESTIMONIALS, ...BOTTOM_ROW_TESTIMONIALS];

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 font-sans text-white">
      
      {/* Independent Row-Based Hover Pause Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: marquee-left 35s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: marquee-right 35s linear infinite;
        }

        /* Hover only pauses the active hovered row */
        .top-marquee-row:hover .animate-scroll-left {
          animation-play-state: paused;
        }
        .bottom-marquee-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}} />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      {/* Header */}
      <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center px-4 text-center">
        <div className="mb-4 rounded-md border border-amber-500/30 bg-amber-950/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber-400 uppercase">
          HEAR FROM OUR STUDENTS
        </div>

        <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
          We Help Learners Become Industry-Ready Developers.
        </h2>
      </div>

      {/* Vignette Edge Blurring */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent sm:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent sm:w-48" />

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-8">
        
        {/* Top Row: Right to Left (Independent Pause on Hover) */}
        <div className="top-marquee-row flex overflow-hidden">
          <div className="animate-scroll-left flex gap-6">
            {topRow.map((item, idx) => (
              <TestimonialCard key={`top-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Row: Left to Right (Independent Pause on Hover) */}
        <div className="bottom-marquee-row flex overflow-hidden">
          <div className="animate-scroll-right flex gap-6">
            {bottomRow.map((item, idx) => (
              <TestimonialCard key={`bottom-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}