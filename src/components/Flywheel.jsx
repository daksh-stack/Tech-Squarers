import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Flywheel() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo('.fly-node', { scale: 0.9, opacity: 0.7 }, { scale: 1.08, opacity: 1, duration: 1.2, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.fromTo('.fly-line', { strokeDashoffset: 20 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power1.inOut', repeat: -1, yoyo: true })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="flywheel" ref={ref} className="py-24 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="numbered-heading mb-6">
          <div className="index">05</div>
          <h2 className="title">THE FLYWHEEL — Learn → Practice → Ship → Evolve</h2>
        </div>

        <div className="mt-8 flex justify-center">
          <svg width="520" height="320" viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g>
              <line className="fly-line" x1="260" y1="40" x2="420" y2="100" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6" opacity="0.8" />
              <line className="fly-line" x1="420" y1="220" x2="260" y2="280" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6" opacity="0.8" />
              <line className="fly-line" x1="100" y1="220" x2="260" y2="280" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6" opacity="0.8" />
              <line className="fly-line" x1="100" y1="220" x2="260" y2="40" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 6" opacity="0.8" />

              <circle className="fly-node" cx="260" cy="40" r="28" fill="#001219" stroke="#00f0ff" strokeWidth="2" filter="url(#glow)" />
              <text x="260" y="46" textAnchor="middle" fill="#e6edf3" fontSize="10">Learn</text>

              <circle className="fly-node" cx="420" cy="100" r="28" fill="#001219" stroke="#00f0ff" strokeWidth="2" filter="url(#glow)" />
              <text x="420" y="106" textAnchor="middle" fill="#e6edf3" fontSize="10">Practice</text>

              <circle className="fly-node" cx="420" cy="220" r="28" fill="#001219" stroke="#00f0ff" strokeWidth="2" filter="url(#glow)" />
              <text x="420" y="226" textAnchor="middle" fill="#e6edf3" fontSize="10">Ship</text>

              <circle className="fly-node" cx="260" cy="280" r="28" fill="#001219" stroke="#00f0ff" strokeWidth="2" filter="url(#glow)" />
              <text x="260" y="286" textAnchor="middle" fill="#e6edf3" fontSize="10">Evolve</text>

              <circle className="fly-node" cx="100" cy="220" r="28" fill="#001219" stroke="#00f0ff" strokeWidth="2" filter="url(#glow)" />
              <text x="100" y="226" textAnchor="middle" fill="#e6edf3" fontSize="10">Feedback</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
