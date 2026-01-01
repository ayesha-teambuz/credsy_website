'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { useModal } from '@/context/ModalContext';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const { openModal } = useModal();
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse position for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoother springs for parallax
  const mouseX = useSpring(x, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 20 });

  // 3D Card Transforms - Standard ID-1 Landscape
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Glare effect
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Floating Elements Parallax (Independent from Card Tilt)
  const floatX = useTransform(mouseX, [-0.5, 0.5], ["-40px", "40px"]);
  const floatY = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);

  // Card Parallax (Move the card slightly opposite to mouse)
  const cardX = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const cardY = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - left) / width - 0.5;
    const yPct = (e.clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] pt-44 pb-20 overflow-hidden bg-[#0a0f1d] flex items-center"
    >
      {/* Cinematic Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Main Spotlight */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
        {/* Bottom Left Secondary Glow */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-credsy-gold/5 rounded-full blur-[100px] mix-blend-screen" />
        {/* Subtle Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid lg:grid-cols-2 gap-12 items-center relative">
        
        {/* Typography Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-20"
        >
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-credsy-gold text-sm font-medium shadow-glow-gold"
          >
            <ShieldCheck size={16} />
            <span className="tracking-wide">Trusted by 1,000+ Indians</span>
          </motion.div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Banks Work <br />
            <span className="text-white/40">For Themselves.</span> <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-credsy-gold via-yellow-200 to-credsy-gold animate-shimmer bg-[length:200%_auto]">
                We Work For You.
              </span>
              <div className="absolute inset-x-0 bottom-1 h-3 bg-credsy-gold/20 blur-lg opacity-60 z-0"></div>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed font-light">
            Stop hunting for offers. We compare 40+ lenders to ensure better rates, faster approvals, and smarter choices—always in your best interest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
             {/* Primary CTA Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button 
                    size="lg" 
                    onClick={openModal}
                    className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full text-sm sm:text-base whitespace-nowrap shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)] border-t border-white/20 relative overflow-hidden group"
                >
                    <span className="relative z-10 flex items-center justify-center">
                        Check Eligibility
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-credsy-gold to-yellow-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md" />
                </Button>
            </motion.div>

            {/* Secondary CTA Button */}
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full border-white/10 text-white hover:bg-white/5 hover:border-white/20 backdrop-blur-sm transition-all whitespace-nowrap text-sm sm:text-base"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
            </Button>
          </div>
          
          {/* Footer Stats - Simplified to avoid redundancy */}
          <div className="flex items-center gap-8 pt-6 border-t border-white/5 opacity-80">
             <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle size={18} className="text-credsy-gold" />
                <span>RBI Registered</span>
             </div>
             <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle size={18} className="text-credsy-gold" />
                <span>100% Paperless</span>
             </div>
          </div>
        </motion.div>

        {/* 3D Visual Content - Desktop Only */}
        <div className="relative h-[600px] hidden lg:flex items-center justify-center lg:translate-x-12 perspective-1000">
             
             {/* Independent Floating Badge 1 */}
             <motion.div 
                 style={{ x: useTransform(floatX, v => Number(v) * -1.2), y: useTransform(floatY, v => Number(v) * -1.2) }}
                 className="absolute top-20 right-0 lg:right-10 z-30 pointer-events-none"
             >
                  <div className="glass-dark p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 backdrop-blur-xl">
                      <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                          <Zap size={24} fill="currentColor" />
                      </div>
                      <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Approved</p>
                          <p className="text-2xl font-bold text-white">₹ 15L+</p>
                      </div>
                  </div>
             </motion.div>

             {/* Independent Floating Badge 2 */}
             <motion.div 
                 style={{ x: useTransform(floatX, v => Number(v) * 0.8), y: useTransform(floatY, v => Number(v) * 0.8) }}
                 className="absolute bottom-20 left-0 z-30 pointer-events-none"
             >
                  <div className="glass-dark p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 backdrop-blur-xl">
                      <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
                          <Star size={24} fill="currentColor" />
                      </div>
                      <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Low Interest</p>
                          <p className="text-2xl font-bold text-white">8.5%</p>
                      </div>
                  </div>
             </motion.div>

             {/* The Card Container */}
             <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ 
                    x: cardX, 
                    y: cardY,
                    perspective: 1200 
                }}
                className="relative z-20"
             >
                <motion.div 
                    className="relative w-[340px] h-[215px] sm:w-[500px] sm:h-[315px] rounded-[24px] preserve-3d"
                    style={{ 
                        rotateX, 
                        rotateY,
                        transformStyle: "preserve-3d" 
                    }}
                >
                   {/* Drop Shadow */}
                   <div className="absolute inset-0 bg-black/80 blur-[50px] translate-y-20 -z-10 rounded-full opacity-70"></div>
                   
                   {/* Metallic Border Shim */}
                   <div className="absolute -inset-[1px] rounded-[25px] bg-gradient-to-br from-yellow-300 via-yellow-600 to-yellow-900 opacity-100 -z-10"></div>

                   {/* Card Body - Opaque Matte */}
                   <div className="absolute inset-0 bg-[#0f1115] rounded-[24px] overflow-hidden border-[0px] border-white/5 shadow-2xl">
                      
                      {/* Matte Noise Texture */}
                      <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                      
                      {/* Deep Matte Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#020617] opacity-90"></div>
                      
                      {/* Gold Foil Accent (Top Right) */}
                      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>

                      {/* Content Layer */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                         
                         {/* Top Row */}
                         <div className="flex justify-between items-start">
                             <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                                    <Image
                                    src="/logo.webp"
                                    alt="Credsy"
                                    fill
                                    className="object-contain" 
                                    />
                                </div>
                                
                             </div>
                             {/* Contactless Symbol */}
                             <Zap className="text-yellow-500/80 rotate-12" size={28} />
                         </div>

                         {/* Middle - Chip & Number */}
                         <div className="flex items-center gap-6">
                            <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-[#fbbf24] to-[#b45309] shadow-inner border border-yellow-300/40 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                                {/* Chip Lines */}
                                <div className="w-full h-[1px] bg-yellow-900/30 absolute top-1/2"></div>
                                <div className="h-full w-[1px] bg-yellow-900/30 absolute left-1/2"></div>
                                <div className="w-8 h-6 border border-yellow-900/30 rounded-[2px]"></div>
                            </div>
                            <div className="font-mono text-xl sm:text-2xl tracking-[0.15em] text-yellow-50/90 drop-shadow-md pt-1">
                                **** **** **** 4291
                            </div>
                         </div>

                         {/* Bottom Row */}
                         <div className="flex justify-between items-end">
                            <div>
                               <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Card Holder</p>
                               <p className="font-medium tracking-wide text-sm sm:text-base text-yellow-50">PRIYA SHARMA</p>
                            </div>
                            <div className="text-right">
                               <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">Expires</p>
                               <p className="font-medium tracking-wide text-sm sm:text-base text-yellow-50">12/29</p>
                            </div>
                         </div>
                      </div>

                      {/* Realistic Glare Overlay */}
                      <motion.div 
                        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
                        style={{ 
                            background: useTransform(
                                [glareX, glareY],
                                ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.3) 0%, transparent 60%)`
                            ),
                            opacity: 0.6
                        }} 
                      />
                   </div>
                </motion.div>
             </motion.div>
        </div>
      </div>
    </section>
  );
}
