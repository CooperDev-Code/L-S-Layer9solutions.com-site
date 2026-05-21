import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Service Level Agreement – Shared Web Hosting — Layer 9 Solutions</title>
        <meta name="description" content="Service Level Agreement – Shared Web Hosting for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/shared-hosting-sla" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // SHARED_HOSTING_SLA</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Service Level Agreement – Shared Web Hosting
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          This Service Level Agreement (SLA) forms part of the Terms of Service (ToS) for Layer 9 Solutions shared web hosting services. This SLA outlines our uptime commitments, compensation policies, and the terms under which these apply.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. Uptime Guarantee</h2>
        <p>
          We guarantee that our shared web hosting services will be available at least 99.9% of the time during each calendar month, excluding scheduled maintenance and circumstances beyond our control (see Section 3: Exclusions).
        </p>
        <p>
          <strong>Uptime Calculation:</strong><br />
          <code>
            Uptime % = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100
          </code>
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. Compensation for Downtime</h2>
        <p>
          If uptime falls below the guaranteed 99.9% in any calendar month, you may request service credits as compensation:
        </p>
        <ul className="list-disc list-inside">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">99.0% - 99.8%: 10%</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">95.0% - 98.9%: 25%</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Below 95.0%: 50%</li>
        </ul>
        <p>
          <strong>Conditions:</strong>
          <ul className="list-disc list-inside">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Submit your request within 7 days of the month ending.</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Include specific downtime details (dates, times, impact).</li>
          </ul>
        </p>
        <p>
          <strong>Limitations:</strong> Maximum credit is capped at one month’s hosting fee. Credits are issued as account credit and cannot be refunded in cash.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Exclusions</h2>
        <ul className="list-disc list-inside">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Scheduled maintenance announced 24+ hours in advance</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Force Majeure (natural disasters, government actions, ISP outages)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Customer actions (website misconfiguration, outdated software)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Third-party plugin or integration failures</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Excessive resource usage breaching hosting limits</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Scheduled Maintenance</h2>
        <p>
          We perform scheduled maintenance during off-peak hours and provide at least 24 hours’ notice via email or customer portal. These windows are excluded from uptime calculations.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Monitoring and Reporting</h2>
        <p>
          We monitor all systems continuously. To report downtime:
          <ul className="list-disc list-inside">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Email: support@layer9solutions.com</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Submit a ticket via our client portal</li>
          </ul>
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Scope of SLA</h2>
        <p>
          This SLA applies only to shared web hosting. It does not cover VPS, dedicated servers, domain registration, or SSL services.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">7. Limitations of Liability</h2>
        <p>
          Our liability for downtime is limited to the credits described herein. We do not guarantee specific performance of scripts, applications, or websites.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">8. Agreement Modifications</h2>
        <p>
          We may update this SLA at any time. Updates will be posted on our website and announced 30 days in advance. Continued service use constitutes acceptance.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">9. Governing Law</h2>
        <p>
          This SLA is governed by the laws of England and Wales. Disputes shall be resolved under UK jurisdiction.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">10. Contact</h2>
        <p>
          Layer 9 Solutions t/a Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: legal@layer9solutions.com
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
