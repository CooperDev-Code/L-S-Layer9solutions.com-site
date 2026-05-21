import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PLANS = [
  { id:"01", name:"Starter", price:"£1.99", period:"/mo", disk:"10GB", bw:"100GB", sites:"1", email:"1", db:"1", highlight:false },
  { id:"02", name:"Premium", price:"£2.99", period:"/mo", disk:"25GB", bw:"250GB", sites:"5", email:"10", db:"5", highlight:false },
  { id:"03", name:"Advanced", price:"£4.99", period:"/mo", disk:"50GB", bw:"500GB", sites:"20", email:"50", db:"20", highlight:true },
  { id:"04", name:"Dev_Unlimited", price:"£6.99", period:"/mo", disk:"100GB", bw:"Unlimited", sites:"Unlimited", email:"Unlimited", db:"Unlimited", highlight:false },
];

const ORDER_LINKS = {
  Starter:"https://clients.layer9solutions.com/index.php?rp=/store/shared-hosting/starter",
  Premium:"https://clients.layer9solutions.com/index.php?rp=/store/shared-hosting/premium",
  Advanced:"https://clients.layer9solutions.com/index.php?rp=/store/shared-hosting/advanced",
  Dev_Unlimited:"https://clients.layer9solutions.com/index.php?rp=/store/shared-hosting/dev",
};

const FEATURES = [
  "Free SSL certificates (Let's Encrypt)", "Daily automated backups",
  "Panel9 control panel", "One-click PHP / WordPress installs",
  "Custom DNS management", "99.9% uptime SLA",
  "24/7 technical support", "UK-based infrastructure",
];

const FAQS = [
  { q:"What is Panel9?", a:"Panel9 is our custom hosting control panel — a modern, clean alternative to cPanel. It gives you full control over websites, email, databases, DNS, and SSL without touching the command line." },
  { q:"Can I host WordPress?", a:"Yes. One-click WordPress installs are included on all plans. Our Linux infrastructure is fully optimised for PHP-based CMS platforms." },
  { q:"What happens if I need more resources?", a:"You can upgrade between plans any time from your client portal. Upgrades are applied instantly — no downtime required." },
  { q:"Is there a free trial?", a:"We offer a 7-day money-back guarantee on all shared hosting plans. If it's not right for you, we'll refund in full." },
];

export default function SharedHosting() {
  const [faqOpen, setFaqOpen] = useState(null);
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Shared Web Hosting UK — Panel9 Linux Hosting from £1.99/mo | Layer 9 Solutions</title>
        <meta name="description" content="Affordable UK shared web hosting with Panel9 control panel from £1.99/month. Free SSL, daily backups, 24/7 support. Perfect for WordPress and PHP sites." />
        <meta name="keywords" content="shared hosting UK, Panel9 hosting, Linux hosting, WordPress hosting, cheap web hosting UK" />
        <link rel="canonical" href="https://layer9solutions.com/shared-hosting" />
        <meta property="og:title" content="Shared Web Hosting UK — Panel9 Linux from £1.99/mo" />
        <meta property="og:description" content="UK shared hosting with Panel9 from £1.99/month. Free SSL, daily backups, 24/7 support." />
        <meta property="og:url" content="https://layer9solutions.com/shared-hosting" />
      </Head>
      <Header />

      {/* Hero */}
      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// SERVICE_01 // SHARED_WEB_HOSTING</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="text-[#52CAFC]">// </span>Layer_9<br />
            <span className="text-[#1F7EF4] glow">Hosting</span>
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-xl leading-relaxed mb-6">
            Enterprise-grade Linux hosting with Panel9 control panel. UK infrastructure, free SSL, daily backups — starting at £1.99/month.
          </p>
          <div className="flex items-center gap-4 text-sm font-mono">
            <span className="badge-online">● SYSTEMS_ONLINE</span>
            <span className="text-[#a8bfd4]">│</span>
            <span className="text-[#1F7EF4]">UPTIME: 99.9%</span>
            <span className="text-[#a8bfd4]">│</span>
            <span className="text-[#a8bfd4]">LOCATION: LONDON, UK</span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-6xl mx-auto">
          <div className="sec-div">// HOSTING PLANS</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.id}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                className={`border p-5 relative flex flex-col transition-all duration-300 hover:glow-box ${plan.highlight ? "border-[#1F7EF4] bg-[rgba(31,126,244,0.07)]" : "border-[rgba(31,126,244,0.3)] hover:border-[#1F7EF4]"}`}>
                {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F7EF4] text-black text-sm font-mono font-bold px-3 py-1 tracking-widest">[POPULAR]</span>}
                <span className="text-xs text-[#4a6080] mb-2">[{plan.id}]</span>
                <h3 className="text-sm font-bold text-white mb-1"><span className="text-[#52CAFC]">// </span>{plan.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-2xl font-bold text-[#1F7EF4] glow">{plan.price}</span>
                  <span className="text-[15px] text-[#e2eaf2]">{plan.period}</span>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { k:"DISK", v:plan.disk },
                    { k:"BANDWIDTH", v:plan.bw },
                    { k:"WEBSITES", v:plan.sites },
                    { k:"EMAIL_ACCTS", v:plan.email },
                    { k:"DATABASES", v:plan.db },
                  ].map(r => (
                    <div key={r.k} className="flex justify-between text-sm border-b border-[rgba(31,126,244,0.1)] pb-1">
                      <span className="text-[#a8bfd4]">{r.k}:</span>
                      <span className="text-[#1F7EF4]">{r.v}</span>
                    </div>
                  ))}
                </div>
                <a href={ORDER_LINKS[plan.name.replace(" ","_")]} target="_blank" rel="noopener noreferrer" className="r-btn text-center mt-4 block w-full">
                  <span>&gt; Deploy_Now</span>
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-[#a8bfd4] text-center mt-6">All plans include: Free SSL • Daily Backups • Panel9 Control Panel • 24/7 Support</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="sec-div">// INCLUDED FEATURES</div>
          <div className="grid md:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="flex items-center gap-3 border border-[rgba(31,126,244,0.2)] px-4 py-3.5 hover:border-[rgba(31,126,244,0.5)] transition-colors">
                <span className="text-[#1F7EF4] text-xs shrink-0">[✓]</span>
                <span className="text-[15px] text-[#e2eaf2]">{f}</span>
              </motion.div>
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
