'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LAPTOPS } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { Laptop, Cpu, ShoppingBag, Zap } from 'lucide-react';

export default function LaptopCatalog() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Gaming Laptop' | 'Workstation'>('All');

  const filteredLaptops = activeCategory === 'All'
    ? LAPTOPS
    : LAPTOPS.filter(l => l.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-30">
      
      {/* HEADER & FILTER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div>
          <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-flex items-center gap-1.5 mb-2">
            <Cpu className="w-3.5 h-3.5" /> High FPS & Workstations
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Gaming Rigs & Laptops
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Fully tested, pristine performance laptops ready for extreme gaming & heavy coding
          </p>
        </div>

        {/* TABS */}
        <div className="flex bg-zinc-900/90 p-1.5 rounded-2xl border border-white/10 shadow-lg">
          {(['All', 'Gaming Laptop', 'Workstation'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat === 'Gaming Laptop' ? '🎮 Gaming Laptops' : cat === 'Workstation' ? '💻 Workstations' : '⚡ All Laptops'}
            </button>
          ))}
        </div>
      </div>

      {/* LAPTOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLaptops.map((laptop) => {
          const specSummary = Object.entries(laptop.specs).map(([k, v]) => `${k}: ${v}`).join(' | ');
          const waUrl = getWhatsAppUrl(laptop.name, laptop.price, specSummary);

          return (
            <motion.div
              key={laptop.id}
              whileHover={{ y: -6 }}
              className="bg-zinc-900/40 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group backdrop-blur-xl relative"
            >
              <div>
                {/* IMAGE CONTAINER */}
                <div className="h-52 w-full bg-zinc-950/70 rounded-xl flex items-center justify-center p-4 relative border border-white/5 overflow-hidden">
                  {laptop.isHot && (
                    <span className="absolute top-3 left-3 bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-red-400" /> HOT RIG
                    </span>
                  )}
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="max-h-40 object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>

                {/* DETAILS */}
                <div className="mt-4">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">{laptop.category}</span>
                  <h3 className="text-lg font-bold text-white mt-0.5 group-hover:text-blue-400 transition-colors">
                    {laptop.name}
                  </h3>

                  {/* SPEC BADGES */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {Object.entries(laptop.specs).map(([key, val]) => (
                      <span key={key} className="text-[11px] bg-zinc-800/80 border border-white/5 text-zinc-300 px-2.5 py-1 rounded-md font-mono">
                        <strong className="text-zinc-500 font-normal">{key}:</strong> {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* PRICE & BUY BUTTON */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xl font-black text-white">₦{laptop.price.toLocaleString()}</div>
                  {laptop.originalPrice && (
                    <div className="text-xs text-zinc-500 line-through">₦{laptop.originalPrice.toLocaleString()}</div>
                  )}
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" /> Order Laptop
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}