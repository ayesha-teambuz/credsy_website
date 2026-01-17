'use client';

import { useState } from 'react';
import { Instagram, Mail, MapPin, Phone, ArrowRight, Loader2, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', mobile: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Footer Quick Form' }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', mobile: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
       setStatus('error');
       setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-credsy-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                 <Image 
                   src="/logo.webp" 
                   alt="Credsy Finance Logo" 
                   fill
                   className="object-contain"
                 />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Credsy<span className="text-credsy-gold">.</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              We compare multiple lenders to ensure better rates, faster approvals, and smarter choices—always in your best interest.
            </p>
            {/* Social links removed as per request */}

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-credsy-gold">Services</h3>
            <ul className="space-y-3">
              {['Personal Loans', 'Home Loans', 'Business Loans', 'Car Loans', 'Insurance'].map((link) => (
                <li key={link}>
                  <Link href="#products" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-credsy-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-credsy-gold mt-1 shrink-0" />
                <span>Noida, Uttar Pradesh<br />India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-credsy-gold shrink-0" />
                <a href="mailto:Contact@credsyfinance.com" className="hover:text-white transition-colors">
                  Contact@credsyfinance.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-credsy-gold shrink-0" />
                <a href="tel:9217701439" className="hover:text-white transition-colors">
                  +91 92177 01439
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Form */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="font-serif text-lg font-bold mb-4">Request Call Back</h3>
            <form className="space-y-3" onSubmit={handleQuickSubmit}>
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                placeholder="Mobile Number"
                type="tel"
                className="bg-white/10 border-white/10 text-white placeholder:text-slate-400 focus:bg-white/20"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
              <Button 
                variant="primary" 
                size="sm" 
                className={`w-full flex items-center justify-between group ${status === 'success' ? '!bg-green-600' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Submit'}
                {status === 'loading' ? (
                   <Loader2 size={16} className="animate-spin" />
                ) : status === 'success' ? (
                   <Check size={16} />
                ) : (
                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Credsy Finance. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
