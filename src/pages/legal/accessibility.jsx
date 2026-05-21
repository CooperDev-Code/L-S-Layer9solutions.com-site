import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Vulnerable Customer & Accessibility Policy — Layer 9 Solutions</title>
        <meta name="description" content="Vulnerable Customer & Accessibility Policy for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/accessibility" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // ACCESSIBILITY</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Vulnerable Customer & Accessibility Policy
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <h2 className="text-xl font-bold">1. Supporting Vulnerable Customers</h2>
        <p>
          We are committed to fair access for all. If you identify as vulnerable (e.g. visual impairment, hearing loss, cognitive difficulties, low income), we offer:
        </p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Alternate formats:</strong> Large-print or Braille copies of your contract and invoices, upon request.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Communication preferences:</strong> Priority email or telephone support; BSL interpreter bookings with 48 hours’ notice.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Extra ID checks:</strong> Simplified identity verification where legally permissible (e.g. customer-submitted photos of documents).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Payment flexibility:</strong> Guidance on prepayment or top-up reminders via SMS or email.</li>
        </ul>

        <h2 className="text-xl font-bold">2. How to Access Support</h2>
        <p>
          Email{" "}
          <a href="mailto:accessibility@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
            accessibility@layer9solutions.com
          </a>{" "}
          or call{" "}
          <a href="tel:+442045205020" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
            +44 20 4520 5020
          </a>.
          <br />
          We will respond within 2 business days and agree a support plan with you.
        </p>

        <p className="text-sm text-gray-500 mt-12">
          © 2025 Layer 9 Solutions Ltd. All rights reserved.
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
