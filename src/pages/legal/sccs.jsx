import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Standard Contractual Clauses (SCCs) — Layer 9 Solutions</title>
        <meta name="description" content="Standard Contractual Clauses (SCCs) for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/sccs" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // SCCS</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Standard Contractual Clauses (SCCs)
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          Layer 9 Solutions Ltd uses Standard Contractual Clauses (SCCs)
          to safeguard international transfers of personal data in accordance with the UK GDPR and
          EU GDPR requirements.
        </p>

        <h2 className="text-xl font-bold">1. What Are SCCs?</h2>
        <p>
          Standard Contractual Clauses (SCCs) are pre-approved legal contracts issued by the European Commission
          and UK Information Commissioner's Office (ICO). They ensure that when personal data is transferred
          outside the UK or EEA, it remains protected to GDPR standards.
        </p>

        <h2 className="text-xl font-bold">2. Why We Use SCCs</h2>
        <p>
          We occasionally use infrastructure and sub-processors based outside the UK and EEA — for example, cloud servers
          in the United States to deliver services such as VPN access or US-based website hosting. When such transfers
          of personal data occur, we rely on SCCs to ensure compliance with legal obligations and to uphold your rights.
        </p>

        <h2 className="text-xl font-bold">3. Which SCCs Apply</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">EU SCCs: Commission Implementing Decision (EU) 2021/914 of 4 June 2021</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">UK International Data Transfer Addendum to the EU SCCs (March 2022 version)</li>
        </ul>

        <h2 className="text-xl font-bold">4. Who We Use SCCs With</h2>
        <p>
          We have signed or incorporated SCCs with infrastructure providers and sub-processors outside the UK/EEA,
          including:
        </p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">OVH US — for cloud servers and virtual machines</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Vultr (Choopa LLC, US) — for VPN and US-region hosting</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Other partners where required, as listed in our DPA and sub-processor annex</li>
        </ul>
        <p>
          Where SCCs are not embedded in a provider’s standard data processing agreement, we proactively seek to
          execute signed SCCs to ensure full compliance with UK GDPR. If you have questions about a specific provider
          or data transfer arrangement, please contact us.
        </p>

        <h2 className="text-xl font-bold">5. Requesting a Copy</h2>
        <p>
          If you are a Layer 9 Solutions customer and require a signed copy of the SCCs used with a particular sub-processor,
          you may request this by emailing:
        </p>
        <p>
          <a href="mailto:legal@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
            legal@layer9solutions.com
          </a>
        </p>

        <h2 className="text-xl font-bold">6. Do Customers Need to Sign SCCs?</h2>
        <p>
          No. As a customer of Layer 9 Solutions, you are not required to sign SCCs separately. We act as your data processor
          or sub-processor, and we ensure that all international transfers are legally covered by SCCs or other safeguards.
        </p>

        <h2 className="text-xl font-bold">7. Further Information</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">
            <a
              href="https://commission.europa.eu/publications/standard-contractual-clauses-international-transfers_en"
              className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              EU SCC Official Documentation
            </a>
          </li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">
            <a
              href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-data-transfer-agreement-and-guidance/"
              className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              UK ICO International Data Transfer Addendum
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-500 mt-12">
          © 2025 Layer 9 Solutions Ltd. All rights reserved.
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
