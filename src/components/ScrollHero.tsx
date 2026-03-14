"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

const FRAME_COUNT = 196;

const ScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to frame index (0 to FRAME_COUNT-1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  // Text overlay opacities and transforms - mapped exactly like the reference
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.4], [1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.8, 0.9, 1], [50, 0, 0]);

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const num = i.toString().padStart(3, '0');
      img.src = `/transition/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update canvas frame based on scroll
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const index = Math.min(Math.floor(latest), FRAME_COUNT - 1);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      
      if (images.length > 0 && canvas && ctx) {
        const img = images[index];
        if (img?.complete) {
          // Maintain canvas dimensions to match image
          if (canvas.width !== img.width) canvas.width = img.width;
          if (canvas.height !== img.height) canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
      }
    });

    // Initial render
    if (images.length > 0 && images[0]?.complete && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = images[0];
      if (ctx && img) {
        if (canvas.width !== img.width) canvas.width = img.width;
        if (canvas.height !== img.height) canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      }
    }
    
    return () => unsubscribe();
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: "400vh" }}>
      {/* Sticky Hero Container - adjusted for navbar height */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden bg-black">
        
        {/* Canvas for image sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Loading Indicator */}
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute bottom-10 right-10 text-white/50 text-sm font-mono z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Loading Sequence... {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Text Overlays - positioned absolutely within the sticky container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-full h-full relative max-w-7xl mx-auto">
            
            {/* Overlay 1: Hero Intro */}
            <motion.div 
              style={{ opacity: text1Opacity, y: text1Y }} 
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 items-center text-center"
            >
              <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 drop-shadow-2xl">
                Total Eradication. <br />
                <span className="text-primary italic font-serif font-light">Zero Compromise.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg">
                Scroll to witness our revolutionary fumigation protocol in action. Pure eradication, amplified by science.
              </p>
              <motion.div 
                className="mt-10 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>196 frame sequence</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Overlay 2: Middle Phase - Micro-precision */}
            <motion.div 
              style={{ opacity: text2Opacity, y: text2Y }} 
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 items-start text-left"
            >
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm bg-black/20">
                  Phase 2: Deployment
                </span>
                <h2 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
                  Micro-precision <br/>
                  <span className="text-primary/90">Targeting.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-light max-w-md drop-shadow-lg leading-relaxed">
                  Our advanced formulations permeate every crevice, neutralizing threats at the source without harming your environment.
                </p>
              </div>
            </motion.div>

            {/* Overlay 3: CTA Phase */}
            <motion.div 
              style={{ opacity: text3Opacity, y: text3Y }} 
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 items-center text-center"
            >
              <div className="max-w-3xl flex flex-col items-center backdrop-blur-md bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 pointer-events-auto shadow-2xl">
                <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                  Secure Your Environment.
                </h2>
                <Button 
                  size="lg" 
                  className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl font-bold rounded-full bg-white hover:bg-zinc-200 text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95"
                  
                >
                  <Link href="/booking" className="flex items-center">
                    Initiate Protocol <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHero;