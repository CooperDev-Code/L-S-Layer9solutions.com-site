import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LegalPage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Anti-Spam Policy – SMTP Service — Layer 9 Solutions</title>
        <meta name="description" content="Anti-Spam Policy – SMTP Service for Layer 9 Solutions services." />
        <link rel="canonical" href="https://layer9solutions.com/legal/smtp-anti-spam" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-3">// LEGAL // SMTP_ANTI_SPAM</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="text-[#52CAFC]">// </span>Anti-Spam Policy – SMTP Service
          </h1>
          <p className="text-sm font-mono text-[#e2eaf2]">Layer 9 Solutions Ltd &nbsp;│&nbsp; Effective: 01 May 2025</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-5 text-[15px] text-[#a8bfd4] leading-relaxed">
          <p>
          By creating an account and agreeing to our Terms of Use, you also agree to adhere to this Anti-Spam Policy.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">1. Definition of Spam</h2>
        <p>
          Spam refers to any unsolicited email sent without a valid legal basis or the recipient's explicit consent, especially for marketing purposes.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">2. Permissible Email Practices</h2>
        <p>You are authorized to send emails through Layer 9 Solutions SMTP Service only if:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Transactional Emails:</strong> They are necessary for facilitating transactions or providing a product or service (e.g., password resets, invoices).</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2"><strong>Marketing Emails:</strong> You have obtained explicit consent from the recipient to receive such communications.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">3. Prohibited Email Addresses</h2>
        <p>You must not send emails to addresses that:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Lack a valid legal basis for contact regarding the email's subject matter.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Were acquired through purchase, rental, or any third-party source, regardless of claimed permissions.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Have not been contacted via email in the past two years, as permissions may have lapsed.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Were harvested or copied from the web without explicit consent.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">4. Required Content in Marketing Emails</h2>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">A clear and visible single-click unsubscribe link that immediately adds the recipient to your suppression list.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Immediate cessation of marketing emails to recipients who have unsubscribed.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">5. Monitoring and Enforcement</h2>
        <p>
          We reserve the right to monitor your email sending practices. If we detect:
        </p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">High bounce rates.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Elevated spam complaints.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Significant unsubscribe rates.</li>
        </ul>
        <p>
          We may suspend your account and initiate an investigation.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">6. Account Suspension and Termination</h2>
        <p>
          If you are found to be sending emails without a valid legal basis or in violation of this policy:
        </p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">Your account may be suspended immediately.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">We may request proof of compliance; failure to provide it can lead to account termination.</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">No refunds will be issued for accounts terminated due to spam violations.</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">7. Compliance with Laws</h2>
        <p>You agree to comply with all applicable laws and regulations related to email communications, including but not limited to:</p>
        <ul className="space-y-1 border-l border-[rgba(31,126,244,0.3)] pl-4 ml-2">
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">The CAN-SPAM Act</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">The General Data Protection Regulation (GDPR)</li>
          <li className="text-[15px] text-[#e2eaf2] before:content-['>'] before:text-[#52CAFC] before:mr-2">The California Consumer Privacy Act (CCPA)</li>
        </ul>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">8. Reporting Abuse</h2>
        <p>
          If you suspect any violations of this Anti-Spam Policy, please report them to abuse@layer9solutions.com.
        </p>

        <h2 className="text-base font-semibold text-white mt-8 mb-3 border-l-2 border-[#1F7EF4] pl-3">9. Contact Information</h2>
        <p>
          Layer 9 Solutions t/a Layer 9 Solutions Ltd<br />
          Company No. 14857666<br />
          124 City Road, London, England, EC1V 2NX<br />
          Email: legal@layer9solutions.com, support@layer9solutions.com, abuse@layer9solutions.com
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
