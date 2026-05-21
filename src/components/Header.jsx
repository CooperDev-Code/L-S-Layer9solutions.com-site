import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [time, setTime] = useState("");
  const loginRef = useRef(null);

  useEffect(() => {
    const tick = () => setTime(new Date().toISOString().replace("T"," ").substring(0,19) + " UTC");
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const navLink = "font-mono text-xs font-semibold uppercase tracking-widest text-[#a8bfd4] hover:text-white transition-colors duration-150 cursor-pointer";

  return (
    <header className="bg-[#04111e] border-b border-[rgba(31,126,244,0.3)] sticky top-0 z-50">
      {/* Status bar */}
      <div className="border-b border-[rgba(31,126,244,0.12)] px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-mono text-[10px] text-[#506070]">
          <span>// LAYER_9_SYSTEMS &nbsp;·&nbsp; STATUS: <span className="text-[#00e676]">OPERATIONAL</span> &nbsp;·&nbsp; UPTIME: <span className="text-[#1F7EF4]">99.9%</span></span>
          <span className="hidden md:block">{time}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-mono font-bold text-xl text-[#1F7EF4] tracking-tight group-hover:text-[#52CAFC] transition-colors">
            Layer<span className="text-[#52CAFC]">9</span>
          </span>
          <span className="font-mono text-xs text-[#506070] hidden sm:inline tracking-widest">.SOLUTIONS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className={navLink}>Home</Link>
          <Link href="/shared-hosting" className={navLink}>Hosting</Link>
          <Link href="/private-vpn" className={navLink}>VPN</Link>
          <Link href="/mail-relay" className={navLink}>Mail Relay</Link>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2a3a50] cursor-not-allowed">Connect <span className="text-[9px]">[SOON]</span></span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2a3a50] cursor-not-allowed">eSIM <span className="text-[9px]">[SOON]</span></span>
          <Link href="/about" className={navLink}>About</Link>
          <Link href="/contact" className={navLink}>Contact</Link>

          {/* Login dropdown */}
          <div className="relative" ref={loginRef}
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}>
            <button className="r-btn text-[10px] px-5 py-2.5"><span>&gt;_ Access</span></button>
            {loginOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[#071828] border border-[rgba(31,126,244,0.4)] glow-box z-50">
                <div className="border-b border-[rgba(31,126,244,0.2)] px-4 py-2 font-mono text-[9px] text-[#506070] tracking-widest">SELECT PORTAL</div>
                {[
                  { href:"https://clients.layer9solutions.com", label:"Client Portal", id:"1" },
                  { href:"https://panel9.layer9solutions.com", label:"Panel9 Control", id:"2" },
                  { href:"https://webmail.layer9solutions.com", label:"Webmail", id:"3" },
                ].map(item => (
                  <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-[#a8bfd4] hover:bg-[rgba(31,126,244,0.08)] hover:text-white transition-colors border-b border-[rgba(31,126,244,0.1)] last:border-0">
                    <span className="font-mono text-[#1F7EF4] text-xs font-bold">[{item.id}]</span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile burger */}
        <button className="lg:hidden border border-[rgba(31,126,244,0.4)] p-2 text-[#1F7EF4]" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Prompt bar */}
      <div className="hidden lg:block border-t border-[rgba(31,126,244,0.08)] px-6 py-1.5">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] text-[#506070]">
            <span className="text-[#1F7EF4]">root@layer9</span><span className="text-[#52CAFC]">:~$</span>
            <span className="ml-2 text-[#3a5570]">echo "Enterprise cloud · UK infrastructure · 24/7 support"</span>
            <span className="cursor ml-1" />
          </span>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[rgba(31,126,244,0.3)] bg-[#071828] px-6 py-5 space-y-1">
          {[
            { href:"/", label:"Home" },
            { href:"/shared-hosting", label:"Hosting" },
            { href:"/private-vpn", label:"VPN" },
            { href:"/mail-relay", label:"Mail Relay" },
            { href:"/about", label:"About" },
            { href:"/contact", label:"Contact" },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className="block font-mono text-xs font-semibold uppercase tracking-widest text-[#a8bfd4] hover:text-white py-2.5 border-b border-[rgba(31,126,244,0.08)] last:border-0 transition-colors">
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <p className="font-mono text-[9px] text-[#506070] uppercase tracking-widest mb-3">Access Portals</p>
            {[
              { href:"https://clients.layer9solutions.com", label:"Client Portal", id:"1" },
              { href:"https://panel9.layer9solutions.com", label:"Panel9 Control", id:"2" },
              { href:"https://webmail.layer9solutions.com", label:"Webmail", id:"3" },
            ].map(item => (
              <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a8bfd4] hover:text-white py-2 transition-colors">
                <span className="font-mono text-[#1F7EF4] text-xs font-bold">[{item.id}]</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
