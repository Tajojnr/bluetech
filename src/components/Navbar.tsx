'use client';

import React, { useEffect, useState } from 'react';
import BluetechLogo from './Logo';
import { getConsultationUrl } from '@/utils/whatsapp';
import { MessageSquare, Zap, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Setups', href: '#setups' },
    { label: 'Laptops', href: '#laptops' },
    { label: 'Phones', href: '#phones' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'py-2.5 bg-zinc-950/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
            : 'py-4 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* LEFT: LOGO + BRAND */}
          <a href="#" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              {/* Soft glow ring behind logo */}
              <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <BluetechLogo size={scrolled ? 36 : 42} />
            </div>
            
            <div className="flex flex-col">
              <span className="text-[15px] sm:text-base font-black tracking-[0.08em] text-white leading-none flex items-center gap-1.5">
                BLUETECH
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  GADGETS
                </span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-zinc-500 font-medium tracking-[0.15em] uppercase mt-0.5 hidden sm:block">
                Gadgets for every budget
              </span>
            </div>
          </a>

          {/* CENTER: DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1.5 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-5 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT: CTA BUTTONS */}
          <div className="flex items-center gap-2.5">
            
            {/* Secondary subtle button - desktop only */}
            <a
              href="#setups"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white px-3 py-2 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Shop
            </a>

            {/* Primary WhatsApp CTA */}
            <a
              href={getConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full"
            >
              {/* Animated gradient border glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-80 group-hover:opacity-100 blur-[1px] transition-opacity" />
              
              <div className="relative flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 text-white text-xs font-bold px-4 sm:px-5 py-2.5 rounded-full m-[1px] transition-colors duration-300">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Free Consultation</span>
                <span className="sm:hidden">Consult</span>
                <Zap className="w-3 h-3 text-amber-400 fill-amber-400/40" />
              </div>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[72px] left-4 right-4 z-[99] md:hidden"
          >
            <div className="bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <a
                  href={getConsultationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold px-4 py-3 rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  Free Tech Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}