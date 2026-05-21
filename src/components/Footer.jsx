import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#071828] border-t border-[rgba(31,126,244,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-mono text-base font-bold text-white mb-3">Layer<span className="text-[#1F7EF4]">9</span><span className="text-[#506070] text-xs">.SOLUTIONS</span></p>
          <p className="text-sm text-[#a8bfd4] leading-relaxed mb-4">
            Enterprise cloud hosting, VPN, and connectivity for UK businesses.
          </p>
          <p className="text-xs text-[#506070] leading-relaxed font-mono">
            Layer 9 Solutions Ltd<br />
            124 City Road, London<br />
            EC1V 2NX
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#52CAFC] mb-4">Services</p>
          {[
            { href:"/shared-hosting", label:"Shared Hosting" },
            { href:"/private-vpn",    label:"Private VPN"    },
            { href:"/mail-relay",     label:"Mail Relay"     },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block text-sm text-[#8aa8c4] hover:text-white py-1.5 transition-colors">{l.label}</Link>
          ))}
          <span className="block text-sm text-[#2a3a50] py-1.5">Connect <span className="font-mono text-[9px]">[SOON]</span></span>
          <span className="block text-sm text-[#2a3a50] py-1.5">eSIM <span className="font-mono text-[9px]">[SOON]</span></span>
        </div>

        {/* Company */}
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#52CAFC] mb-4">Company</p>
          {[
            { href:"/about",         label:"About Us"      },
            { href:"/contact",       label:"Contact"       },
            { href:"/legal",         label:"Legal Hub"     },
            { href:"/legal/privacy", label:"Privacy Policy"},
          ].map(l => (
            <Link key={l.href} href={l.href} className="block text-sm text-[#8aa8c4] hover:text-white py-1.5 transition-colors">{l.label}</Link>
          ))}
        </div>

        {/* Access */}
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#52CAFC] mb-4">Access</p>
          {[
            { href:"https://clients.layer9solutions.com", label:"Client Portal"  },
            { href:"https://panel9.layer9solutions.com",  label:"Panel9 Control" },
            { href:"https://webmail.layer9solutions.com", label:"Webmail"        },
          ].map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#8aa8c4] hover:text-white py-1.5 transition-colors">{l.label}</a>
          ))}
          <div className="mt-5 pt-5 border-t border-[rgba(31,126,244,0.15)]">
            <p className="font-mono text-[9px] text-[#506070] uppercase tracking-widest mb-2">Support</p>
            <a href="mailto:support@layer9solutions.com" className="text-sm text-[#8aa8c4] hover:text-white transition-colors">support@layer9solutions.com</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(31,126,244,0.15)] px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-mono text-[10px] text-[#3a5570]">
            © {year} Layer 9 Solutions Ltd &nbsp;·&nbsp; Company No. 14857666 &nbsp;·&nbsp; All rights reserved
          </p>
          <p className="font-mono text-[10px]">
            <span className="text-[#3a5570]">Status: </span><span className="text-[#00e676]">Operational</span>
            <span className="text-[#3a5570]"> &nbsp;·&nbsp; SLA: </span><span className="text-[#1F7EF4]">99.9%</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
