'use client';

import React, { useState, useRef } from 'react';

export default function CodingWorldText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverPos, setHoverPos] = useState({ x: -500, y: -500, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setHoverPos((prev) => ({ ...prev, isHovered: false }));
  };

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-black py-16 font-sans select-none sm:py-20 md:py-28">
      
      {/* Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-default px-4 text-center"
      >
        {/* Layer 1: Outlined Text Base (Stroke Only) */}
        <h1
          className="text-6xl font-black tracking-tighter text-transparent sm:text-8xl md:text-[110px] lg:text-[150px] uppercase transition-opacity duration-700"
          style={{
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.25)',
          }}
        >
          Coding World
        </h1>

        {/* Layer 2: Glowing Blue Light Reveal Masked to Hover Position */}
        <h1
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 text-6xl font-black tracking-tighter sm:text-8xl md:text-[110px] lg:text-[150px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-opacity duration-1000 ease-out"
          style={{
            opacity: hoverPos.isHovered ? 1 : 0,
            WebkitMaskImage: `radial-gradient(180px circle at ${hoverPos.x}px ${hoverPos.y}px, black 20%, transparent 80%)`,
            maskImage: `radial-gradient(180px circle at ${hoverPos.x}px ${hoverPos.y}px, black 20%, transparent 80%)`,
            WebkitTextStroke: '0px transparent',
            filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.8))',
          }}
        >
          Coding World
        </h1>

      </div>

    </section>
  );
}