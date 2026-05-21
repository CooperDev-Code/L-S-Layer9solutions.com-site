import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Security Statement — Layer 9 Solutions</title>
        <meta name="description" content="Security Statement for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/security" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // SECURITY</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Security Statement
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <h2 className="text-xl font-bold">1. Overview</h2>
        <p>
          We take the security of our networks, systems, and your data seriously. We comply with the UK Telecommunications Security Code of Practice 2022 and maintain ISO 27001 certification for our core infrastructure.
        </p>

        <h2 className="text-xl font-bold">2. Technical & Organisational Controls</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Access control:</strong> Role-based access and multi-factor authentication for all administrator accounts.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Encryption:</strong> TLS 1.2+ for data in transit; AES-256 encryption at rest for sensitive records.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Patch management:</strong> Automated vulnerability scanning and monthly OS/app patch cycles.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Network security:</strong> Stateful firewalls, IDS, and DDoS mitigation at all ingress points.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Change management:</strong> All network and production-system changes are reviewed and approved by our formal change-control board.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Incident response:</strong> We maintain a documented IR plan with 24×7 monitoring, rapid containment, and root-cause analysis.</li>
        </ul>

        <h2 className="text-xl font-bold">3. Internal Reviews</h2>
        <p>
          We conduct regular internal security reviews and penetration tests using qualified in-house or contracted specialists. Any findings are tracked and remediated through our change-management process.
        </p>

        <h2 className="text-xl font-bold">4. Contact</h2>
        <p>
          For security enquiries or to report a vulnerability, please contact:
          <br />
          <a href="mailto:security@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
            security@layer9solutions.com
          </a>
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
