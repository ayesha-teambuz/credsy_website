'use client';

import { CheckCircle2, Shield, Clock, IndianRupee, Percent } from "lucide-react";

const BENEFITS = [
  { icon: Clock, text: "Approval in 2 Minutes" },
  { icon: Shield, text: "100% Secure & Private" },
  { icon: IndianRupee, text: "Disbursal in 24 Hours" },
  { icon: Percent, text: "Low Interest Rates" },
  { icon: CheckCircle2, text: "No Hidden Fees" },
  // Duplicate for seamless loop
  { icon: Clock, text: "Approval in 2 Minutes" },
  { icon: Shield, text: "100% Secure & Private" },
  { icon: IndianRupee, text: "Disbursal in 24 Hours" },
  { icon: Percent, text: "Low Interest Rates" },
  { icon: CheckCircle2, text: "No Hidden Fees" },
];

export default function Ticker() {
  return (
    <div className="w-full bg-[#0a0f1d] border-t border-white/5 py-6 overflow-hidden relative">
       {/* Gradient Masks */}
       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0f1d] to-transparent z-10 pointer-events-none"></div>
       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0f1d] to-transparent z-10 pointer-events-none"></div>

       <div className="flex w-max animate-scroll">
         {/* Triple the items to ensure smooth infinite scroll on wide screens */}
         {[...BENEFITS, ...BENEFITS, ...BENEFITS].map((item, idx) => (
           <div key={idx} className="flex items-center gap-3 px-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <item.icon className="text-credsy-gold" size={20} />
              <span className="text-slate-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap">{item.text}</span>
           </div>
         ))}
       </div>

       <style jsx>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
            animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
       `}</style>
    </div>
  );
}
