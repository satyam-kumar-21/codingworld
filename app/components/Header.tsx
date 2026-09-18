'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';
import RequestCallbackModal from './RequestCallbackModal';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth') => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - 16;
    window.scrollTo({ top: Math.max(0, top), behavior });
  };

  useEffect(() => {
    if (window.location.pathname !== '/' || !window.location.hash) return;

    const sectionId = window.location.hash.slice(1);
    const timer = window.setTimeout(() => scrollToSection(sectionId), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (window.location.pathname !== '/') return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    event.preventDefault();
    setIsMobileMenuOpen(false);
    window.history.replaceState(null, '', `/#${sectionId}`);
    window.requestAnimationFrame(() => scrollToSection(sectionId));
  };

  return (
    <header className="relative flex w-full items-center justify-between bg-black px-5 py-4 text-white sm:px-8">
      {/* Logo */}
      <a href="/#home" aria-label="Coding World home" className="z-20">
        <Image 
          src="/logo.png" 
          alt="Coding World" 
          width={190} 
          height={49} 
          priority 
          className="h-auto w-40 sm:w-48" 
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 rounded-xl border border-gray-800 bg-[#131313] px-8 py-3 md:flex">
        <a href="/" onClick={(event) => handleSectionClick(event, 'home')} className="font-medium text-white transition-colors hover:text-gray-300">
          Home
        </a>
        <a href="/#courses" onClick={(event) => handleSectionClick(event, 'courses')} className="font-medium text-gray-400 transition-colors hover:text-white">
          Courses
        </a>
        <a href="/#bootcamp" onClick={(event) => handleSectionClick(event, 'bootcamp')} className="font-medium text-gray-400 transition-colors hover:text-white">
          Bootcamp
        </a>
        <a href="/#notes" onClick={(event) => handleSectionClick(event, 'notes')} className="font-medium text-gray-400 transition-colors hover:text-white">
          Notes
        </a>
      </nav>

      {/* Actions (Request Call & Sign In) */}
      <div className="hidden items-center gap-5 sm:gap-8 md:flex">
        <button onClick={() => setIsCallbackOpen(true)} className="flex items-center gap-2 rounded-full border border-blue-500/50 bg-blue-500/10 px-3 py-2 text-blue-100 transition-all hover:bg-blue-500/20 sm:px-5 sm:py-2.5">
          <Phone size={18} strokeWidth={2} />
          <span className="hidden text-sm font-medium tracking-wide sm:inline">Request Call</span>
        </button>
        <a href="/signin" className="font-medium text-white transition-colors hover:text-blue-300">
          Sign In
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="z-20 text-white md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-8 bg-black/95 px-5 md:hidden">
          <nav className="flex flex-col items-center gap-6 text-xl">
            <a href="/" onClick={(event) => handleSectionClick(event, 'home')} className="font-medium text-white hover:text-gray-300">
              Home
            </a>
            <a href="/#courses" onClick={(event) => handleSectionClick(event, 'courses')} className="font-medium text-gray-400 hover:text-white">
              Courses
            </a>
            <a href="/#bootcamp" onClick={(event) => handleSectionClick(event, 'bootcamp')} className="font-medium text-gray-400 hover:text-white">
              Bootcamp
            </a>
            <a href="/#notes" onClick={(event) => handleSectionClick(event, 'notes')} className="font-medium text-gray-400 hover:text-white">
              Notes
            </a>
          </nav>
          
          <div className="mt-4 flex flex-col items-center gap-6">
            <button onClick={() => { setIsMobileMenuOpen(false); setIsCallbackOpen(true); }} className="flex items-center gap-2 rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-3 text-blue-100">
              <Phone size={20} strokeWidth={2} />
              <span className="font-medium tracking-wide">Request Call</span>
            </button>
            <a href="/signin" className="font-medium text-white hover:text-blue-300">
              Sign In
            </a>
          </div>
        </div>
      )}
      {isCallbackOpen && <RequestCallbackModal onClose={() => setIsCallbackOpen(false)} />}
    </header>
  );
}