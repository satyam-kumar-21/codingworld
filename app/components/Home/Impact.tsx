'use client';

import React, { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const IMPACT_CARDS = [
  {
    id: 1,
    title: 'Live Interactive Workshops',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Collaborative Coding Sessions',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Expert Mentorship & Seminars',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Hackathons & Competitions',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Industry Network Meetups',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Impact() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-black py-20 font-sans text-white overflow-hidden">
      
      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Top Badge */}
      <div className="mb-4 rounded-md border border-blue-500/30 bg-blue-950/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase">
        Impact
      </div>

      {/* Heading */}
      <h2 className="mb-12 max-w-3xl text-center text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
        Driving Real Results & Building Future-Ready Tech Leaders
      </h2>

      {/* Navigation Buttons for Smooth Manual Scroll */}
      <div className="mb-6 flex gap-3 self-end px-6 sm:px-16 lg:px-24">
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll impact stories left"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gray-900/80 text-white transition-colors hover:bg-blue-600 hover:border-blue-500"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll impact stories right"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gray-900/80 text-white transition-colors hover:bg-blue-600 hover:border-blue-500"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Smooth Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex w-full gap-6 overflow-x-auto scroll-smooth px-6 sm:px-16 lg:px-24 snap-x snap-mandatory"
      >
        {IMPACT_CARDS.map((card) => (
          <div
            key={card.id}
            className="group relative h-[420px] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-gray-900 sm:h-[480px] sm:w-[320px]"
          >
            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Top-Right Action Badge */}
            <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
              <ArrowUpRight className="h-5 w-5" />
            </div>

            {/* Card Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-medium text-white">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}