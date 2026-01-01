'use client';

import { Quote } from 'lucide-react';

export default function FoundersNote() {
  return (
    <section className="py-24 bg-credsy-beige overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block">
            <Quote className="w-12 h-12 text-credsy-gold/20 absolute -top-6 -left-8" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-credsy-navy leading-tight mb-8 relative z-10">
            "Credsy Finance was built with a simple thought—clients are not numbers, they are family."
            </h2>
             <Quote className="w-12 h-12 text-credsy-gold/20 absolute -bottom-4 -right-8 rotate-180" />
        </div>
        
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-medium">
          It’s never just about a loan, it's about dreams. We guide you broadly, patiently, and with your best interest at heart. We believe in building relationships that last beyond the transaction.
        </p>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-credsy-gold rounded-full mb-6"></div>
          <div className="font-serif italic text-3xl text-credsy-navy">
            Ayesha
          </div>
          <div className="text-sm font-bold text-credsy-gold uppercase tracking-widest mt-2">
            Co-Founder
          </div>
        </div>
      </div>
    </section>
  );
}
