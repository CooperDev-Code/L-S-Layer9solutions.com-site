import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PLANS = [
  { id:"01", name:"Dev", price:"£5", period:"/mo", emails:"1,000", domains:"1", auth:"User/Pass", webhooks:false, dedip:false, cta:"Start_Testing",
    href:"https://clients.layer9solutions.com/index.php?rp=/store/smtp-mail-relay/dev" },
  { id:"02", name:"Starter", price:"£10", period:"/mo", emails:"10,000", domains:"1", auth:"User/Pass", webhooks:false, dedip:"+ £7.99/mo", cta:"Get_Started",
    href:"https://clients.layer9solutions.com/index.php?rp=/store/smtp-mail-relay/starter" },
  { id:"03", name:"Professional", price:"£20", period:"/mo", emails:"25,000", domains:"3", auth:"User/Pass + IP", webhooks:true, dedip:"+ £7.99/mo", cta:"Deploy_Now", highlight:true,
    href:"https://clients.layer9solutions.com/index.php?rp=/store/smtp-mail-relay/professional" },
  { id:"04", name:"Business", price:"£35", period:"/mo", emails:"75,000", domains:"10", auth:"User/Pass + IP", webhooks:true, dedip:"+ £7.99/mo", cta:"Deploy_Now",
    href:"https://clients.layer9solutions.com/index.php?rp=/store/smtp-mail-relay/business" },
  { id:"05", name:"Enterprise", price:"Custom", period:"", emails:"100,000+", domains:"Unlimited", auth:"User/Pass + IP", webhooks:true, dedip:"INCLUDED", cta:"Contact_Sales",
    href:"/contact" },
];

const FEATURES = [
  { label:"HIGH_DELIVERABILITY", detail:"Clean IPs, smart routing, inbox-first delivery optimisation." },
  { label:"SIMPLE_SMTP_SETUP", detail:"Works with WordPress, apps, CRMs — plug in credentials and go." },
  { label:"SPF_DKIM_DMARC", detail:"Full email authentication on every plan. No reputation issues." },
  { label:"TLS_ENCRYPTION", detail:"STARTTLS and direct TLS for all outbound traffic." },
  { label:"WEBHOOKS", detail:"Track delivery events, opens, and bounces. Pro plans and above." },
  { label:"DELIVERY_LOGS", detail:"Full send history with per-message status and error codes." },
];

const FAQS = [
  { q:"What authentication methods are supported?", a:"PLAIN, LOGIN, and CRAM-MD5 are all supported. IP-based authentication is available on Professional plans and above — just register your public IP in the dashboard." },
  { q:"Can I use any From address?", a:"Your From address must belong to a verified domain you've added and authenticated via SPF/DKIM. This protects your sender reputation and ensures deliverability." },
  { q:"Can I add a dedicated IP?", a:"Yes — add a dedicated sending IP for £7.99/month on any plan except Dev. Enterprise plans have one included as standard." },
  { q:"Is TLS encryption supported?", a:"All email traffic is secured using STARTTLS or direct TLS. We do not transmit unencrypted mail." },
  { q:"What happens if I exceed my monthly limit?", a:"We'll notify you when you approach your limit. You can upgrade your plan at any time from the client portal, or contact us to discuss burst sending options." },
];

export default function MailRelay() {
  const [faqOpen, setFaqOpen] = useState(null);
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Layer9 Mail Relay — SMTP Mail Relay Service UK from £5/mo | Layer 9 Solutions</title>
        <meta name="description" content="Professional SMTP mail relay for apps, systems and businesses. High deliverability, SPF/DKIM, webhooks, TLS. Layer9 Mail Relay from £5/month." />
        <meta name="keywords" content="SMTP relay, mail relay, email relay, transactional email, SMTP service, email delivery UK" />
        <link rel="canonical" href="https://layer9solutions.com/mail-relay" />
        <meta property="og:title" content="Layer9 Mail Relay — SMTP Mail Relay Service UK" />
        <meta property="og:url" content="https://layer9solutions.com/mail-relay" />
      </Head>
      <Header />

      {/* Hero */}
      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// SERVICE_03 // SMTP_MAIL_RELAY</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="text-[#52CAFC]">// </span>Layer_9<br />
            <span className="text-[#1F7EF4] glow">Mail_Relay</span>
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-xl leading-relaxed mb-6">
            Reliable, scalable outbound SMTP for transactional email. High deliverability, full authentication, and delivery controls — starting at £5/month.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-mono">
            <span className="badge-online">● RELAY_ONLINE</span>
            <span className="text-[#a8bfd4]">│</span>
            <span className="text-[#1F7EF4]">SPF / DKIM / DMARC</span>
            <span className="text-[#a8bfd4]">│</span>
            <span className="text-[#1F7EF4]">TLS_ENCRYPTED</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="sec-div">// KEY FEATURES</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
                className="border border-[rgba(31,126,244,0.3)] p-4 hover:border-[#1F7EF4] transition-colors">
                <p className="text-xs tracking-[3px] text-[#52CAFC] mb-2">{f.label}</p>
                <p className="text-[15px] text-[#a8bfd4] leading-relaxed">{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-6xl mx-auto">
          <div className="sec-div">// RELAY PLANS</div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.id}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
                className={`border p-5 flex flex-col relative transition-all duration-300 hover:glow-box ${plan.highlight ? "border-[#1F7EF4] bg-[rgba(31,126,244,0.07)]" : "border-[rgba(31,126,244,0.3)] hover:border-[#1F7EF4]"}`}>
                {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F7EF4] text-black text-sm font-mono font-bold px-3 py-1 tracking-widest">[POPULAR]</span>}
                <span className="text-xs text-[#4a6080] mb-2">[{plan.id}]</span>
                <h3 className="text-sm font-bold text-white mb-2"><span className="text-[#52CAFC]">// </span>{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-xl font-bold text-[#1F7EF4] glow">{plan.price}</span>
                  <span className="text-[15px] text-[#e2eaf2]">{plan.period}</span>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { k:"EMAILS/MO", v:plan.emails },
                    { k:"DOMAINS", v:plan.domains },
                    { k:"AUTH", v:plan.auth },
                    { k:"WEBHOOKS", v:plan.webhooks ? "INCLUDED" : "—" },
                    { k:"DED_IP", v:plan.dedip || "—" },
                  ].map(r => (
                    <div key={r.k} className="flex justify-between text-sm border-b border-[rgba(31,126,244,0.1)] pb-1">
                      <span className="text-[#a8bfd4]">{r.k}:</span>
                      <span className={r.v === "—" ? "text-[#2a3a50]" : "text-[#1F7EF4]"}>{r.v}</span>
                    </div>
                  ))}
                </div>
                <a href={plan.href} target={plan.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="r-btn text-center mt-4 block w-full text-sm">
                  <span>&gt; {plan.cta}</span>
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-[#a8bfd4] text-center mt-6">All plans include: SPF/DKIM • TLS Encryption • Delivery Logs • 24/7 Support</p>
        </div>
      </section>

      {/* Quick-start */}
      <section className="py-16 px-6 border-b border-[rgba(31,126,244,0.3)]">
        <div className="max-w-3xl mx-auto">
          <div className="sec-div">// QUICK START</div>
          <div className="t-box glow-box">
            <div className="t-box-inner space-y-3">
              <p className="text-xs text-[#4a6080] mb-4 tracking-widest">root@yourserver:~$ cat /etc/smtp/layer9.conf</p>
              {[
                { k:"SMTP_HOST", v:"relay.layer9solutions.com" },
                { k:"SMTP_PORT", v:"587  # STARTTLS" },
                { k:"SMTP_AUTH", v:"PLAIN / LOGIN / CRAM-MD5" },
                { k:"SMTP_ENCRYPTION", v:"STARTTLS (required)" },
                { k:"FROM_DOMAIN", v:"your-verified-domain.com" },
              ].map(r => (
                <div key={r.k} className="flex gap-4 text-sm border-b border-[rgba(31,126,244,0.1)] pb-2">
                  <span className="text-[#52CAFC] w-40 shrink-0">{r.k}</span>
                  <span className="text-[#c8d8e8]">{r.v}</span>
                </div>
              ))}
              <p className="text-[15px] text-[#e2eaf2] pt-2">Compatible with WordPress, Laravel, Python, Node.js, PHP mail(), and any SMTP-capable app.</p>
            </div>
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
