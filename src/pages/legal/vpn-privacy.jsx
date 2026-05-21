import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Privacy Policy – VPN Service — Layer 9 Solutions</title>
        <meta name="description" content="Privacy Policy – VPN Service for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/vpn-privacy" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // VPN_PRIVACY</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Privacy Policy – VPN Service
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          Layer 9 Solutions is committed to protecting your privacy. We operate under a strict no-logs policy, meaning we do not track or store your online activity.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. What We Do Not Collect</h2>
        <p>We do not collect or store the following:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Browsing history</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">DNS queries</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Traffic destination or content</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Connection timestamps</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Session duration</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Source IP addresses</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. What We Do Collect (Minimal & Necessary)</h2>
        <p>To provide and maintain our services, we may collect:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Account information:</strong> Email address, plan type, and billing info (never payment details – handled securely via third-party gateways).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Server load data:</strong> Used in aggregate to optimize performance and prevent abuse (not linked to specific users).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Crash reports / diagnostics:</strong> Optional and anonymized.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Payment Information</h2>
        <p>
          We use trusted third-party payment processors (e.g., Stripe, PayPal). We do not store full credit card or banking details.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Cookies</h2>
        <p>
          Our website uses minimal cookies for:
        </p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Session login</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Language preference</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Anonymous analytics (if enabled)</li>
        </ul>
        <p>You can block cookies in your browser settings.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Data Sharing</h2>
        <p>We never sell or rent your data. We only share information when:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Required by law through a valid UK court order (and only if we have anything to provide — which we typically do not).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Necessary to process payments or provide service.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Security</h2>
        <p>
          We employ strong encryption, secure access controls, and routine audits to keep data (like account info) safe.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">7. Your Rights</h2>
        <p>You may:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Request a copy of your account data</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Request deletion of your account</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Update your email or subscription</li>
        </ul>
        <p>Send requests to: <strong>privacy@layer9solutions.com</strong></p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">8. Changes</h2>
        <p>
          We may update this policy. Material changes will be announced on our site or via email.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">9. Contact</h2>
        <p>
          Layer 9 Solutions t/a Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: privacy@layer9solutions.com
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
