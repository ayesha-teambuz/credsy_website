'use client';

import { useState, useMemo } from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Slider } from './ui/Slider';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

export default function EMICalculator() {
  const { openModal } = useModal();
  const [amount, setAmount] = useState(1000000); // 10 Lakhs
  const [rate, setRate] = useState(10.5); // 10.5%
  const [tenure, setTenure] = useState(5); // 5 Years

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emiValue);
  }, [amount, rate, tenure]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatAmount = (value: number) => {
    if (value >= 10000000) return `₹ ${(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹ ${(value / 100000).toFixed(2)} Lakh`;
    return `₹ ${value}`;
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 rounded-l-[5rem] -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-credsy-navy mb-4">
            Know Your EMI Before You Apply
          </h2>
          <p className="text-slate-600">
            Plan your finances with accuracy. Use our smart calculator to find the loan term that suits your pocket.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Calculator Inputs */}
          <div className="lg:col-span-7">
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
              <div className="space-y-8">
                {/* Loan Amount */}
                <Slider
                  label="Loan Amount"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  valueDisplay={formatAmount(amount)}
                />

                {/* Interest Rate */}
                <Slider
                  label="Interest Rate (% p.a.)"
                  min={8}
                  max={24}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  valueDisplay={`${rate}%`}
                />

                {/* Tenure */}
                <Slider
                  label="Tenure (Years)"
                  min={1}
                  max={20}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  valueDisplay={`${tenure} Years`}
                />
              </div>
            </Card>
          </div>

          {/* Calculator Output */}
          <div className="lg:col-span-5 relative">
            <Card className="relative overflow-hidden text-center p-8 md:p-12 border-white/10 bg-credsy-navy text-white shadow-2xl">
               {/* Background Glow */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-credsy-gold/20 rounded-full blur-3xl"></div>
               
               <div className="relative z-10">
                  <p className="text-slate-400 font-medium mb-2">Your Monthly EMI</p>
                  
                  <motion.div
                    key={emi}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-serif text-4xl md:text-5xl font-bold text-white mb-8"
                  >
                    {formatCurrency(emi)}
                  </motion.div>

                  <div className="space-y-4 mb-8 text-sm text-slate-400">
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Principal Amount</span>
                        <span className="text-white">{formatCurrency(amount)}</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span>Total Interest</span>
                        <span className="text-white">{formatCurrency((emi * tenure * 12) - amount)}</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Total Payable</span>
                        <span className="text-credsy-gold font-bold">{formatCurrency(emi * tenure * 12)}</span>
                     </div>
                  </div>

                  <Button size="lg" className="w-full group" onClick={openModal}>
                    Apply for {formatAmount(amount)}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
