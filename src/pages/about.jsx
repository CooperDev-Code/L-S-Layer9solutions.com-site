import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TEAM_VALUES = [
  { k:"MISSION", v:"To deliver enterprise-grade cloud infrastructure that just works — for businesses of every size." },
  { k:"VISION", v:"A world where serious technology is accessible without enterprise-level complexity or pricing." },
  { k:"APPROACH", v:"Custom solutions over generic packages. Real support over ticket systems. UK infrastructure over resold capacity." },
];

export default function About() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>About Layer 9 Solutions — UK Enterprise Cloud & Connectivity</title>
        <meta name="description" content="Learn about Layer 9 Solutions — your UK-based partner for enterprise cloud hosting, VPN servers, and business connectivity. Real engineers. Real support." />
        <link rel="canonical" href="https://layer9solutions.com/about" />
      </Head>
      <Header />

      {/* Hero */}
      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// ABOUT_US // WHOIS_LAYER_9</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="text-[#52CAFC]">// </span>We Are<br />
            <span className="text-[#1F7EF4] glow">Layer_9_Solutions</span>
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-2xl leading-relaxed">
            In the OSI model, Layer 9 doesn't officially exist. It's the human layer — the one that actually makes technology work. That's exactly where we operate.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="sec-div">// OUR STORY</div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm tracking-widest text-[#52CAFC] mb-3">root@layer9:~$ cat about.txt</p>
              <div className="space-y-4 text-[15px] text-[#a8bfd4] leading-relaxed border-l border-[rgba(31,126,244,0.3)] pl-4">
                <p>Layer 9 Solutions Ltd was founded with a single principle: that businesses deserve infrastructure they can actually rely on, without needing a dedicated IT team to manage it.</p>
                <p>We're a UK-registered company building and operating cloud infrastructure from UK-based datacenters. Every service we offer — from shared hosting to private VPN servers — is designed to give you the performance and control of enterprise-grade systems at a price that makes sense.</p>
                <p>The name comes from the OSI networking model. Layers 1–8 describe how data travels across networks. Layer 9 is our concept: the human layer. The decisions, the support, the expertise that makes technology actually work for people.</p>
                <p>That's our role. We sit at Layer 9 — between complex infrastructure and the businesses that depend on it.</p>
              </div>
            </div>
            <div className="t-box glow-box">
              <div className="t-box-inner">
                <p className="text-xs text-[#4a6080] tracking-widest mb-4">root@layer9:~$ whois layer9solutions.com</p>
                {[
                  { k:"COMPANY", v:"Layer 9 Solutions Ltd" },
                  { k:"REG_NO", v:"14857666" },
                  { k:"ADDRESS", v:"124 City Road, London" },
                  { k:"POSTCODE", v:"EC1V 2NX, England" },
                  { k:"COUNTRY", v:"United Kingdom" },
                  { k:"FOUNDED", v:"2024" },
                  { k:"INFRASTRUCTURE", v:"UK-based" },
                  { k:"SUPPORT", v:"24/7" },
                ].map(r => (
                  <div key={r.k} className="flex justify-between py-1.5 border-b border-[rgba(31,126,244,0.1)] last:border-0">
                    <span className="text-[15px] text-[#e2eaf2]">{r.k}:</span>
                    <span className="text-sm text-white font-semibold">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="sec-div">// CORE VALUES</div>
          <div className="grid md:grid-cols-3 gap-4">
            {TEAM_VALUES.map((v, i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="border border-[rgba(31,126,244,0.3)] p-5 hover:border-[#1F7EF4] transition-colors">
                <p className="text-xs tracking-[3px] text-[#52CAFC] mb-2">{v.k}</p>
                <p className="text-[15px] text-[#e2eaf2] leading-relaxed">{v.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="sec-div">// OUR SERVICES</div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { svc:"Shared_Web_Hosting", detail:"Linux hosting with Panel9 control panel, free SSL, daily backups.", href:"/shared-hosting", live:true },
              { svc:"Private_VPN_Servers", detail:"Dedicated WireGuard/OpenVPN nodes with zero-logs policy and dedicated IPv4.", href:"/private-vpn", live:true },
              { svc:"Layer9_Mail_Relay", detail:"SMTP relay for transactional emails — apps, systems, and businesses.", href:"/mail-relay", live:true },
              { svc:"Layer9_Connect", detail:"UK fibre broadband + VoiceEdge hosted VoIP platform.", href:null, live:false },
              { svc:"Layer9_eSIM", detail:"Global data-only eSIMs for 190+ countries. No contracts.", href:null, live:false },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-[rgba(31,126,244,0.2)] hover:border-[rgba(31,126,244,0.5)] transition-colors">
                <span className={`text-xs font-mono font-bold mt-0.5 shrink-0 ${s.live ? "text-[#00e676]" : "text-[#2a3a50]"}`}>{s.live ? "[LIVE]" : "[SOON]"}</span>
                <div>
                  <p className="font-mono text-sm font-bold text-white mb-1">{s.svc}</p>
                  <p className="text-[15px] text-[#e2eaf2]">{s.detail}</p>
                  {s.href && <a href={s.href} className="text-sm text-[#1F7EF4] hover:text-[#52CAFC] transition-colors mt-1 block">&gt; View_Service →</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="sec-div justify-center">// GET_IN_TOUCH</div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            <span className="text-[#52CAFC]">// </span>Talk to the team
          </h2>
          <p className="text-[16px] text-[#a8bfd4] mb-6 leading-relaxed">Whether you need hosting, a custom VPN solution, or want to discuss enterprise requirements — we're here.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a href="mailto:support@layer9solutions.com" className="r-btn"><span>&gt; support@layer9solutions.com</span></a>
            <a href="mailto:sales@layer9solutions.com" className="r-btn-ghost"><span>&gt; sales@layer9solutions.com</span></a>
          </div>
          <a href="/contact" className="r-btn"><span>&gt; Open_Contact_Form →</span></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
