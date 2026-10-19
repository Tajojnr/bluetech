'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SETUP_350K } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { CheckCircle2, ShoppingBag, Flame, Zap } from 'lucide-react';

export default function SetupSpotlight() {
  const waUrl = getWhatsAppUrl(
    SETUP_350K.title, 
    SETUP_350K.price, 
    SETUP_350K.includes.join(', ')
  );

  return (
    <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/40 via-zinc-900/90 to-zinc-950 p-6 sm:p-10 overflow-hidden backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.2)]"
      >
        {/* Glow ambient circle background */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hot Deal Badge */}
        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-red-500 text-black font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-widest shadow-md mb-6">
          <Flame className="w-3.5 h-3.5 fill-black" /> Best Budget Deal
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: SPECS & PRICING */}
          <div className="lg:col-span-7">
            <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
              Complete Package Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 leading-tight">
              {SETUP_350K.title}
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              {SETUP_350K.specs}
            </p>

            {/* WHAT'S INCLUDED CHECKLIST */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SETUP_350K.includes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-zinc-900/80 border border-white/5 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-zinc-200">{item}</span>
                </div>
              ))}
            </div>

            {/* PRICE & CTA */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <span className="text-xs text-zinc-400 uppercase tracking-wider block">Bundle Price</span>
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
                  ₦{SETUP_350K.price.toLocaleString()}
                </span>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Order This Setup on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: TRANSPARENT PRODUCT IMAGE WITH FLOATING ANIMATION */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              src={SETUP_350K.image}
              alt={SETUP_350K.title}
              className="relative z-10 max-h-72 sm:max-h-80 object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
}