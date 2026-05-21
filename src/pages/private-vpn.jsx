import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PLANS = [
  { id:"01", name:"Browse_Plan", price:"£5.99", period:"/mo", cpu:"1 Core", ram:"0.5GB", disk:"10GB SSD", bw:"500GB", protocol:"OpenVPN", desc:"Private browsing, secure connections.", href:"https://clients.layer9solutions.com/index.php?rp=/store/private-vpn-server/browse-plan-budget-friendly-vpn" },
  { id:"02", name:"Stream_Small", price:"£9.99", period:"/mo", cpu:"1 Core", ram:"1GB", disk:"25GB SSD", bw:"1TB", protocol:"OpenVPN / WireGuard", desc:"HD streaming, gaming, fast browsing.", href:"https://clients.layer9solutions.com/index.php?rp=/store/private-vpn-server/stream-plan-high-performance-vpn" },
  { id:"03", name:"Stream_Medium", price:"£14.99", period:"/mo", cpu:"2 Cores", ram:"2GB", disk:"50GB SSD", bw:"2TB", protocol:"OpenVPN / WireGuard", desc:"4K streaming, multi-device, teams.", href:"https://clients.layer9solutions.com/index.php?rp=/store/private-vpn-server/stream-medium-high-performance-vpn", highlight:true },
  { id:"04", name:"Stream_Large", price:"£19.99", period:"/mo", cpu:"4 Cores", ram:"4GB", disk:"100GB SSD", bw:"3TB", protocol:"OpenVPN / WireGuard", desc:"Maximum performance, power users.", href:"https://clients.layer9solutions.com/index.php?rp=/store/private-vpn-server/stream-large-high-performance-vpn" },
];

const FAQS = [
  { q:"What is a private VPN vs shared VPN?", a:"A private VPN gives you a dedicated server — your own IP, your own resources. Shared VPN services put thousands of users on the same IP, which can get blacklisted. With Layer 9, you're the only user on your node." },
  { q:"Do you store any logs?", a:"Zero. We do not log, monitor, or inspect your traffic. No connection timestamps, no DNS queries, no browsing history. Our zero-logs policy is absolute." },
  { q:"What's the difference between WireGuard and OpenVPN?", a:"WireGuard is faster and more modern — ideal for streaming and gaming. OpenVPN is battle-tested and very flexible. Both are available on Stream plans. Browse Plan uses OpenVPN only." },
  { q:"How do I configure my device?", a:"After ordering, you receive configuration files and a step-by-step setup guide. Most devices configure in under 5 minutes. We support Windows, macOS, Linux, iOS, and Android." },
];

export default function PrivateVPN() {
  const [faqOpen, setFaqOpen] = useState(null);
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Private VPN Server UK — WireGuard & OpenVPN from £5.99/mo | Layer 9 Solutions</title>
        <meta name="description" content="Dedicated private VPN servers with WireGuard and OpenVPN. Zero-logs policy, dedicated IPv4. UK-based VPN hosting from £5.99/month." />
        <meta name="keywords" content="private VPN server, dedicated VPN, WireGuard VPN, OpenVPN, no-logs VPN, UK VPN" />
        <link rel="canonical" href="https://layer9solutions.com/private-vpn" />
        <meta property="og:title" content="Private VPN Server UK — WireGuard & OpenVPN from £5.99/mo" />
        <meta property="og:url" content="https://layer9solutions.com/private-vpn" />
      </Head>
      <Header />

      {/* Hero */}
      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// SERVICE_02 // PRIVATE_VPN_SERVERS</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="text-[#52CAFC]">// </span>Layer_9<br />
            <span className="text-[#1F7EF4] glow">VPN</span>
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-xl leading-relaxed mb-6">
            Your own dedicated VPN node. No shared IPs. No logs. WireGuard and OpenVPN supported. Dedicated IPv4 included on every plan.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-mono">
            <span className="badge-online">● ZERO_LOGS_POLICY</span>
            <span className="text-[#a8bfd4]">│</span>
            <span className="text-[#1F7EF4]">DEDICATED_IPv4</span>
            <span className="text-[#a8bfd4]">│</span>
            <span className="text-[#1F7EF4]">WIREGUARD + OPENVPN</span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-6xl mx-auto">
          <div className="sec-div">// VPN PLANS</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.id}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                className={`border p-5 flex flex-col relative transition-all duration-300 hover:glow-box ${plan.highlight ? "border-[#1F7EF4] bg-[rgba(31,126,244,0.07)]" : "border-[rgba(31,126,244,0.3)] hover:border-[#1F7EF4]"}`}>
                {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F7EF4] text-black text-sm font-mono font-bold px-3 py-1 tracking-widest">[RECOMMENDED]</span>}
                <span className="text-xs text-[#4a6080] mb-2">[{plan.id}]</span>
                <h3 className="text-sm font-bold text-white mb-1"><span className="text-[#52CAFC]">// </span>{plan.name}</h3>
                <p className="text-[15px] text-[#e2eaf2] mb-3">{plan.desc}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#1F7EF4] glow">{plan.price}</span>
                  <span className="text-[15px] text-[#e2eaf2]">{plan.period}</span>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { k:"CPU", v:plan.cpu },
                    { k:"RAM", v:plan.ram },
                    { k:"DISK", v:plan.disk },
                    { k:"BANDWIDTH", v:plan.bw },
                    { k:"PROTOCOL", v:plan.protocol },
                    { k:"LOGGING", v:"ZERO_LOGS" },
                    { k:"IPv4", v:"DEDICATED" },
                  ].map(r => (
                    <div key={r.k} className="flex justify-between text-sm border-b border-[rgba(31,126,244,0.1)] pb-1">
                      <span className="text-[#a8bfd4]">{r.k}:</span>
                      <span className="text-[#1F7EF4]">{r.v}</span>
                    </div>
                  ))}
                </div>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className="r-btn text-center mt-4 block w-full">
                  <span>&gt; Activate_Node</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security callout */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="sec-div">// SECURITY SPECS</div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label:"ENCRYPTION", value:"AES-256-GCM", sub:"Military-grade encryption on all traffic" },
              { label:"LOGGING_POLICY", value:"ZERO_LOGS", sub:"No connection logs, no DNS logs, no traffic inspection" },
              { label:"IP_TYPE", value:"DEDICATED_IPv4", sub:"Your own IP address — not shared with other users" },
            ].map((s, i) => (
              <div key={i} className="border border-[rgba(31,126,244,0.3)] p-5 hover:border-[#1F7EF4] transition-colors">
                <p className="text-xs tracking-widest text-[#52CAFC] mb-2">{s.label}</p>
                <p className="text-lg font-bold text-[#1F7EF4] glow mb-2">{s.value}</p>
                <p className="text-[15px] text-[#a8bfd4]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="sec-div">// FREQUENTLY ASKED</div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-[rgba(31,126,244,0.3)] hover:border-[rgba(31,126,244,0.5)] transition-colors">
                <button className="w-full text-left px-4 py-3 flex justify-between items-center" onClick={() => setFaqOpen(faqOpen===i?null:i)}>
                  <span className="text-[15px] font-semibold text-white"><span className="text-[#52CAFC] font-mono">Q: </span>{faq.q}</span>
                  <span className="text-[#1F7EF4] text-xs">{faqOpen===i ? "[-]" : "[+]"}</span>
                </button>
                {faqOpen===i && (
                  <div className="border-t border-[rgba(31,126,244,0.2)] px-4 py-3">
                    <p className="text-[15px] text-[#a8bfd4] leading-relaxed"><span className="text-[#1F7EF4]">A: </span>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
