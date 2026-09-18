'use client';

import React from 'react';
import Image from 'next/image';

// Demo logo data - replace the 'src' with your actual image paths later
const LOGOS = [
  { id: 1, name: 'Nagarro ES', src: '/demo-nagarro.png' },
  { id: 2, name: 'Amazon', src: '/demo-amazon.png' },
  { id: 3, name: 'Walmart', src: '/demo-walmart.png' },
  { id: 4, name: 'TCS', src: '/demo-tcs.png' },
  { id: 5, name: 'Google', src: '/demo-google.png' },
];

export default function CompanyScroll() {
  // Duplicating the logos array multiple times to ensure the screen is filled 
  // and the infinite scroll loop is completely seamless.
  const scrollingLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-12">
      
      {/* 
        Inline styles for the right-to-left animation. 
        It starts at 0% and moves left to -50%.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-rl {
          animation: scroll-right-to-left 30s linear infinite;
        }
      `}} />

      {/* 
        Container with gradient masks on the left and right edges 
        to make the logos fade in and out smoothly.
      */}
      <div className="relative flex w-full max-w-[100vw] items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <div className="flex w-max items-center animate-scroll-rl">
          {scrollingLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="mx-10 flex w-[150px] items-center justify-center sm:mx-16 sm:w-[200px]"
            >
              {/* 
                Placeholder for the actual Image.
                Using grayscale and opacity to match the reference design.
              */}
              <div className="flex items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                {/* 
                  When you add real images, uncomment the next/image component below 
                  and remove the fallback div text.
                */}
                
                {/* 
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={200} 
                  height={60} 
                  className="h-auto w-full object-contain"
                /> 
                */}

                {/* Fallback Text Box (Remove when images are added) */}
                <div className="flex h-12 w-full items-center justify-center rounded border border-gray-800 bg-gray-900/50 text-xl font-bold tracking-wider text-gray-300">
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}