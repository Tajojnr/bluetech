'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SMARTPHONES } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { Smartphone, ShoppingBag, Flame } from 'lucide-react';

export default function PhoneVault() {
  const [activeBrand, setActiveBrand] = useState<'All' | 'Apple' | 'Samsung'>('All');

  const filteredPhones = activeBrand === 'All'
    ? SMARTPHONES
    : SMARTPHONES.filter(p => p.brand === activeBrand);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-30">
      
      {/* HEADER & BRAND FILTER TABS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div>
          <span className="text-blue-400 text-xs font-mono tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-flex items-center gap-1.5 mb-2">
            <Smartphone className="w-3.5 h-3.5" /> Direct Imports
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Flagship Smartphones Vault
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Certified Mint & Brand New iPhones & Samsung Devices
          </p>
        </div>

        {/* TABS */}
        <div className="flex bg-zinc-900/90 p-1.5 rounded-2xl border border-white/10 shadow-lg">
          {(['All', 'Apple', 'Samsung'] as const).map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeBrand === brand
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {brand === 'Apple' ? '🍎 iPhones' : brand === 'Samsung' ? '📱 Samsung' : '⚡ All Phones'}
            </button>
          ))}
        </div>
      </div>

      {/* PHONE PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredPhones.map((phone) => {
          const specSummary = Object.entries(phone.specs).map(([k, v]) => `${k}: ${v}`).join(', ');
          const waUrl = getWhatsAppUrl(phone.name, phone.price, specSummary);

          return (
            <motion.div
              key={phone.id}
              whileHover={{ y: -6 }}
              className="bg-zinc-900/40 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group backdrop-blur-xl"
            >
              <div>
                {/* IMAGE CONTAINER */}
                <div className="h-48 w-full bg-zinc-950/70 rounded-xl flex items-center justify-center p-4 relative border border-white/5 overflow-hidden">
                  {phone.isHot && (
                    <span className="absolute top-2.5 left-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                      <Flame className="w-3 h-3" /> BESTSELLER
                    </span>
                  )}
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="max-h-36 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                </div>

                {/* DETAILS */}
                <div className="mt-4">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{phone.brand}</span>
                  <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-blue-400 transition-colors">
                    {phone.name}
                  </h3>

                  {/* SPEC BADGES */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {Object.entries(phone.specs).map(([k, v]) => (
                      <span key={k} className="text-[10px] bg-zinc-800/80 border border-white/5 text-zinc-300 px-2 py-0.5 rounded font-mono">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* PRICE & BUY BUTTON */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Price</span>
                  <div className="text-lg font-black text-white">₦{phone.price.toLocaleString()}</div>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Order
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}