'use client';

import React, { useEffect, useState } from 'react';
import BluetechLogo from './Logo';
import { getConsultationUrl } from '@/utils/whatsapp';
import { MessageSquare, Menu, X, ShoppingBag, Cpu, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Setups', href: '#setups', icon: ShoppingBag },
    { label: 'Gaming Rigs', href: '#laptops', icon: Cpu },
    { label: 'Smartphones', href: '#phones', icon: Smartphone },
  ];

  return (
    <>
      <header
        style={{ zIndex: 9999 }}
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-zinc-950/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-zinc-950/60 backdrop-blur-md border-b border-white/5 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* LOGO & BRAND */}
          <a href="#" className="flex items-center gap-2.5 group">
            <BluetechLogo size={36} />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-wider text-white flex items-center gap-1 leading-none">
                BLUETECH <span className="text-blue-500">GADGETS</span>
              </span>
              <span className="text-[9px] text-zinc-400 font-medium tracking-wide uppercase mt-1 hidden sm:block">
                Gadgets for every budget
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS (WHATSAPP + MOBILE MENU TOGGLE) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* WHATSAPP CTA BUTTON */}
            <a
              href={getConsultationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
              <span className="hidden sm:inline">Free Consultation</span>
              <span className="sm:hidden">Consult</span>
            </a>

            {/* MOBILE MENU TOGGLE BUTTON (HIGH CONTRAST) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-blue-500/40 text-white active:scale-95 transition-all shadow-md"
            >
              {mobileOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5 text-white" />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            style={{ zIndex: 9998 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[62px] left-0 right-0 w-full bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-4 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2">Navigation</span>
              
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 bg-zinc-900/60 border border-white/5 p-3.5 rounded-xl text-sm font-bold text-zinc-200 hover:text-white hover:border-blue-500/40 transition-all"
                  >
                    <Icon className="w-4 h-4 text-blue-400" />
                    <span>{link.label}</span>
                  </a>
                );
              })}

              <div className="h-px bg-white/10 my-1" />

              <a
                href={getConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-extrabold p-3.5 rounded-xl shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}