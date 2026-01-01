'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApply = () => {
    openModal();
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className={`
           pointer-events-auto
           flex items-center justify-between
           transition-all duration-500 ease-out
           ${scrolled ? 'w-[90%] md:w-[70%] lg:w-[60%] py-2' : 'w-[95%] md:w-[85%] py-3'}
           bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-900/5
           rounded-full px-6
        `}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                 <Image 
                   src="/logo.webp" 
                   alt="Credsy Finance Logo" 
                   fill
                   className="object-contain drop-shadow-sm"
                 />
              </div>
              <span className="font-serif text-xl font-bold text-credsy-navy tracking-tight">
                Credsy<span className="text-credsy-gold">.</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {['Products', 'Calculator', 'About Us'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().split(' ')[0]}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-credsy-navy hover:bg-slate-100/50 transition-all"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
               <Button 
                size="sm" 
                onClick={openModal} 
                className="rounded-full px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
               >
                 Apply Now
               </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 -mr-2 text-slate-600 hover:text-credsy-navy rounded-full hover:bg-slate-100/50 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden md:hidden"
          >
            <div className="px-6 py-6 space-y-2">
               {['Products', 'Calculator', 'About Us'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().split(' ')[0]}`}
                  className="block px-4 py-3 rounded-xl text-slate-600 hover:text-credsy-navy hover:bg-slate-50 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Button className="w-full rounded-xl py-6 text-lg shadow-lg" onClick={handleApply}>
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
