import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>eSIM Terms of Use & Acceptable Use Policy — Layer 9 Solutions</title>
        <meta name="description" content="eSIM Terms of Use & Acceptable Use Policy for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/esim-tou" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // ESIM_TOU</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>eSIM Terms of Use & Acceptable Use Policy
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <div>
          <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
          <p>
            The Service is provided solely for lawful, personal data communication.
            Commercial resale, public-hotspot operation, server or gateway operation are prohibited.
            No voice or SMS functions are available.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Prohibited Activities</h2>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Resell, share or commercially exploit the Service.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Transmit, distribute or store unlawful, harmful, threatening, abusive or hateful content.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Send unsolicited messages, spam, phishing or malware.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Commit fraud, identity theft, deception or scams.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Abuse networks (DDoS attacks, port scanning, packet sniffing).</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Infringe intellectual-property rights.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Support terrorism or violent extremism.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Use unauthorised or modified equipment.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Attempt unauthorised access to networks, systems or data.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Exceed the usage allowances described below.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Fair-Usage & Traffic-Management Measures</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-[rgba(31,126,244,0.1)]">
                <tr>
                  <th className="border px-4 py-2 text-left">Measure</th>
                  <th className="border px-4 py-2 text-left">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Data allowance</td>
                  <td className="border px-4 py-2">Bundles are ordered with a specified data allowance; traffic stops at allowance.</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Speeds</td>
                  <td className="border px-4 py-2">Up to the visited network’s LTE maximum; no throttling by application or protocol.</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Congestion</td>
                  <td className="border px-4 py-2">Temporary, non-discriminatory rate control during extreme congestion.</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Tethering</td>
                  <td className="border px-4 py-2">Permitted for personal devices within the allowance; public hotspots prohibited.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Enforcement</h2>
          <p>
            We may block traffic, throttle speeds, suspend or terminate the Service (without refund)
            for serious or repeated violations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Reporting Abuse</h2>
          <p>
            Please report abuse or violations to <a href="mailto:abuse@layer9solutions.com" className="text-[#1F7EF4]">abuse@layer9solutions.com</a>,
            including full details (IP, timestamps, and logs where applicable).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">6. Changes & Governing Law</h2>
          <p>
            We may revise this policy at any time. Continued use signifies acceptance of the latest version.
            This policy is governed by English law.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          © 2025 Layer 9 Solutions Ltd. All rights reserved.
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
