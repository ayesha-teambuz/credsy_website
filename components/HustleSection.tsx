'use client';

import { Zap, Landmark, Building2, Briefcase, Building } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { useModal } from '@/context/ModalContext';

export default function HustleSection() {
  const { openModal } = useModal();
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-credsy-navy text-sm font-medium">
              <Zap size={16} className="text-credsy-gold" />
              The Credsy Advantage
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-credsy-navy leading-tight">
              Why Run Bank to Bank? <br />
              <span className="text-slate-400">We Do The Hustle For You.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Banks sell products. We find the best one for you. Instead of going bank to bank hunting for better offers, we compare multiple lenders to get you the lowest rates, highest amounts, and fastest approvals.
            </p>
            
            <ul className="space-y-4">
              {[
                'We negotiate with banks on your behalf.',
                'Unbiased advice—we work for you, not the bank.',
                'One application, multiple lender options.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-credsy-gold/10 flex items-center justify-center text-credsy-gold shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" size="lg" onClick={openModal}>
              Start Your Journey
            </Button>
          </div>

          {/* Visual Content - Abstract Comparison Graphic */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative aspect-square max-w-md mx-auto">
               {/* Background Elements */}
               <div className="absolute inset-0 bg-slate-100 rounded-full scale-90"></div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-credsy-gold/10 rounded-full blur-2xl"></div>

               {/* Central "You" Card */}
               <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-20 flex flex-col items-center justify-center text-center shadow-2xl border-credsy-gold/20">
                  <div className="w-16 h-16 bg-credsy-navy rounded-full flex items-center justify-center text-white mb-3">
                    <span className="font-serif text-2xl">You</span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Best Offer Secured</p>
               </Card>

               {/* Orbiting Bank Cards */}
               {/* Orbiting Bank Cards */}
               {/* Orbiting Bank Cards */}
               <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '30s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10">
                    <div className="flex flex-col items-center gap-2 animate-spin-reverse" style={{ animationDuration: '30s' }}>
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
                           <Landmark size={32} className="text-credsy-navy" />
                        </div>
                        <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-credsy-navy shadow-sm backdrop-blur-sm whitespace-nowrap">Banks</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-10">
                     <div className="flex flex-col items-center gap-2 animate-spin-reverse" style={{ animationDuration: '30s' }}>
                         <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
                            <Building2 size={32} className="text-credsy-gold-dark" />
                         </div>
                         <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-credsy-navy shadow-sm backdrop-blur-sm whitespace-nowrap">NBFCs</span>
                     </div>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12">
                     <div className="flex flex-col items-center gap-2 animate-spin-reverse" style={{ animationDuration: '30s' }}>
                         <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
                            <Briefcase size={32} className="text-credsy-navy" />
                         </div>
                         <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-credsy-navy shadow-sm backdrop-blur-sm whitespace-nowrap">Corporate</span>
                     </div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12">
                     <div className="flex flex-col items-center gap-2 animate-spin-reverse" style={{ animationDuration: '30s' }}>
                         <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center">
                            <Building size={32} className="text-credsy-gold" />
                         </div>
                         <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-credsy-navy shadow-sm backdrop-blur-sm whitespace-nowrap">Private</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
