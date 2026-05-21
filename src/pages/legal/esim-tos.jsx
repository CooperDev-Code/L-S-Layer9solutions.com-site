import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>eSIM Terms of Service — Layer 9 Solutions</title>
        <meta name="description" content="eSIM Terms of Service for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/esim-tos" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // ESIM_TOS</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>eSIM Terms of Service
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          Layer 9 Solutions Ltd (“Layer 9 Solutions”, “we”, “us”, “our”) supplies a
          prepaid, contract-free data-only eSIM service (“Service”). By purchasing or using the Service you agree
          to be bound by this TOS and our{" "}
          <Link href="/legal/esim-tou" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
            Terms of Use & Acceptable-Use Policy (TOU)
          </Link>.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">1. Service description</h2>
          <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Prepaid travel eSIM bundles with fixed data and validity (e.g. 5 GB for 30 days).</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Data-only: no voice, SMS or call features.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Works on 4G/LTE partner networks in supported countries.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Requires a network-unlocked, eSIM-capable device.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Ordering & activation</h2>
          <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Payment in full is required before we issue the QR code or eSIM profile.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Service is deemed delivered once the QR code or profile is shown or emailed.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">No cooling-off: as per Reg 28(1)(b) Consumer Contracts Regs 2013, cancellation rights end upon delivery.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Charges & payment</h2>
          <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Prices are in GBP and inclusive of UK duties. We are not VAT-registered.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">No overage or extra charges — data stops when your bundle is used up.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Support</h2>
          <p>
            Email 24×7 at{" "}
            <a href="mailto:support@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
              support@layer9solutions.com
            </a>{" "}
            (target response under 24 hours).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Acceptable Use</h2>
          <p>
            You must comply with our TOU. Abuse, spam, illegal activity, public Wi-Fi sharing, or resale is
            strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Traffic-Management & Data Cap</h2>
          <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>6.1</strong> We treat lawful traffic equally — no throttling by app or protocol.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>6.2</strong> Speeds up to LTE max (typical UK median 26 Mbps). No guaranteed minimum.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>6.3</strong> All data stops when your bundle is used up.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>6.4</strong> Carriers may briefly apply fair-use congestion control.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>6.5</strong> Emergency services (999/112) and our support remain accessible at all times.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Network Availability & Liability</h2>
          <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Service is provided “as-is” and may vary by location or network.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Our liability is limited to the price you paid for the bundle. We exclude indirect losses where allowed by law.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Suspension & Termination</h2>
          <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">We may suspend or terminate access for regulatory issues or serious TOU violations.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Unused data is lost if terminated. No refunds unless legally required.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Personal Data & Privacy</h2>
          <p>
            We process your data under UK GDPR and our{" "}
            <Link href="/legal/privacy" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
              Privacy Policy
            </Link>. Roaming partners may process data abroad under appropriate safeguards.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Governing Law & Dispute Resolution</h2>
          <p>
            This TOS is governed by English law. You agree to the exclusive jurisdiction of the courts of
            England & Wales. Escalated disputes can go to our ADR provider (see Complaints Code).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Changes</h2>
          <p>
            We may update this TOS for legal, regulatory or service reasons. The latest version is always available
            at{" "}
            <Link href="/legal/esim-tos" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
              /legal/esim-tos
            </Link>.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          © 2025 Layer 9 Solutions Ltd. All rights reserved.
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
