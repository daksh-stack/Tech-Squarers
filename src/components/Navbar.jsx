import React, { useEffect, useState } from "react";
import {
  Home,
  Cpu,
  BookOpen,
  Compass,
  Tag,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", icon: Home, href: "#home" },
    { id: "features", label: "Features", icon: Cpu, href: "#features" },
    { id: "pricing", label: "Pricing & Cohorts", icon: Tag, href: "#pricing" },
    { id: "faq", label: "FAQ", icon: HelpCircle, href: "#faq" },
    {
      id: "contact",
      label: "Book Demo",
      icon: MessageSquare,
      href: "#contact",
    },
  ];

  useEffect(() => {
    const sections = [
      "home",
      "features",
      "pricing",
      "faq",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // triggers when section is near viewport center
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-auto max-w-[95vw]">
      <nav className="flex items-center gap-1.5 md:gap-3 px-3.5 py-2.5 bg-slate-950/65 border border-white/10 backdrop-blur-3xl rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] shadow-cyan-500/5 transition-all duration-300">
        {/* Miniature Tech-Squarers Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 shadow-lg shadow-cyan-500/10 hover:scale-105 active:scale-95 transition-transform duration-200 overflow-hidden p-1"
        >
          <img
            src={logoImg}
            alt="Logo"
            className="w-full h-full object-contain rounded-xl"
          />
        </a>

        {/* Divider */}
        <div className="w-[1.5px] h-6 bg-white/10 mx-0.5" />

        {/* Navigation Icons list */}
        <div className="flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`group relative flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 hover:bg-white/5 ${
                  isActive
                    ? "text-cyan-400 bg-white/[0.03]"
                    : "text-zinc-400 hover:text-white"
                }`}
                style={{ contentVisibility: "auto" }}
              >
                {/* macOS Dock Hover expansion */}
                <div className="transform transition-transform duration-300 group-hover:scale-120 group-hover:-translate-y-1.5 active:scale-95">
                  <Icon className="w-[17px] h-[17px] md:w-[19px] md:h-[19px]" />
                </div>

                {/* macOS Active Dot */}
                {isActive && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] glow-pulse" />
                )}

                {/* Tooltip */}
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 px-2 py-1 text-[9px] font-sans font-semibold rounded bg-slate-900 border border-white/10 text-white whitespace-nowrap shadow-md pointer-events-none select-none">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
