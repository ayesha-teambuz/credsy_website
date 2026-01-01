import Link from 'next/link';
import { ArrowLeft, ScrollText, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
  const lastUpdated = "September 2024";

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-4">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-credsy-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-500 font-medium mb-12 hover:text-credsy-navy transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Home
        </Link>
        
        <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-credsy-gold/10 text-credsy-gold">
               <ScrollText size={32} />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-credsy-navy">Terms of Service</h1>
              <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest font-medium">Last Updated: {lastUpdated}</p>
            </div>
          </div>

          <div className="space-y-12 text-slate-600 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">1</span>
                About Credsy Finance
              </h2>
              <p>
                Credsy Finance is a financial services facilitator. We help customers connect with banks and NBFCs for loan and insurance products. We are not a bank or NBFC and do not directly provide loans.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">2</span>
                Services We Offer
              </h2>
              <p>We assist with:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                {[
                  "Personal Loan", "Business Loan", "Home Loan", 
                  "Loan Against Property", "OD / CC facilities", "Insurance assistance"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="text-credsy-gold w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm italic">
                Final approval, interest rate, tenure, and disbursement are solely decided by the respective bank/NBFC.
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">3</span>
                No Guarantee of Approval
              </h2>
              <p>
                Loan approval is not guaranteed. Approval depends on various factors including:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Bank/NBFC policies</li>
                <li>Credit score</li>
                <li>Income & documents</li>
                <li>Eligibility criteria</li>
              </ul>
              <p className="font-medium text-credsy-navy">
                Credsy Finance does not influence final decisions.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">4</span>
                User Responsibilities
              </h2>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Provide true, correct, and complete information</li>
                <li>Submit genuine documents only</li>
                <li>Inform us of any changes in your financial details</li>
              </ul>
              <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm">
                <strong>Warning:</strong> Providing false information may lead to rejection or legal action by lenders.
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">5</span>
                Fees & Charges
              </h2>
              <ul className="list-disc pl-8 space-y-2">
                <li>Credsy Finance does not charge upfront fees unless clearly communicated in writing.</li>
                <li>Any processing fees, insurance premiums, or charges are levied directly by banks/NBFCs.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">6</span>
                Role Limitation
              </h2>
              <p>Credsy Finance acts only as an intermediary/facilitator. We are not responsible for:</p>
              <ul className="list-disc pl-8 space-y-2 text-sm">
                <li>Loan rejection</li>
                <li>Delay in disbursement</li>
                <li>Change in interest rates or terms</li>
                <li>Actions taken by banks/NBFCs</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">7</span>
                Data & Privacy
              </h2>
              <p>
                Your personal and financial information is shared only with banks/NBFCs for processing your request. We do not sell or misuse customer data.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">8</span>
                Cancellation
              </h2>
              <p>
                Customers may choose to stop the process at any time before disbursement. Any charges already paid to banks/NBFCs are non-refundable as per their policy.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">9</span>
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of Indian courts.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-credsy-navy flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">10</span>
                Updates to Terms
              </h2>
              <p>
                Credsy Finance reserves the right to update these Terms of Service at any time without prior notice.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm">
              If you have any questions regarding these terms, please contact us at <a href="mailto:support@credsyfinance.com" className="text-credsy-gold hover:underline">support@credsyfinance.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

