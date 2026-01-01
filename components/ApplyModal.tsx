'use client';

import { Fragment, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { X, Check, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { motion, AnimatePresence } from 'framer-motion';


export default function ApplyModal() {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Apply Modal' }),
      });

      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          closeModal();
          setStatus('idle');
          setFormData({ name: '', mobile: '', email: '' });
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-6 bg-credsy-navy text-white flex justify-between items-center">
              <div>
                <h3 className="font-serif text-2xl font-bold">Start Your Journey</h3>
                <p className="text-credsy-gold text-sm mt-1">Check your eligibility in minutes</p>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-credsy-navy mb-2">Request Received!</h4>
                  <p className="text-slate-600">We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    label="Full Name" 
                    placeholder="Enter your full name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input 
                    label="Mobile Number" 
                    type="tel" 
                    placeholder="Enter 10-digit mobile number" 
                    required 
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                  <Input 
                    label="Email Address" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <div className="pt-2">
                     <Button 
                        className="w-full justify-between group" 
                        disabled={status === 'loading'}
                     >
                        {status === 'loading' ? 'Sending...' : 'Check Eligibility'}
                        {status === 'loading' ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <div className="bg-white/20 p-1 rounded-full">
                             <Check size={16} />
                          </div>
                        )}
                     </Button>
                  </div>
                  
                  <p className="text-xs text-center text-slate-500 mt-4">
                    By clicking submit, you agree to our Terms & Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
