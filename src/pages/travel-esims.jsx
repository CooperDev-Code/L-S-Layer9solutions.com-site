import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TravelESIM() {
  return (
    <div className="bg-[#04111e] min-h-screen">
      <Head>
        <title>Layer9 eSIM — Global Travel eSIM | Layer 9 Solutions</title>
        <meta name="description" content="Data-only eSIMs for 190+ countries. No roaming charges, no contracts. Instant activation. Launching soon from Layer 9 Solutions." />
        <link rel="canonical" href="https://layer9solutions.com/travel-esims" />
      </Head>
      <Header />

      <section className="border-b border-[rgba(31,126,244,0.3)] py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"linear-gradient(var(--primary) 1px,transparent 1px),linear-gradient(90deg,var(--primary) 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-sm tracking-[4px] text-[#52CAFC] mb-4">// SERVICE_05 // GLOBAL_ESIM</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            <span className="text-[#52CAFC]">// </span>Layer_9<br />
            <span className="text-[#1F7EF4] glow">eSIM</span>
          </h1>
          <p className="text-[15px] text-[#e2eaf2] max-w-xl leading-relaxed mb-6">
            Data-only eSIMs for 190+ countries. Instant QR activation. No roaming fees, no physical SIMs, no contracts.
          </p>
          <span className="badge-soon text-sm">[LAUNCHING_SOON]</span>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="t-box glow-box max-w-md mx-auto">
            <div className="t-box-inner text-left">
              <p className="text-xs text-[#4a6080] tracking-widest mb-4">root@layer9:~$ ./esim_status.sh</p>
              {[
                { k:"COVERAGE", v:"190+ Countries" },
                { k:"TYPE", v:"Data Only (No Voice)" },
                { k:"ACTIVATION", v:"Instant QR Code" },
                { k:"CONTRACTS", v:"None" },
                { k:"STATUS", v:"LAUNCHING_SOON" },
              ].map(r => (
                <div key={r.k} className="flex justify-between py-2 border-b border-[rgba(31,126,244,0.1)] last:border-0">
                  <span className="text-[15px] text-[#e2eaf2]">{r.k}:</span>
                  <span className={`text-sm ${r.k === "STATUS" ? "text-[#52CAFC]" : "text-[#1F7EF4]"}`}>{r.v}</span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-[rgba(31,126,244,0.2)]">
                <p className="text-[15px] text-[#e2eaf2] mb-3">Register interest and we'll notify you at launch:</p>
                <a href="/contact" className="r-btn block text-center w-full"><span>&gt; Notify_Me →</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
