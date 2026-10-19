'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Optimized frame count
const TOTAL_FRAMES = 80; 

export default function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. INSTANT LOAD: Load Frame 1 immediately
  useEffect(() => {
    const frame1 = new Image();
    frame1.src = '/frames/frame_0001.jpg';
    frame1.onload = () => {
      imagesRef.current[0] = frame1;
      setFirstFrameLoaded(true);
      
      // Draw first frame immediately
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) drawImageToCanvas(ctx, canvas, frame1);
      }
    };

    // 2. BACKGROUND STREAM: Load the remaining 79 frames progressively
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, '0');
      img.src = `/frames/frame_${frameNumber}.jpg`;
      img.onload = () => {
        imagesRef.current[i - 1] = img;
      };
    }
  }, []);

  // Canvas drawing helper function
  const drawImageToCanvas = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // 3. Scroll Listener for smooth frame scrubbing
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const firstImg = imagesRef.current[0];
      if (firstImg) drawImageToCanvas(ctx, canvas, firstImg);
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollYProgress.get() * TOTAL_FRAMES)
      );

      // Grab current frame, or fallback to nearest loaded frame
      let imgToDraw = imagesRef.current[frameIndex];
      if (!imgToDraw) {
        // Fallback to nearest previous loaded frame so canvas never goes blank
        for (let j = frameIndex; j >= 0; j--) {
          if (imagesRef.current[j]) {
            imgToDraw = imagesRef.current[j];
            break;
          }
        }
      }

      if (imgToDraw && imgToDraw.complete) {
        drawImageToCanvas(ctx, canvas, imgToDraw);
      }
    };

    const unsubscribe = scrollYProgress.on("change", render);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollYProgress]);

  // Text Animations mapped to scroll percentage
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [30, 0, -30]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.85, 1], [30, 0, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-zinc-950" style={{ height: '350vh' }}>
      
      {/* LOCKED VIEWPORT CONTAINER */}
      <div 
        className="w-full overflow-hidden flex items-center justify-center bg-zinc-950"
        style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 10 }}
      >
        
        {/* Subtle background pulse while initial frame mounts */}
        {!firstFrameLoaded && (
          <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center text-blue-500 font-mono text-xs tracking-widest animate-pulse">
            LOADING EXPERIENCE...
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