import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduce) return;

    const tl = gsap.fromTo(
      navRef.current,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it Works" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <nav
        className={`
          relative
          w-full
          max-w-5xl
          rounded-full
          border
          backdrop-blur-3xl
          transition-all
          duration-500
          ${
            scrolled
              ? "border-cyan-500/20 bg-black/50 shadow-[0_10px_40px_rgba(6,182,212,0.15)]"
              : "border-white/10 bg-white/[0.04]"
          }
        `}
      >
        <div className="relative flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                via-sky-500
                to-violet-500
                shadow-lg
                shadow-cyan-500/20
              "
            >
              <span className="font-bold text-white">TS</span>

              <div
                className="
                  absolute
                  inset-0
                  -z-10
                  rounded-2xl
                  bg-cyan-400/40
                  blur-xl
                "
              />
            </div>

            <div>
              <div className="font-semibold text-white">
                Tech-Squarers
              </div>

              <div className="text-xs text-zinc-400">
                AI-native learning OS
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              md:flex
              items-center
              gap-8
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  group
                  relative
                  text-sm
                  text-zinc-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    left-1/2
                    bottom-[-6px]
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-violet-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              className="
                hidden
                lg:block
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-white/10
              "
            >
              Request Demo
            </button>

            <button
              className="
                hidden
                sm:flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-violet-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              Get Started ✨
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                md:hidden
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 stroke-current"
              >
                {menuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <path
                      d="M4 8h16"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 16h16"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              mx-3
              mb-3
              rounded-3xl
              border
              border-white/10
              bg-black/80
              p-4
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-2xl
                    px-4
                    py-3
                    text-zinc-200
                    transition
                    hover:bg-white/10
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <button
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-white
                "
              >
                Request Demo
              </button>

              <button
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-violet-500
                  px-4
                  py-3
                  font-semibold
                  text-slate-950
                "
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}