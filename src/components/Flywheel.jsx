import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Flywheel() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      // Gentle node pulsing
      gsap.fromTo('.fly-node', 
        { scale: 0.96, filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.2))' }, 
        { scale: 1.04, filter: 'drop-shadow(0 0 16px rgba(6,182,212,0.5))', duration: 1.5, ease: 'sine.inOut', repeat: -1, yoyo: true }
      )
      // Moving dashes on flow lines
      gsap.fromTo('.fly-line', 
        { strokeDashoffset: 28 }, 
        { strokeDashoffset: 0, duration: 2, ease: 'none', repeat: -1 }
      )
      // Slow rotation on the outer rings
      gsap.fromTo('.fly-ring', 
        { rotate: 0 }, 
        { rotate: 360, transformOrigin: 'center', duration: 12, ease: 'none', repeat: -1 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="flywheel" ref={ref} className="py-24 border-t border-white/6 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <div className="numbered-heading mb-6 inline-flex mx-auto">
          <div className="index">05</div>
          <h2 className="title">THE FLYWHEEL — The Feedback Loop</h2>
        </div>
        
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
          An continuous learning loop designed to accelerate your growth: build code, ship modules, receive feedback, and evolve.
        </p>

        {/* Responsive SVG Container */}
        <div className="flex justify-center items-center overflow-x-auto custom-scrollbar py-6">
          <div className="w-[580px] h-[340px] flex-shrink-0">
            <svg width="100%" height="100%" viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting Dashed Flow Lines */}
              <g>
                {/* Outer loop connections */}
                <path className="fly-line" d="M 260 40 L 420 100 L 420 220 L 260 280 L 100 220 L 100 100 Z" 
                      stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 8" opacity="0.7" />
                
                {/* Inward connection lines to central engine */}
                <line x1="260" y1="40" x2="260" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                <line x1="420" y1="100" x2="260" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                <line x1="420" y1="220" x2="260" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                <line x1="260" y1="280" x2="260" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                <line x1="100" y1="220" x2="260" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                <line x1="100" y1="100" x2="260" y2="160" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />

                {/* Line Gradient Definition */}
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </g>

              {/* Central Engine Core */}
              <g className="fly-node" style={{ transformOrigin: "260px 160px" }}>
                <circle cx="260" cy="160" r="32" fill="#030712" stroke="#7c3aed" strokeWidth="2" filter="url(#neon-glow)" />
                <circle className="fly-ring" cx="260" cy="160" r="26" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
                <text x="260" y="163" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="bold" fontFamily="monospace">CORE</text>
              </g>

              {/* Outer Loop Nodes */}
              
              {/* Learn Node */}
              <g className="fly-node" style={{ transformOrigin: "260px 40px" }}>
                <circle cx="260" cy="40" r="24" fill="#020617" stroke="#00f0ff" strokeWidth="2" filter="url(#neon-glow)" />
                <text x="260" y="44" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold" fontFamily="monospace">LEARN</text>
              </g>

              {/* Practice Node */}
              <g className="fly-node" style={{ transformOrigin: "420px 100px" }}>
                <circle cx="420" cy="100" r="24" fill="#020617" stroke="#00f0ff" strokeWidth="2" filter="url(#neon-glow)" />
                <text x="420" y="104" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold" fontFamily="monospace">PRACTICE</text>
              </g>

              {/* Ship Node */}
              <g className="fly-node" style={{ transformOrigin: "420px 220px" }}>
                <circle cx="420" cy="220" r="24" fill="#020617" stroke="#00f0ff" strokeWidth="2" filter="url(#neon-glow)" />
                <text x="420" y="224" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold" fontFamily="monospace">SHIP</text>
              </g>

              {/* Evolve Node */}
              <g className="fly-node" style={{ transformOrigin: "260px 280px" }}>
                <circle cx="260" cy="280" r="24" fill="#020617" stroke="#00f0ff" strokeWidth="2" filter="url(#neon-glow)" />
                <text x="260" y="284" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold" fontFamily="monospace">EVOLVE</text>
              </g>

              {/* Feedback Node */}
              <g className="fly-node" style={{ transformOrigin: "100px 220px" }}>
                <circle cx="100" cy="220" r="24" fill="#020617" stroke="#00f0ff" strokeWidth="2" filter="url(#neon-glow)" />
                <text x="100" y="224" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold" fontFamily="monospace">FEEDBACK</text>
              </g>

              {/* Research Node */}
              <g className="fly-node" style={{ transformOrigin: "100px 100px" }}>
                <circle cx="100" cy="100" r="24" fill="#020617" stroke="#00f0ff" strokeWidth="2" filter="url(#neon-glow)" />
                <text x="100" y="104" textAnchor="middle" fill="#e2e8f0" fontSize="8" fontWeight="bold" fontFamily="monospace">RESEARCH</text>
              </g>

            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

