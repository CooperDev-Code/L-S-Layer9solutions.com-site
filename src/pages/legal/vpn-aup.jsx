import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Acceptable Use Policy – VPN Service — Layer 9 Solutions</title>
        <meta name="description" content="Acceptable Use Policy – VPN Service for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/vpn-aup" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // VPN_AUP</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Acceptable Use Policy – VPN Service
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          This Acceptable Use Policy (AUP) outlines what is and isn’t allowed while using our VPN services. Use of Layer 9 Solutions implies acceptance of this policy.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. You Must Not:</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Break any laws (local or international)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Share copyrighted material without rights</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Distribute malware, viruses, or engage in phishing</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Use the service for harassment, abuse, stalking, or hate speech</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Launch DDoS attacks or scan/hack other systems</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Operate exit nodes or open proxies (e.g., Tor exit)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Run spam or mass mail operations</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Use the service for crypto mining</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. Fair Use</h2>
        <p>
          Excessive bandwidth, connection abuse, or running automation that degrades network performance is prohibited. We reserve the right to throttle or suspend accounts violating fair usage standards.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Enforcement</h2>
        <p>
          Accounts violating this AUP may be suspended or terminated without refund. In serious cases, access logs (if any exist) may be reviewed, but our no-log design means that’s highly limited.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Updates</h2>
        <p>
          We may revise this policy periodically. Continued use constitutes acceptance of changes.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">Contact</h2>
        <p>
          Layer 9 Solutions t/a Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: abuse@layer9solutions.com
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
