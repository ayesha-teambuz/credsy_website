import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-500 hover:text-credsy-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
            <div className="bg-credsy-navy p-8 md:p-12 text-white">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-slate-300">Effective Date: {effectiveDate}</p>
            </div>

            <div className="p-8 md:p-12 prose prose-slate max-w-none">
              <p className="lead text-lg text-slate-600 mb-8 italic">
                Credsy Finance (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.credsyfinance.com" className="text-credsy-gold hover:underline">www.credsyfinance.com</a> or use our services.
              </p>

              <hr className="my-10 border-slate-100" />

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">1. Information We Collect</h2>
                <p className="text-slate-600 mb-4">We may collect the following information when you visit our website or apply for our services:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-credsy-navy mb-3">a) Personal Information</h3>
                    <ul className="text-slate-600 space-y-2 list-disc pl-5">
                      <li>Full Name</li>
                      <li>Mobile Number</li>
                      <li>Email Address</li>
                      <li>PAN Card details</li>
                      <li>Aadhaar details (if required)</li>
                      <li>Income & employment details</li>
                      <li>Bank-related information</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-credsy-navy mb-3">b) Non-Personal Information</h3>
                    <ul className="text-slate-600 space-y-2 list-disc pl-5">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Website usage data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-600 mb-4">We use your information to:</p>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Process loan and financial service applications</li>
                  <li>Connect you with banks and NBFC partners</li>
                  <li>Verify identity and eligibility</li>
                  <li>Improve our website and services</li>
                  <li>Communicate updates, offers, and important information</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">3. Sharing of Information</h2>
                <p className="text-slate-600 mb-4 font-bold">We do not sell your personal data.</p>
                <p className="text-slate-600 mb-4">Your information may be shared only with:</p>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Banks & NBFCs for loan processing</li>
                  <li>Credit bureaus (as required)</li>
                  <li>Government or regulatory authorities</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500 italic">All partners are required to keep your information confidential.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">4. Data Security</h2>
                <p className="text-slate-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, misuse, or disclosure.
                  <br /><br />
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">5. Cookies Policy</h2>
                <p className="text-slate-600 mb-4">Our website may use cookies to:</p>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Enhance user experience</li>
                  <li>Analyze website traffic</li>
                  <li>Improve functionality</li>
                </ul>
                <p className="mt-4 text-slate-600">You can choose to disable cookies through your browser settings.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">6. Third-Party Links</h2>
                <p className="text-slate-600">
                  Our website may contain links to third-party websites (banks, NBFCs). We are not responsible for the privacy practices of those websites.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">7. Your Rights</h2>
                <p className="text-slate-600 mb-4">You have the right to:</p>
                <ul className="text-slate-600 space-y-2 list-disc pl-5">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4 text-slate-600">To exercise your rights, contact us at the details below.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">8. Updates to This Policy</h2>
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
                </p>
              </section>

              <section className="bg-credsy-gold/5 p-8 rounded-2xl border border-credsy-gold/10">
                <h2 className="text-2xl font-serif font-bold text-credsy-navy mb-4">9. Contact Us</h2>
                <p className="text-slate-600 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="flex items-center gap-2 text-credsy-navy font-bold">
                  <span className="text-xl">📧</span>
                  <a href="mailto:support@credsyfinance.com" className="hover:text-credsy-gold transition-colors">
                    support@credsyfinance.com
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
