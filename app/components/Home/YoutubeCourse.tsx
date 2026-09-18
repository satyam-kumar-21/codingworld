'use client';

import React, { useState } from 'react';
import { Play, Eye, ThumbsUp, ExternalLink } from 'lucide-react';

// Custom YouTube Icon to avoid missing export errors from lucide-react
const YoutubeIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const YOUTUBE_COURSES = [
  {
    id: 1,
    title: 'Complete Modern JavaScript & Async Mastery',
    category: 'Full Course',
    views: '280K',
    likes: '19.4K',
    thumbnail: '/yt1.jpg',
    youtubeUrl: 'https://www.youtube.com/',
  },
  {
    id: 2,
    title: 'React.js 19 & Next.js 15 Complete Cohort Tutorial',
    category: 'Masterclass',
    views: '410K',
    likes: '34.2K',
    thumbnail: '/yt2.jpg',
    youtubeUrl: 'https://www.youtube.com/',
  },
  {
    id: 3,
    title: 'Build A High-Performance Awwwards Portfolio',
    category: 'Project Tutorial',
    views: '195K',
    likes: '14.8K',
    thumbnail: '/yt3.jpg',
    youtubeUrl: 'https://www.youtube.com/',
  },
  {
    id: 4,
    title: 'Node.js, Express & MongoDB Production Backend',
    category: 'Backend Series',
    views: '320K',
    likes: '22.1K',
    thumbnail: '/yt4.jpg',
    youtubeUrl: 'https://www.youtube.com/',
  },
  {
    id: 5,
    title: 'Tailwind CSS v4 & Advanced Web Design Animations',
    category: 'Crash Course',
    views: '150K',
    likes: '11.5K',
    thumbnail: '/yt1.jpg',
    youtubeUrl: 'https://www.youtube.com/',
  },
  {
    id: 6,
    title: 'Full Stack Web Developer Roadmap & Career Guide',
    category: 'Guide',
    views: '530K',
    likes: '48.9K',
    thumbnail: '/yt6.jpg',
    youtubeUrl: 'https://www.youtube.com/',
  },
];

export default function YoutubeCourse() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Duplicate items for infinite marquee loop
  const displayCourses = [...YOUTUBE_COURSES, ...YOUTUBE_COURSES];

  return (
    <section id="notes" className="relative w-full scroll-mt-8 overflow-hidden bg-black py-24 font-sans text-white">
      
      {/* Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee.paused {
          animation-play-state: paused !important;
        }
      `}} />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[170px]" />

      {/* Header */}
      <div className="mx-auto mb-16 flex max-w-4xl flex-col items-center px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-950/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-red-500 uppercase">
          <YoutubeIcon className="h-4 w-4" /> YOUTUBE
        </div>

        <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
          20+ Free Coding Tutorials On <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-orange-400">
            Coding World
          </span>
        </h2>
      </div>

      {/* Vignette Edge Blurring */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-black to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-black to-transparent sm:w-40" />

      {/* Marquee Track */}
      <div className="relative w-full py-6">
        <div className={`animate-marquee flex gap-6 ${hoveredIndex !== null ? 'paused' : ''}`}>
          {displayCourses.map((course, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <a
                key={`${course.id}-${index}`}
                href={course.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border bg-[#0a0e17] p-4 transition-all duration-500 ease-out sm:w-[380px] ${
                  isHovered
                    ? 'z-30 scale-105 border-red-500/60 shadow-[0_0_35px_rgba(239,68,68,0.35)] blur-none'
                    : isAnyHovered
                    ? 'z-0 scale-95 border-white/5 opacity-30 blur-[3px]'
                    : 'z-10 border-white/10 opacity-100 blur-none hover:border-white/20'
                }`}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-gray-200 backdrop-blur-md">
                    {course.category}
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <h3 className="line-clamp-2 text-base font-medium text-white transition-colors group-hover:text-red-400 sm:text-lg">
                    {course.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5 text-gray-400" /> {course.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3.5 w-3.5 text-gray-400" /> {course.likes}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span>Watch</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </section>
  );
}