import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Service Level Agreement – SMTP Service — Layer 9 Solutions</title>
        <meta name="description" content="Service Level Agreement – SMTP Service for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/smtp-sla" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // SMTP_SLA</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Service Level Agreement – SMTP Service
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          This Service Level Agreement ("SLA") is an integral part of the Layer 9 Solutions Terms of Use ("ToU"). It outlines the service availability commitments and the process for obtaining service credits in the event of service disruptions.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. Definitions</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Availability:</strong> The percentage of successful Requests processed by Layer 9 Solutions SMTP Service within each 5-minute interval.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Error:</strong> A Request that fails due to an internal service error.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Force Majeure Event:</strong> Events beyond Layer 9 Solutions's control including natural disasters, war, strikes, or government actions.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Monthly Uptime Percentage:</strong> The average Availability across all 5-minute intervals in a month.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Request:</strong> An API call to any endpoint hosted on Layer 9 Solutions SMTP Service.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Services:</strong> The transactional email services provided by Layer 9 Solutions SMTP Service.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. Service Commitment</h2>
        <p>
          Layer 9 Solutions commits to a Monthly Uptime Percentage of at least <strong>99.5%</strong>.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Service Credits</h2>
        <p>If uptime falls below 99.5%, you may be eligible for service credits:</p>
        <table className="table-auto border-collapse border border-gray-300 text-left text-sm w-full">
          <thead>
            <tr className="bg-[rgba(31,126,244,0.1)]">
              <th className="border px-4 py-2">Monthly Uptime</th>
              <th className="border px-4 py-2">Service Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">99.0% – &lt;99.5%</td>
              <td className="border px-4 py-2">10% of monthly fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">95.0% – &lt;99.0%</td>
              <td className="border px-4 py-2">25% of monthly fee</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">&lt;95.0%</td>
              <td className="border px-4 py-2">50% of monthly fee</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mt-4">3.1 Requesting Service Credits:</h3>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Submit a claim within 30 days after the affected month.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Include downtime details (dates, times, impact).</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">3.2 Application of Credits:</h3>
        <p>
          Approved credits apply to future billing. They are the exclusive remedy for SLA breaches and cannot be refunded as cash.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Exclusions</h2>
        <p>This SLA does not apply to downtime caused by:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Scheduled Maintenance (with 24+ hours' notice)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Force Majeure Events</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Customer-side issues (e.g., local equipment or software)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Third-party services or infrastructure not controlled by Layer 9 Solutions</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Changes to the SLA</h2>
        <p>
          Layer 9 Solutions reserves the right to modify this SLA at any time. Changes will be announced on our website or through direct notification. Continued use implies acceptance.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Contact</h2>
        <p>
          Layer 9 Solutions t/a Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: legal@layer9solutions.com, support@layer9solutions.com
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
