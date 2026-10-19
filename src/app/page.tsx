'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import CinematicScroll from '@/components/CinematicScroll';
import SetupSpotlight from '@/components/SetupSpotlight';
import SetupCalculator from '@/components/SetupCalculator';
import LaptopCatalog from '@/components/LaptopCatalog';
import PhoneVault from '@/components/PhoneVault';
import BluetechLogo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';
import { getConsultationUrl } from '@/utils/whatsapp';
import { MessageSquare, ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500 selection:text-white font-sans antialiased">
      
      {/* 1. STICKY PREMIUM NAVBAR */}
      <Navbar />

      {/* 2. CINEMATIC SCROLL CANVAS HERO */}
      <CinematicScroll />

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-30 bg-zinc-950 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.95)]">
        
        {/* TRUST BADGES BAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6 border-b border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-white/5">
              <Truck className="w-5 h-5 text-blue-400" />
              <div className="text-left">
                <span className="text-xs font-bold text-white block">Fast Delivery Nationwide</span>
                <span className="text-[10px] text-zinc-400">Safe, tracked doorstep shipping</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-white/5">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <span className="text-xs font-bold text-white block">Certified Tested Tech</span>
                <span className="text-[10px] text-zinc-400">100% verified pristine hardware</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-white/5">
              <Headphones className="w-5 h-5 text-indigo-400" />
              <div className="text-left">
                <span className="text-xs font-bold text-white block">Free Tech Consultation</span>
                <span className="text-[10px] text-zinc-400">Get advice before you buy</span>
              </div>
            </div>

          </div>
        </section>

        {/* 4. ₦350K STARTER SETUP SPOTLIGHT */}
        <div id="setups">
          <SetupSpotlight />
        </div>

        {/* 5. INTERACTIVE SETUP CALCULATOR */}
        <SetupCalculator />

        {/* 6. GAMING LAPTOPS CATALOG */}
        <div id="laptops">
          <LaptopCatalog />
        </div>

        {/* 7. SMARTPHONES VAULT */}
        <div id="phones">
          <PhoneVault />
        </div>

        {/* 8. PREMIUM FOOTER WITH SOCIALS */}
        <footer className="border-t border-white/10 mt-20 bg-zinc-950 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Top row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
              
              {/* Brand */}
              <div className="flex items-center gap-3">
                <BluetechLogo size={44} />
                <div>
                  <span className="font-extrabold text-white text-lg tracking-wide">
                    BLUETECH GADGETS
                  </span>
                  <p className="text-xs text-zinc-500 mt-0.5">Gadgets for every budget</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col items-center md:items-end gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  Follow the Setup
                </span>
                <SocialLinks size="md" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-xs text-zinc-500 space-y-1">
                <p>
                  Direct Orders & Consultation:{' '}
                  <a 
                    href="https://wa.me/2349122814636" 
                    className="text-blue-400 font-mono hover:underline"
                  >
                    09122814636
                  </a>
                </p>
                <p>© 2025 Bluetech Gadgets. All rights reserved.</p>
              </div>

              <a
                href={getConsultationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-blue-600 border border-white/10 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}