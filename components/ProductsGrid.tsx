'use client';

import { 
  User, 
  Home, 
  Briefcase, 
  Car, 
  Wallet, 
  Shield 
} from 'lucide-react';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

const products = [
  {
    id: 1,
    title: 'Personal Loans',
    description: 'Instant funds for your personal needs.',
    icon: User,
    color: 'bg-blue-500',
    hoverColor: 'group-hover:text-blue-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2'
  },
  {
    id: 2,
    title: 'Home Loans',
    description: 'Build your dream home with low rates.',
    icon: Home,
    color: 'bg-credsy-gold',
    hoverColor: 'group-hover:text-credsy-gold',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1'
  },
  {
    id: 3,
    title: 'Business Loans',
    description: 'Expand your business horizons.',
    icon: Briefcase,
    color: 'bg-credsy-navy',
    hoverColor: 'group-hover:text-credsy-navy',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    id: 4,
    title: 'Car Loans',
    description: 'Drive your dream car today.',
    icon: Car,
    color: 'bg-green-500',
    hoverColor: 'group-hover:text-green-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    id: 5,
    title: 'Overdrafts',
    description: 'Credit line when you need it.',
    icon: Wallet,
    color: 'bg-purple-500',
    hoverColor: 'group-hover:text-purple-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  },
  {
    id: 6,
    title: 'Insurance',
    description: 'Protect yourself with smart coverage.',
    icon: Shield,
    color: 'bg-red-500',
    hoverColor: 'group-hover:text-red-500',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1'
  }
];

export default function ProductsGrid() {
  const { openModal } = useModal();
  return (
    <section id="products" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-credsy-gold/10 text-credsy-gold-dark font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-credsy-navy mb-4">
            Financial Products Tailored for You
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From personal needs to business expansion, we have a diverse range of lending solutions designed to meet your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={`${product.colSpan} ${product.rowSpan} group relative`}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Card 
                className="h-full w-full relative overflow-hidden flex flex-col p-6 cursor-pointer border-slate-100 hover:border-credsy-gold/40 hover:shadow-2xl hover:shadow-credsy-gold/5 bg-white transition-all duration-300"
                onClick={openModal}
              >
                {/* Expanding Color Background */}
                <div className={`absolute top-6 left-6 w-10 h-10 rounded-lg ${product.color} z-0 transition-transform duration-1000 ease-in-out group-hover:scale-[45]`} />

                {/* Header: Icon & Title */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                   {/* Icon Container - Inverts text/bg on hover */}
                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 z-10 relative text-white group-hover:bg-white ${product.hoverColor}`}>
                      <product.icon size={20} />
                   </div>
                   <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-white/30 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                   </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                   <h3 className="font-serif text-xl font-bold text-credsy-navy mb-2 group-hover:text-white transition-colors">
                      {product.title}
                   </h3>
                   <p className="text-sm text-slate-500 leading-snug line-clamp-2 mb-2 group-hover:text-white/90 transition-colors">
                      {product.description}
                   </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
