import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Terms of Service – Shared Web Hosting — Layer 9 Solutions</title>
        <meta name="description" content="Terms of Service – Shared Web Hosting for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/shared-hosting-tos" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // SHARED_HOSTING_TOS</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Terms of Service – Shared Web Hosting
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          These Terms of Service (“ToS”) govern your use of the shared web hosting services (“Services”) provided by Layer 9 Solutions t/a Layer 9 Solutions Ltd (“Company,” “we,” “us,” or “our”). By signing up for or using our Services, you agree to comply with and be bound by these ToS. If you do not agree to these terms, you must discontinue use immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Services Provided</h2>
        <ul className="list-disc ml-6">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Server space for hosting websites</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Bandwidth for website traffic</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Email hosting (limited by plan specifications)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Database hosting and management</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Technical support for hosting-related issues</li>
        </ul>
        <p>Resources (CPU, memory, and storage) are shared among multiple users. Overuse or abuse may result in service limitations or termination. Shared hosting does not include root access or advanced server customizations.</p>

        <h2 className="text-2xl font-semibold mt-8">2. Eligibility</h2>
        <p>You must be at least 18 years old to use our services. All provided account information must be accurate and current.</p>

        <h2 className="text-2xl font-semibold mt-8">3. Account Ownership and Security</h2>
        <p>The account holder is responsible for all activity and for maintaining the confidentiality of login credentials. Notify us immediately of any unauthorized access.</p>

        <h2 className="text-2xl font-semibold mt-8">4. Acceptable Use Policy (AUP)</h2>
        <p><strong>4.1 Prohibited Activities</strong></p>
        <ul className="list-disc ml-6">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Hosting illegal or infringing content</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Distributing malware or spam</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Running bots, crypto miners, or disruptive workloads</li>
        </ul>
        <p><strong>4.2 Fair Usage Policy:</strong> Excessive usage may trigger throttling or require an upgrade. Repeated violations may lead to suspension or termination.</p>

        <h2 className="text-2xl font-semibold mt-8">5. Payment and Refund Policy</h2>
        <p>Payments are due at the start of each billing cycle. We offer a 7-day money-back guarantee on hosting services only. No refunds for terminated accounts due to ToS violations.</p>

        <h2 className="text-2xl font-semibold mt-8">6. Service Uptime and Maintenance</h2>
        <p>We aim for 99.9% uptime. Scheduled maintenance will be communicated. We are not liable for outages due to force majeure, attacks, or ISP issues.</p>

        <h2 className="text-2xl font-semibold mt-8">7. Data Backup Policy</h2>
        <p>We offer courtesy backups but make no guarantees. You are responsible for maintaining your own backups.</p>

        <h2 className="text-2xl font-semibold mt-8">8. Termination of Services</h2>
        <p>
          <strong>8.1 Voluntary:</strong> Cancel via your account portal.  
          <br />
          <strong>8.2 Involuntary:</strong> We may suspend or terminate for non-payment or ToS violations without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8">9. Limitation of Liability</h2>
        <p>We are not liable for indirect damages, lost profits, or data loss. Total liability is limited to the last 3 months of fees paid.</p>

        <h2 className="text-2xl font-semibold mt-8">10. Indemnification</h2>
        <p>You agree to indemnify Layer 9 Solutions for any claims resulting from your content or misuse of the services.</p>

        <h2 className="text-2xl font-semibold mt-8">11. Changes to Terms</h2>
        <p>We may update these terms at any time. Notice will be posted on our website. Continued use after changes implies acceptance.</p>

        <h2 className="text-2xl font-semibold mt-8">12. Governing Law and Dispute Resolution</h2>
        <p>These terms are governed by the laws of England and Wales. Disputes will be resolved via arbitration or in the UK courts.</p>

        <h2 className="text-2xl font-semibold mt-8">13. Contact</h2>
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
