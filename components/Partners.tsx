'use client';

import Image from 'next/image';

const partners = [
  { name: 'HDFC Bank', logo: '/partner_logos/hdfc.webp' },
  { name: 'Bajaj Finserv', logo: '/partner_logos/bajaj.webp' },
  { name: 'Tata Capital', logo: '/partner_logos/tata.webp' },
  { name: 'Aditya Birla', logo: '/partner_logos/aditya-birla.webp' },
  { name: 'IndusInd Bank', logo: '/partner_logos/indusind.webp' },
  { name: 'IDFC First', logo: '/partner_logos/idfc.webp' },
  { name: 'Kotak Mahindra', logo: '/partner_logos/kotak.webp' },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Trusted By Leading Institutions</p>
          <h2 className="font-serif text-3xl font-bold text-credsy-navy">Our Lending Partners</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group h-24 relative border border-slate-200 rounded-xl bg-white hover:shadow-xl hover:border-credsy-gold/30 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
           <div className="col-span-2 md:col-span-4 flex flex-col items-center mt-8 space-y-2">
            <span className="text-slate-400 italic font-medium">And Many More...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
