import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Data Processing Addendum (DPA) — Layer 9 Solutions</title>
        <meta name="description" content="Data Processing Addendum (DPA) for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/dpa" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // DPA</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Data Processing Addendum (DPA)
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          This Data Processing Addendum ("DPA") supplements the Terms of Service ("TOS") between you ("Customer") and Layer 9 Solutions Ltd ("Company"). It governs the Processing of Personal Data in connection with the Services.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. Definitions</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Processing:</strong> Any operation on Personal Data.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Controller:</strong> The entity that determines the purposes and means of Processing.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Processor:</strong> The entity that Processes Personal Data on behalf of the Controller.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Sub-Processor:</strong> A third party engaged by the Processor.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Data Subject:</strong> The individual whose Personal Data is Processed.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Data Protection Laws:</strong> UK GDPR, Data Protection Act 2018 and any other applicable law.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Standard Contractual Clauses:</strong> EU Commission’s and UK ICO’s approved clauses for international transfers.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. Subject Matter, Duration, Nature & Purpose</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Subject matter:</strong> Processing of Customer data in connection with Services (e.g. eSIM, hosting, VPN, SMTP, domain registration).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Duration:</strong> For the term of the Services plus any required legal retention period.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Nature & Purpose:</strong> To enable delivery, support, improvement and security of the Services as defined in the TOS.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Categories of Data & Data Subjects</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Personal Data:</strong> Names; contact details; IP address; device identifiers (IMSI/IMEI); billing/payment data; usage/log data.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Data Subjects:</strong> Customers, end-users, employees/agents of the Customer, and job applicants (where applicable).</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Controller Obligations</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Ensure instructions comply with Data Protection Laws.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Provide required notices and obtain consents.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Respond to Data Subject requests and direct them to the Processor when applicable.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Ensure Personal Data is accurate and lawfully collected.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Processor Obligations</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Process Personal Data only on documented instructions.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Ensure personnel are subject to confidentiality.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Maintain appropriate technical and organisational safeguards (see Annex 1).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Notify Customer within 24 hours of any Personal Data breach.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Assist with Data Subject requests, impact assessments, and audits.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Delete or return data after service termination unless required by law.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Sub-Processors</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Customer authorises use of Sub-Processors listed in Annex 2.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Company shall notify Customer of intended changes with 14 days to object.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Company remains liable for Sub-Processor actions.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">7. International Transfers</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Transfers outside UK/EEA are governed by SCCs or equivalent legal safeguards.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Executed SCCs are available at: <a href="https://layer9solutions.com/legal/sccs" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">layer9solutions.com/legal/sccs</a></li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">8. Data Subject Rights</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Company will notify Customer of Data Subject requests without undue delay.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Company will not respond directly unless authorised.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">9. Security & Audit Rights</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Security measures are detailed in Annex 1.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Customer may audit once per year with 30 days' notice via:
            <ul className="list-disc ml-6">
              <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Review of third-party audit reports (e.g., SOC 2, ISO 27001).</li>
              <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">On-site audit at Customer’s expense.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">10. Liability & Indemnification</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Liability subject to TOS limitations.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Each party indemnifies the other for breach of this DPA or Data Protection Law.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">11. Governing Law & Miscellaneous</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">This DPA is governed by English law.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">If any clause is invalid, the rest remain effective.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Amendments must be in writing and agreed by both parties.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">12. Contact Information</h2>
        <p>
          Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: legal@layer9solutions.com | support@layer9solutions.com | abuse@layer9solutions.com
        </p>

        <hr className="my-8 border-t" />

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">Annex 1: Technical & Organisational Measures</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Access control (role-based, MFA)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Patch management & vulnerability scanning</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Secure backups & disaster recovery</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Data centre physical security</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Incident response & breach monitoring</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">Annex 2: Authorised Sub-Processors</h2>
        <table className="w-full table-auto text-left text-sm border border-gray-300">
          <thead className="bg-[rgba(31,126,244,0.1)]">
            <tr>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Sub-Processor Name</th>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Service Provided</th>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Data Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Keepgo Europe Ltd</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">eSIM Connectivity</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Worldwide</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Hetzner Online GmbH</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Infrastructure Hosting</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Worldwide</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">OVH Groupe SAS</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Infrastructure Hosting</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Worldwide</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Voxility LLP</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Infrastructure & DDoS Mitigation</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Worldwide</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Vultr (Choopa LLC)</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Infrastructure Hosting</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Worldwide</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">Annex 3: Standard Contractual Clauses</h2>
        <p>
          This DPA incorporates the EU Commission’s and UK ICO’s Standard Contractual Clauses for transfers
          of Personal Data to processors located outside the UK/EEA. The current SCC documents are available at:
          <br />
          <a href="https://layer9solutions.com/legal/sccs" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">
            https://layer9solutions.com/legal/sccs
          </a>
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
