import React, { useState, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hostingOpen, setHostingOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const hostingTimeout = useRef(null);
  const loginTimeout = useRef(null);

  const handleHostingEnter = () => {
    clearTimeout(hostingTimeout.current);
    setHostingOpen(true);
  };

  const handleHostingLeave = () => {
    hostingTimeout.current = setTimeout(() => {
      setHostingOpen(false);
    }, 200);
  };

  const handleLoginEnter = () => {
    clearTimeout(loginTimeout.current);
    setLoginOpen(true);
  };

  const handleLoginLeave = () => {
    loginTimeout.current = setTimeout(() => {
      setLoginOpen(false);
    }, 200);
  };

  const navLinkClass =
    "relative font-mono text-sm font-semibold transition text-[#1F7EF4] hover:text-[#52CAFC] uppercase tracking-wider hover:text-shadow-neon";

  return (
    <header className="bg-[#04111e] border-b-2 border-[#1F7EF4] py-4 px-6 sticky top-0 z-50 shadow-lg shadow-[#1F7EF4]/20">
      {/* Terminal header bar */}
      <div className="max-w-7xl mx-auto">
        {/* Top bar - terminal style */}
        <div className="flex items-center justify-between mb-2 text-xs font-mono text-[#52CAFC]">
          <span>// SYSTEM_ONLINE // UPTIME: 99.9% // STATUS: OPERATIONAL</span>
          <span className="hidden md:block">v4.5.0</span>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold font-mono text-[#1F7EF4] neon-text">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[#52CAFC]">[</span>
              <span className="glitch">LAYER_9</span>
              <span className="text-[#52CAFC]">]</span>
              <span className="text-xs text-gray-500 ml-2 hidden md:inline">.SOLUTIONS</span>
            </Link>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={navLinkClass}>
              <span className="text-[#52CAFC]">// </span>Home
            </Link>

            {/* Hosting Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleHostingEnter}
              onMouseLeave={handleHostingLeave}
            >
              <span className="cursor-pointer text-sm font-mono font-semibold text-[#1F7EF4] hover:text-[#52CAFC] uppercase tracking-wider">
                <span className="text-[#52CAFC]">// </span>Hosting
              </span>
              {hostingOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-[#04111e] border-2 border-[#1F7EF4] shadow-lg shadow-[#1F7EF4]/50 z-50 font-mono">
                  <Link
                    href="/shared-hosting"
                    className="block px-4 py-3 text-sm text-[#1F7EF4] hover:bg-[#1F7EF4] hover:text-black transition border-b border-[#1F7EF4]/30"
                  >
                    <span className="text-[#52CAFC]">&gt; </span>Shared Hosting
                  </Link>
                </div>
              )}
            </div>

            <Link href="/private-vpn" className={navLinkClass}>
              <span className="text-[#52CAFC]">// </span>VPN
            </Link>
            <Link href="/mail-relay" className={navLinkClass}>
              <span className="text-[#52CAFC]">// </span>Mail_Relay
            </Link>
            <span className="text-sm font-mono text-gray-600 cursor-not-allowed uppercase tracking-wider">
              <span className="text-gray-700">// </span>Connect<span className="text-gray-700 ml-1">[SOON]</span>
            </span>
            <span className="text-sm font-mono text-gray-600 cursor-not-allowed uppercase tracking-wider">
              <span className="text-gray-700">// </span>eSIM<span className="text-gray-700 ml-1">[SOON]</span>
            </span>
            <Link href="/about" className={navLinkClass}>
              <span className="text-[#52CAFC]">// </span>About
            </Link>
            <Link href="/contact" className={navLinkClass}>
              <span className="text-[#52CAFC]">// </span>Contact
            </Link>

            {/* Login Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleLoginEnter}
              onMouseLeave={handleLoginLeave}
            >
              <button className="retro-btn text-xs px-4 py-2">
                <span className="text-[#52CAFC]">&gt;_ </span>Access
              </button>
              {loginOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#04111e] border-2 border-[#1F7EF4] shadow-lg shadow-[#1F7EF4]/50 z-50 font-mono">
                  <a
                    href="https://clients.layer9solutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-[#1F7EF4] hover:bg-[#1F7EF4] hover:text-black transition border-b border-[#1F7EF4]/30"
                  >
                    <span className="text-[#52CAFC]">[1] </span>Client Portal
                  </a>
                  <a
                    href="https://panel9.layer9solutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-[#1F7EF4] hover:bg-[#1F7EF4] hover:text-black transition border-b border-[#1F7EF4]/30"
                  >
                    <span className="text-[#52CAFC]">[2] </span>Panel9
                  </a>
                  <a
                    href="https://webmail.layer9solutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-[#1F7EF4] hover:bg-[#1F7EF4] hover:text-black transition"
                  >
                    <span className="text-[#52CAFC]">[3] </span>Webmail
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[#1F7EF4] border-2 border-[#1F7EF4] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Terminal command prompt */}
        <div className="mt-2 text-xs font-mono text-gray-600 hidden md:block">
          <span className="text-[#1F7EF4]">root@layer9</span>
          <span className="text-[#52CAFC]">:</span>
          <span className="text-[#1F7EF4]">~</span>
          <span className="text-[#52CAFC]">$</span>
          <span className="ml-2 text-gray-500">echo "Welcome to Layer 9 Solutions"</span>
          <span className="terminal-cursor"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4 border-t-2 border-[#1F7EF4] pt-4 bg-black">
          <Link href="/" className="block py-2 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono uppercase">
            <span className="text-[#52CAFC]">// </span>Home
          </Link>

          {/* Hosting Dropdown */}
          <div className="space-y-1">
            <span className="block py-2 text-sm font-semibold text-[#1F7EF4] font-mono uppercase">
              <span className="text-[#52CAFC]">// </span>Hosting
            </span>
            <Link href="/shared-hosting" className="block pl-6 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono">
              <span className="text-[#52CAFC]">&gt; </span>Shared Hosting
            </Link>
          </div>

          <Link href="/private-vpn" className="block py-2 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono uppercase">
            <span className="text-[#52CAFC]">// </span>VPN
          </Link>
          <Link href="/mail-relay" className="block py-2 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono uppercase">
            <span className="text-[#52CAFC]">// </span>Mail_Relay
          </Link>
          <span className="block py-2 text-sm text-gray-600 cursor-not-allowed font-mono uppercase">
            <span className="text-gray-700">// </span>Connect [SOON]
          </span>
          <span className="block py-2 text-sm text-gray-600 cursor-not-allowed font-mono uppercase">
            <span className="text-gray-700">// </span>eSIM [SOON]
          </span>
          <Link href="/about" className="block py-2 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono uppercase">
            <span className="text-[#52CAFC]">// </span>About
          </Link>
          <Link href="/contact" className="block py-2 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono uppercase">
            <span className="text-[#52CAFC]">// </span>Contact
          </Link>

          {/* Login Dropdown for Mobile */}
          <div className="space-y-1 border-t-2 border-[#1F7EF4]/30 pt-2 mt-2">
            <span className="block py-2 text-sm font-semibold text-[#1F7EF4] font-mono uppercase">
              <span className="text-[#52CAFC]">&gt;_ </span>Access
            </span>
            <a
              href="https://clients.layer9solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block pl-6 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono"
            >
              <span className="text-[#52CAFC]">[1] </span>Client Portal
            </a>
            <a
              href="https://panel9.layer9solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block pl-6 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono"
            >
              <span className="text-[#52CAFC]">[2] </span>Panel9
            </a>
            <a
              href="https://webmail.layer9solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block pl-6 text-sm text-[#1F7EF4] hover:text-[#52CAFC] font-mono"
            >
              <span className="text-[#52CAFC]">[3] </span>Webmail
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
