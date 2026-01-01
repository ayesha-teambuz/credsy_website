'use client';

import { Building2, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

const trustItems = [
  {
    id: 1,
    icon: Building2,
    label: 'RBI-Registered Banks',
  },
  {
    id: 2,
    icon: CheckCircle2,
    label: 'No Consultancy Fees',
  },
  {
    id: 3,
    icon: Clock,
    label: 'Fast Disbursement',
  },
  {
    id: 4,
    icon: ShieldCheck,
    label: 'Secure & Confidential',
  },
];

export default function TrustStrip() {
  return (
    <div className="w-full bg-credsy-navy border-t border-white/5 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-credsy-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-credsy-gold" />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
