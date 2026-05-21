import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(form),
    });
    if (res.ok) { setStatus("success"); setForm({ name:"", email:"", subject:"", message:"" }); }
    else setStatus("error");
  };

  const inputClass = "w-full bg-[#04111e] border border-[rgba(31,126,244,0.3)] focus:border-[#1F7EF4] outline-none px-4 py-3.5 text-[15px] text-white placeholder-[#3a5570] transition-colors font-sans";

  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Contact Layer 9 Solutions — Sales & Support | 24/7</title>
        <meta name="description" content="Get in touch with Layer 9 Solutions. Sales, support, and general enquiries. We're online 24/7." />
        <link rel="canonical" href="https://layer9solutions.com/contact" />
      </Head>
      <Header />

      {/* Hero */}
      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-4xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// CONTACT_US // OPEN_CHANNEL</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="text-[#52CAFC]">// </span>Get_In_Touch<span className="cursor" />
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-xl leading-relaxed">Sales enquiries, technical support, or general questions — we respond fast.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Form */}
          <div>
            <div className="sec-div">// SEND A MESSAGE</div>
            <div className="t-box glow-box">
              <div className="t-box-inner">
                <p className="text-xs text-[#4a6080] tracking-widest mb-4">root@layer9:~$ ./contact_form.sh</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono text-[#52CAFC] tracking-widest mb-1">YOUR_NAME</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#52CAFC] tracking-widest mb-1">EMAIL_ADDRESS</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#52CAFC] tracking-widest mb-1">SUBJECT</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#52CAFC] tracking-widest mb-1">MESSAGE_BODY</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows={5} required className={inputClass + " resize-none"} />
                  </div>

                  {status === "success" && (
                    <div className="border border-[#00e676] px-4 py-2 text-sm font-mono text-[#00e676]">
                      [✓] MESSAGE_TRANSMITTED_SUCCESSFULLY
                    </div>
                  )}
                  {status === "error" && (
                    <div className="border border-red-500 px-4 py-2 text-sm font-mono text-red-400">
                      [✗] TRANSMISSION_FAILED — try again or email us directly
                    </div>
                  )}

                  <button type="submit" disabled={status === "sending"} className="r-btn w-full">
                    <span>{status === "sending" ? "&gt; Transmitting..." : "&gt; Send_Message →"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="sec-div">// CONTACT DETAILS</div>
            <div className="space-y-4">
              {[
                { label:"SALES", email:"sales@layer9solutions.com", note:"New services & pricing" },
                { label:"SUPPORT", email:"support@layer9solutions.com", note:"Technical issues & help" },
                { label:"ABUSE", email:"abuse@layer9solutions.com", note:"Abuse reports" },
                { label:"LEGAL", email:"legal@layer9solutions.com", note:"Legal & compliance" },
              ].map(c => (
                <div key={c.label} className="border border-[rgba(31,126,244,0.3)] p-4 hover:border-[#1F7EF4] transition-colors">
                  <p className="text-xs font-mono tracking-widest text-[#52CAFC] mb-1">{c.label}</p>
                  <a href={`mailto:${c.email}`} className="text-[15px] text-[#1F7EF4] hover:text-[#52CAFC] transition-colors">{c.email}</a>
                  <p className="text-[15px] text-[#a8bfd4] mt-1">{c.note}</p>
                </div>
              ))}

              {/* Hours */}
              <div className="border border-[rgba(31,126,244,0.3)] p-4 mt-2">
                <p className="text-xs font-mono tracking-widest text-[#52CAFC] mb-2">SUPPORT_HOURS</p>
                <p className="text-[15px] text-[#e2eaf2]"><span className="text-white font-semibold">07:00–18:00</span> daily — direct response</p>
                <p className="text-sm text-[#e2eaf2] mt-1"><span className="text-white font-semibold">24/7</span> — ticket system always open</p>
              </div>

              {/* Address */}
              <div className="border border-[rgba(31,126,244,0.3)] p-4">
                <p className="text-xs font-mono tracking-widest text-[#52CAFC] mb-2">REGISTERED_ADDRESS</p>
                <p className="text-[15px] text-[#a8bfd4] leading-relaxed">
                  Layer 9 Solutions Ltd<br />
                  124 City Road<br />
                  London, EC1V 2NX<br />
                  England, United Kingdom<br />
                  <span className="text-[#1F7EF4]">Co. No: 14857666</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
