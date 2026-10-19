'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 243; 

export default function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, '0');
      img.src = `/frames/frame_${frameNumber}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setIsLoaded(true);
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollYProgress.get() * TOTAL_FRAMES)
      );

      const currentImage = images[frameIndex];

      if (currentImage && currentImage.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const hRatio = canvas.width / currentImage.width;
        const vRatio = canvas.height / currentImage.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - currentImage.width * ratio) / 2;
        const centerShift_y = (canvas.height - currentImage.height * ratio) / 2;

        ctx.drawImage(
          currentImage,
          0,
          0,
          currentImage.width,
          currentImage.height,
          centerShift_x,
          centerShift_y,
          currentImage.width * ratio,
          currentImage.height * ratio
        );
      }
    };

    const unsubscribe = scrollYProgress.on("change", render);
    render();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, scrollYProgress, images]);

  // Text animations mapped across the 243 frames
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [30, 0, -30]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [30, 0, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-zinc-950" style={{ height: '400vh' }}>
      
      {/* LOCKED VIEWPORT CONTAINER */}
      <div 
        className="w-full overflow-hidden flex items-center justify-center bg-zinc-950"
        style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 10 }}
      >
        
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-zinc-950 text-blue-500 font-mono text-sm tracking-widest gap-3">
            <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span>LOADING EXPERIENCE ({loadProgress}%)</span>
          </div>
        )}

        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0 opacity-70 filter contrast-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950 z-10 pointer-events-none" />

        {/* Text Slide 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute z-20 flex flex-col items-center text-center px-6"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Bluetech Gadgets Experience
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight">
            ABSOLUTE POWER.
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-md">
            Custom engineered workstation setups and high-performance gaming laptops.
          </p>
        </motion.div>

        {/* Text Slide 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute z-20 flex flex-col items-center text-center px-6"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 tracking-tight">
            PRECISION CRAFTED.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-3 max-w-md">
            Every keycap, screen, and accessory curated for your ultimate desk setup.
          </p>
        </motion.div>

        {/* Text Slide 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute z-20 flex flex-col items-center text-center px-6"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            BUILT FOR YOUR BUDGET.
          </h2>
          <p className="text-cyan-400 text-sm font-semibold mt-2">
            Scroll down to explore available setups ↓
          </p>
        </motion.div>

      </div>
    </div>
  );
}