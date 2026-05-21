import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Terms of Use – VPN Service — Layer 9 Solutions</title>
        <meta name="description" content="Terms of Use – VPN Service for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/vpn-terms" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // VPN_TERMS</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Terms of Use – VPN Service
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          Welcome to Layer 9 Solutions. By using our VPN services ("Service"), you agree to the following Terms of Use ("Terms"). These Terms govern your access and use of our VPN services and related software. Please read these Terms carefully. If you do not agree, do not use our Service.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. Eligibility</h2>
        <p>You must be at least 18 years old to use our services. By using the Service, you confirm that you meet this requirement.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. Use of the Service</h2>
        <p>Layer 9 Solutions provides privacy-focused VPN services intended for lawful, personal, and commercial use. You agree:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">NOT to use the Service for any unlawful purpose or activity, including but not limited to:</li>
          <ul className="list-disc ml-6">
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Distributing malware, viruses, or spam</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Unauthorized access to networks, systems, or data</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Fraud, identity theft, or harassment</li>
            <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Sharing copyrighted material without permission</li>
          </ul>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">NOT to overload our infrastructure or abuse server resources (e.g. through automated scripts, torrents at scale)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">NOT to resell, sublicense, or redistribute our service without prior written approval</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. No-Log Policy</h2>
        <p>We operate a strict no-logs policy. We do not collect or store information about your online activity, connection timestamps, session duration, source IP, or DNS queries. System-level logs may include minimal data for service delivery and diagnostics (e.g. load balancing, abuse detection), but are not linked to identifiable user activity.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Account Security</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials. You are liable for all actions taken using your account. If you suspect unauthorized use, contact us immediately at support@layer9solutions.com.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Service Availability</h2>
        <p>We aim to provide high service uptime but make no guarantees regarding uninterrupted access. Maintenance, upgrades, or external factors may impact availability. Layer 9 Solutions reserves the right to limit, suspend, or terminate your access if you breach these Terms or misuse the Service.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Payments & Refunds</h2>
        <p>All payments are billed in GBP unless otherwise stated. Refunds are available within 7 days of purchase for monthly plans only. Refunds are not available for misuse, abuse, or policy violations. If you request a refund, please contact billing@layer9solutions.com with your invoice number.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">7. Fair Use Policy</h2>
        <p>To ensure consistent performance, all plans are subject to a fair use policy. Excessive bandwidth usage or unusual activity that negatively impacts other users may result in restrictions or suspension.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">8. Prohibited Activities</h2>
        <p>Examples of explicitly prohibited use include (but are not limited to):</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Sending spam or unsolicited communications</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Running Tor exit nodes or public proxies</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Operating cryptocurrency mining or botnets</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Engaging in hacking, phishing, or cyberattacks</li>
        </ul>
        <p>We reserve the right to cooperate with legal authorities in cases of verified criminal activity.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">9. Changes to the Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the Service after changes implies acceptance. We will notify users of significant changes via email or website notice.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">10. Disclaimer</h2>
        <p>The Service is provided "as is" without warranties of any kind. Layer 9 Solutions does not guarantee the Service will be error-free or uninterrupted. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">11. Limitation of Liability</h2>
        <p>Layer 9 Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Service, even if advised of the possibility. Our total liability shall not exceed the amount paid by you for the Service during the past 12 months.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">12. Governing Law</h2>
        <p>These Terms are governed by the laws of the United Kingdom. Any disputes will be resolved in the courts of England and Wales.</p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">13. Contact</h2>
        <p>
          Layer 9 Solutions t/a Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: support@layer9solutions.com
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
