'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CALCULATOR_ITEMS } from '@/data/products';
import { getSetupCalculatorUrl } from '@/utils/whatsapp';
import { Check, Sliders, Monitor, MessageSquare } from 'lucide-react';

export default function SetupCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    CALCULATOR_ITEMS.filter(i => i.selectedByDefault).map(i => i.id)
  );

  const toggleItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(itemId => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedItems = CALCULATOR_ITEMS.filter(i => selectedIds.includes(i.id));
  const totalCost = selectedItems.reduce((sum, i) => sum + i.price, 0);

  const waUrl = getSetupCalculatorUrl(
    selectedItems.map(i => ({ name: i.name, price: i.price })),
    totalCost
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-30">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-blue-400 text-xs font-mono tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5" /> Interactive Workstation Builder
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
          Build & Price Your Custom Setup
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Toggle desk accessories, monitors, and gear below to calculate your real-time total.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CHECKLIST ITEMS (LEFT COLUMN) */}
        <div className="lg:col-span-7 space-y-2.5">
          {CALCULATOR_ITEMS.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-200 flex items-center justify-between select-none ${
                  isSelected
                    ? 'bg-blue-950/30 border-blue-500/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                    : 'bg-zinc-900/40 border-white/5 text-zinc-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                    isSelected ? 'bg-blue-600 border-blue-500 text-white' : 'border-zinc-700 bg-zinc-800'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className="text-sm font-semibold block text-zinc-100">{item.name}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-cyan-400 font-mono">
                  ₦{item.price.toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>

        {/* SUMMARY CARD (STICKY RIGHT COLUMN) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-blue-950/50 p-6 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-400" /> Selected Gear Summary
            </h3>

            {/* SELECTED LIST */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
              {selectedItems.length === 0 ? (
                <p className="text-xs text-zinc-500 italic">No items selected yet. Tap items on the left to add.</p>
              ) : (
                selectedItems.map(i => (
                  <div key={i.id} className="flex justify-between text-xs py-1.5 border-b border-white/5 text-zinc-300">
                    <span className="truncate pr-4">{i.name}</span>
                    <span className="font-mono text-cyan-400">₦{i.price.toLocaleString()}</span>
                  </div>
                ))
              )}
            </div>

            {/* TOTAL COMPUTATION */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-baseline justify-between">
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Total ({selectedItems.length} Items):</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ₦{totalCost.toLocaleString()}
              </span>
            </div>

            {/* SEND CALCULATED SETUP TO WHATSAPP */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-bold py-3.5 rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              Order Selected Setup on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}