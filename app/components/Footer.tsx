'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-12 text-sm text-gray-400 border-t border-white/10 sm:px-12 md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        
        {/* Brand & Socials */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Image 
            src="/logo.png" 
            alt="Coding World" 
            width={150} 
            height={48} 
            className="h-auto w-36 object-contain" 
          />
          <p className="text-center text-xs text-gray-300 md:text-left">
            Empowering the next generation of developers.
          </p>
          
          <div className="flex items-center gap-5 pt-1 text-white">
            {/* Instagram */}
            <a href="#instagram" aria-label="Instagram" className="transition-colors hover:text-blue-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#linkedin" aria-label="LinkedIn" className="transition-colors hover:text-blue-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* Discord */}
            <a href="#discord" aria-label="Discord" className="transition-colors hover:text-blue-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#youtube" aria-label="YouTube" className="transition-colors hover:text-blue-400">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Simplified Essential Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-300 md:justify-end">
          <a href="/courses" className="transition-colors hover:text-blue-400">Courses</a>
          <a href="/about" className="transition-colors hover:text-blue-400">About</a>
          <a href="/support" className="transition-colors hover:text-blue-400">Support</a>
          <a href="/privacy" className="transition-colors hover:text-blue-400">Privacy</a>
          <a href="/contact" className="transition-colors hover:text-blue-400">Contact</a>
        </div>

      </div>

      {/* Divider */}
      <div className="mx-auto my-8 max-w-7xl border-t border-white/10" />

      {/* Copyright Bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-gray-300 sm:flex-row">
        <p>© {new Date().getFullYear()} Coding World. All rights reserved.</p>
        <p>Built for creators & developers.</p>
      </div>
    </footer>
  );
}