import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SERVICES = [
  { id:"01", tag:"HOSTING", title:"Shared Hosting", slug:"shared-hosting",
    desc:"Enterprise-grade Linux hosting with Panel9 control panel. Free SSL, daily backups, 99.9% uptime.",
    specs:["Linux / Panel9","Free SSL","Daily Backups","99.9% SLA"], price:"from £1.99/mo" },
  { id:"02", tag:"SECURITY", title:"Private VPN", slug:"private-vpn",
    desc:"Your own dedicated VPN node. Zero logs, WireGuard & OpenVPN, dedicated IPv4 included.",
    specs:["WireGuard / OpenVPN","Zero Logs Policy","Dedicated IPv4","Unlimited Bandwidth"], price:"from £5.99/mo" },
  { id:"03", tag:"EMAIL", title:"Mail Relay", slug:"mail-relay",
    desc:"Reliable SMTP relay for apps, systems, and businesses. High deliverability built in.",
    specs:["SMTP Relay","DKIM / SPF / DMARC","Delivery Logs","Webhooks"], price:"from £0.99/mo" },
  { id:"04", tag:"CONNECTIVITY", title:"Layer 9 Connect", slug:null, soon:true,
    desc:"Ultrafast UK fibre broadband combined with hosted VoIP. Full UCaaS stack for modern businesses.",
    specs:["UK Fibre","SIP Trunks","VoiceEdge IVR","Mobile Apps"], price:"Coming Soon" },
  { id:"05", tag:"MOBILE", title:"Layer 9 eSIM", slug:null, soon:true,
    desc:"Data-only eSIMs for 190+ countries. Instant QR activation, no contracts, no roaming fees.",
    specs:["190+ Countries","Instant Activation","Data Only","No Contracts"], price:"Coming Soon" },
];

const STATS = [
  { label:"Uptime SLA",      value:"99.9%", pct:"99.9" },
  { label:"UK Infrastructure", value:"100%",  pct:"100"  },
  { label:"Support",         value:"24/7",  pct:"100"  },
  { label:"Happy Clients",   value:"500+",  pct:"85"   },
];

const WHY = [
  "UK-based infrastructure — not resold overseas capacity",
  "Real engineers on support, not ticket bots",
  "Custom solutions, not one-size-fits-all packages",
  "Transparent pricing with no hidden renewal fees",
];

function BootSequence() {
  const lines = [
    "Initializing Layer 9 Systems...",
    "Loading enterprise modules............[OK]",
    "Starting cloud infrastructure.........[OK]",
    "Connecting UK datacenters.............[OK]",
    "Enabling security protocols...........[OK]",
    "All systems operational.",
  ];
  const [visible, setVisible] = useState([]);
  useEffect(() => {
    lines.forEach((_, i) => setTimeout(() => setVisible(v => [...v, i]), i * 300));
  }, []);
  return (
    <div className="font-mono text-sm space-y-1.5">
      {lines.map((line, i) => (
        <div key={i} className={`transition-opacity duration-300 ${visible.includes(i) ? "opacity-100" : "opacity-0"}`}>
          <span className="text-[#1F7EF4]">&gt; </span>
          {i === lines.length - 1
            ? <span className="text-[#00e676] font-semibold">{line}</span>
            : <span className="text-[#a8bfd4]">{line}</span>}
        </div>
      ))}
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Layer 9 Solutions — Enterprise Cloud Hosting, VPN & Connectivity | UK</title>
        <meta name="description" content="Layer 9 Solutions provides enterprise-grade cloud hosting with Panel9, private VPN servers, SMTP mail relay, and business connectivity. UK-based infrastructure." />
        <meta name="keywords" content="cloud hosting, web hosting, VPN server, SMTP relay, Panel9, dedicated VPN, UK hosting" />
        <link rel="canonical" href="https://layer9solutions.com/" />
        <meta property="og:title" content="Layer 9 Solutions — Enterprise Cloud Hosting & VPN | UK" />
        <meta property="og:description" content="Enterprise cloud hosting with Panel9, private VPN, SMTP mail relay. UK infrastructure." />
        <meta property="og:url" content="https://layer9solutions.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Organization",
          "name":"Layer 9 Solutions Ltd","url":"https://layer9solutions.com",
          "description":"Enterprise cloud hosting, VPN, and connectivity solutions",
          "address":{"@type":"PostalAddress","streetAddress":"124 City Road","addressLocality":"London","postalCode":"EC1V 2NX","addressCountry":"GB"},
          "contactPoint":{"@type":"ContactPoint","contactType":"Customer Service","email":"support@layer9solutions.com"}
        })}} />
      </Head>

      <Header />

      {/* ── HERO ── */}
      <section className="relative border-b border-[rgba(31,126,244,0.3)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage:"linear-gradient(rgba(31,126,244,1) 1px,transparent 1px),linear-gradient(90deg,rgba(31,126,244,1) 1px,transparent 1px)",backgroundSize:"48px 48px"}} />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(31,126,244,0.04)] via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} transition={{duration:0.65}}>
            <p className="font-mono text-xs font-bold tracking-[4px] text-[#52CAFC] mb-5 uppercase">// Layer 9 Solutions &nbsp;·&nbsp; UK Infrastructure</p>
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Enterprise<br />
              <span className="text-[#1F7EF4] glow">Cloud Solutions</span><br />
              <span className="text-[#a8bfd4]">Built for Business.</span>
            </h1>
            <p className="text-[16px] text-[#a8bfd4] leading-relaxed mb-8 max-w-lg">
              Hosting, VPN, mail relay, and connectivity — purpose-built for developers, agencies, and businesses that demand serious UK infrastructure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shared-hosting" className="r-btn"><span>&gt; Get Started</span></Link>
              <Link href="/contact" className="r-btn-ghost"><span>&gt; Talk to Sales</span></Link>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:0.65,delay:0.18}}>
            <div className="t-box glow-box">
              <div className="t-box-inner">
                <p className="font-mono text-[10px] text-[#506070] mb-5 tracking-widest">root@layer9:~$ ./boot_sequence.sh</p>
                <BootSequence />
                <div className="mt-6 pt-5 border-t border-[rgba(31,126,244,0.15)] grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    { k:"Kernel",   v:"Linux 6.x LTS" },
                    { k:"Panel",    v:"Panel9 v3"      },
                    { k:"Location", v:"London, UK"     },
                    { k:"Network",  v:"10 Gbps"        },
                  ].map(r => (
                    <div key={r.k}>
                      <span className="font-mono text-[10px] text-[#506070] uppercase tracking-wider">{r.k} </span>
                      <span className="font-mono text-sm text-white font-semibold">{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-[rgba(31,126,244,0.2)] py-14 bg-[rgba(7,24,40,0.5)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s,i) => (
            <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="text-center">
              <p className="font-mono text-3xl md:text-4xl font-bold text-[#1F7EF4] glow mb-2">{s.value}</p>
              <p className="text-sm font-medium text-[#a8bfd4]">{s.label}</p>
              <div className="mt-3 h-px w-full bg-[rgba(31,126,244,0.12)] relative overflow-hidden">
                <div className="progress-bar h-px" style={{"--pct":`${s.pct}%`}} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 border-b border-[rgba(31,126,244,0.2)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-mono text-xs text-[#52CAFC] tracking-[3px] mb-3">// OUR SERVICES</p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">Everything your business needs,<br /><span className="text-[#1F7EF4]">on one platform.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((svc, i) => (
              <motion.div key={svc.id}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
                className={`svc-card ${svc.soon ? "opacity-50 pointer-events-none" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] font-bold tracking-[3px] text-[#52CAFC]">{svc.tag}</span>
                  <span className="font-mono text-[9px] text-[#2a3a50]">[{svc.id}]</span>
                </div>
                <h3 className="font-mono text-lg font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-[15px] text-[#a8bfd4] leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-2 mb-6">
                  {svc.specs.map(sp => (
                    <li key={sp} className="flex items-center gap-2 text-[15px] text-[#e2eaf2]">
                      <span className="text-[#1F7EF4] font-mono shrink-0">✓</span>{sp}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(31,126,244,0.2)]">
                  <span className={`font-mono text-sm font-bold ${svc.soon ? "text-[#506070]" : "text-[#1F7EF4]"}`}>{svc.price}</span>
                  {svc.soon
                    ? <span className="badge-soon">[COMING SOON]</span>
                    : <Link href={`/${svc.slug}`} className="font-mono text-xs text-[#1F7EF4] hover:text-[#52CAFC] transition-colors font-semibold">Learn More →</Link>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LAYER 9 ── */}
      <section className="py-24 px-6 border-b border-[rgba(31,126,244,0.2)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-[#52CAFC] tracking-[3px] mb-4">// THE HUMAN LAYER</p>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
              In the OSI model,<br />
              <span className="text-[#1F7EF4] glow">Layer 9 is the human layer.</span><br />
              <span className="text-[#a8bfd4] text-2xl font-normal">That's where we operate.</span>
            </h2>
            <p className="text-[16px] text-[#a8bfd4] leading-relaxed mb-8">
              We don't just sell server space. We build solutions that work for real businesses — with custom configurations, genuine support, and infrastructure that scales with you.
            </p>
            <ul className="space-y-4">
              {WHY.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[#1F7EF4] shrink-0 mt-0.5">[✓]</span>
                  <span className="text-[15px] text-[#e2eaf2]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="t-box glow-box">
            <div className="t-box-inner">
              <p className="font-mono text-[10px] text-[#506070] mb-6 tracking-widest">root@layer9:~$ cat /etc/values.conf</p>
              <div className="space-y-5">
                {[
                  { k:"EXPERTISE",    v:"Enterprise-grade knowledge, accessible pricing" },
                  { k:"TRANSPARENCY", v:"No hidden costs, no surprise renewal fees"      },
                  { k:"RELIABILITY",  v:"99.9% uptime SLA on all services"               },
                  { k:"PROXIMITY",    v:"UK-based, UK-focused, UK-staffed"               },
                  { k:"SUPPORT",      v:"Real humans, available 24 hours a day"          },
                ].map(r => (
                  <div key={r.k} className="border-l-2 border-[rgba(31,126,244,0.4)] pl-4">
                    <p className="font-mono text-[10px] font-bold text-[#52CAFC] tracking-widest mb-1">{r.k}</p>
                    <p className="text-[15px] text-[#e2eaf2]">{r.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs text-[#52CAFC] tracking-[3px] mb-4">// READY TO DEPLOY</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-5">
            Build your connected<br /><span className="text-[#1F7EF4] glow">infrastructure today.</span>
          </h2>
          <p className="text-[16px] text-[#a8bfd4] mb-10 max-w-xl mx-auto leading-relaxed">
            From £1.99/month hosting to enterprise VPN and mail relay — Layer 9 has the stack your business needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shared-hosting" className="r-btn"><span>&gt; View Hosting Plans</span></Link>
            <Link href="/contact" className="r-btn-ghost"><span>&gt; Talk to Sales</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
