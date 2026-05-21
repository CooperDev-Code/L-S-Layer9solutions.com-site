import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Privacy Policy — Layer 9 Solutions</title>
        <meta name="description" content="Privacy Policy for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/privacy" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // PRIVACY</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Privacy Policy
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          Layer 9 Solutions Ltd (“we”, “us”, “our”) operates a range of services:
        </p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Shared Web Hosting & VPS</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Private VPN (no-logs)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Prepaid Travel Data-Only eSIMs</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Domain Registration & SSL Certificates</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">SMTP / Mail Relay Services</li>
        </ul>
        <p>
          We respect your privacy and are committed to protecting your Personal Data. This Policy explains what we collect, how we use it, with whom we share it, your rights, and how we keep it secure.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. What We Do Not Collect (VPN-specific no-logs)</h2>
        <p>For our Private VPN service only, we do not collect or store:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Browsing history</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">DNS queries</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Traffic destination or content</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Connection timestamps</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Session duration</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Source IP addresses</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Personal Data We Do Collect</h2>
        <table className="w-full text-sm font-mono border border-[rgba(31,126,244,0.3)]">
          <thead className="bg-[rgba(31,126,244,0.1)]">
            <tr>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Category</th>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Examples</th>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Identity & Contact Data</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Name, email address, billing address, phone number</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Account setup, support, billing</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Account & Subscription</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Username, hashed password, service plan, status</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Authentication, provisioning, renewals</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Device & Network Data</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">IP (hosting logs only), IMEI/IMSI/ICCID (eSIM), MAC, user-agent</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Connectivity, fraud prevention, troubleshooting</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Usage & Log Data</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Hosting usage, email delivery logs, VPN server load, data usage</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Service improvement, capacity planning, abuse detection</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Payment & Transaction</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Processor tokens, transaction dates & amounts</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Billing, accounting compliance</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Support & Correspondence</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Tickets, chats, complaints</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Customer service, dispute resolution</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Legal Basis for Processing</h2>
        <table className="w-full text-sm font-mono border border-[rgba(31,126,244,0.3)]">
          <thead className="bg-[rgba(31,126,244,0.1)]">
            <tr>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Purpose</th>
              <th className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Legal Basis (UK GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Service delivery & contract fulfilment</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Article 6(1)(b)</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Legal & regulatory compliance</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Article 6(1)(c)</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Legitimate interests</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Article 6(1)(f)</td>
            </tr>
            <tr>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Marketing & non-essential cookies</td>
              <td className="border border-[rgba(31,126,244,0.3)] px-3 py-2 text-[#52CAFC]">Article 6(1)(a)</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Data Retention</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Hosting & SMTP logs: up to 24 months, then anonymised.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Billing & payments: retained 7 years for HMRC compliance.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Support records: retained 5 years for ADR and audit.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Credentials: deleted/anonymised within 30 days of account closure.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Marketing consent: stored until withdrawn.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Cookies & Tracking</h2>
        <p>We use:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Strictly-necessary cookies (login, sessions)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Performance cookies (anonymous analytics)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Preference cookies (language, theme)</li>
        </ul>
        <p>
          You’ll be prompted to consent to cookies. You can manage preferences at any time using the “Cookie settings” link in our footer.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">7. Data Sharing & International Transfers</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">We share data with infrastructure providers, payment gateways, and email platforms.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">International transfers are secured via SCCs or UK adequacy decisions.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">We may disclose data if legally compelled (e.g., law enforcement).</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">8. Security Measures</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Role-based access & MFA for admin access</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Regular patching, scanning, ISO 27001 / SOC 2 reviews</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Backup, DR, and breach response procedures</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">9. Your Rights under UK GDPR</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Access your data and request a copy</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Rectify inaccuracies</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Request erasure (“right to be forgotten”)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Restrict or object to certain uses</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Data portability (for automated processing)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Withdraw consent (for marketing/cookies)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Complain to the ICO at <a href="https://ico.org.uk" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">ico.org.uk</a></li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">10. Marketing Communications</h2>
        <p>
          We only send marketing if you opt in. You can opt out via the unsubscribe link or by emailing{" "}
          <a href="mailto:privacy@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">privacy@layer9solutions.com</a>.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">11. Changes to This Policy</h2>
        <p>
          We may update this policy. Major changes will be posted on our website or emailed to you. Please check periodically.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">12. Contact Information</h2>
        <p>
          <strong>Data Protection Officer</strong><br />
          Layer 9 Solutions Ltd<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: <a href="mailto:legal@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">legal@layer9solutions.com</a> |{" "}
          <a href="mailto:privacy@layer9solutions.com" className="text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">privacy@layer9solutions.com</a>
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
