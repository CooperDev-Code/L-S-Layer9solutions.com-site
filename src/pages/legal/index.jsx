import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SECTIONS = [
  {
    group:"GENERAL",
    docs:[
      { href:"/legal/privacy", label:"Privacy_Policy", sub:"UK GDPR compliant data policy" },
      { href:"/legal/dpa", label:"Data_Processing_Addendum", sub:"DPA for business customers" },
      { href:"/legal/sccs", label:"Standard_Contractual_Clauses", sub:"International data transfer safeguards" },
      { href:"/legal/security", label:"Security_Statement", sub:"How we protect your data" },
      { href:"/legal/accessibility", label:"Accessibility_Policy", sub:"Vulnerable customer & accessibility" },
    ]
  },
  {
    group:"SHARED_HOSTING",
    docs:[
      { href:"/legal/shared-hosting-tos", label:"Terms_of_Service", sub:"Hosting service terms and conditions" },
      { href:"/legal/shared-hosting-sla", label:"Service_Level_Agreement", sub:"Uptime, credits, and support SLAs" },
    ]
  },
  {
    group:"VPN_SERVICE",
    docs:[
      { href:"/legal/vpn-terms", label:"Terms_of_Use", sub:"VPN service terms and conditions" },
      { href:"/legal/vpn-aup", label:"Acceptable_Use_Policy", sub:"Permitted and prohibited uses" },
      { href:"/legal/vpn-privacy", label:"VPN_Privacy_Policy", sub:"Zero-logs policy and data handling" },
    ]
  },
  {
    group:"SMTP_MAIL_RELAY",
    docs:[
      { href:"/legal/smtp-terms", label:"Terms_of_Use", sub:"Mail relay service terms" },
      { href:"/legal/smtp-sla", label:"Service_Level_Agreement", sub:"Delivery and uptime SLAs" },
      { href:"/legal/smtp-anti-spam", label:"Anti_Spam_Policy", sub:"Prohibited sending and spam rules" },
    ]
  },
  {
    group:"DOMAINS_AND_SSL",
    docs:[
      { href:"/legal/domain-ssl-terms", label:"Terms_and_Conditions", sub:"Domain registration and SSL terms" },
    ]
  },
  {
    group:"ESIM_SERVICE",
    docs:[
      { href:"/legal/esim-tos", label:"Terms_of_Service", sub:"eSIM service terms and conditions" },
      { href:"/legal/esim-tou", label:"Terms_of_Use", sub:"eSIM acceptable use and data policy" },
    ]
  },
];

export default function LegalIndex() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Legal Documents — Layer 9 Solutions</title>
        <meta name="description" content="Legal documents for all Layer 9 Solutions services including privacy policy, terms of service, SLAs, and acceptable use policies." />
        <link rel="canonical" href="https://layer9solutions.com/legal" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// LEGAL_HUB // ls /legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#52CAFC]">// </span>Legal_Documents
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-xl">
            Official legal documentation for all Layer 9 Solutions services. All documents effective from 01 May 2025 unless otherwise stated.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto space-y-12">
        {SECTIONS.map((section) => (
          <div key={section.group}>
            <div className="sec-div">// {section.group}</div>
            <div className="space-y-2">
              {section.docs.map((doc) => (
                <Link key={doc.href} href={doc.href}
                  className="flex items-center justify-between border border-[rgba(31,126,244,0.3)] px-4 py-3 hover:border-[#1F7EF4] hover:bg-[rgba(31,126,244,0.05)] transition-all group">
                  <div>
                    <p className="text-xs font-mono text-white group-hover:text-[#52CAFC] transition-colors">
                      <span className="text-[#52CAFC]">&gt; </span>{doc.label}
                    </p>
                    <p className="text-[15px] text-[#e2eaf2] mt-1">{doc.sub}</p>
                  </div>
                  <span className="text-[#1F7EF4] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
