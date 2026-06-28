import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroBackground from "./HeroBackground.jsx";
import MockIDE from './MockIDE.jsx'
import Stats from './Stats.jsx'


export default function Hero() {
  const rootRef = useRef(null)
  const titleRef = useRef(null)
  const copyRef = useRef(null)
  const ctasRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
      tl.from(titleRef.current, { y: 28, opacity: 0 })
        .from(copyRef.current, { y: 18, opacity: 0 }, '-=0.45')
        .from(ctasRef.current, { y: 12, opacity: 0, stagger: 0.12 }, '-=0.4')

      ctasRef.current.forEach(btn => {
        if (!btn) return
        btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, duration: 0.18 }))
        btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1.0, duration: 0.18 }))
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // fade the dark overlay as user scrolls down for a subtle reveal
    if (!rootRef.current) return
    const overlay = rootRef.current.querySelector('.hero-overlay')
    if (!overlay) return
    const st = gsap.to(overlay, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      }
    })

    return () => { try { st.kill() } catch(e){} }
  }, [])

  return (
    <section ref={rootRef} className="relative pt-32 -translate-y-20 sm:pt-40 md:pt-48 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8" id="home">
      <HeroBackground />
      

      <div className="absolute inset-0 bg-black/30 hero-overlay z-0 pointer-events-none" />

      <div className="relative z-30 w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          <div className="md:col-span-6 lg:col-span-6 text-left">
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-zinc-300"></div> */}

            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
              Tech
              <br />
              Squarers
            </h1>

            <p ref={copyRef} className="mt-6 max-w-2xl text-lg text-zinc-400">
              The future of engineering education is not a course. It is not a video library. It is a living, adaptive, AI-native ecosystem that continuously evolves with the engineer — transforming learners into production-grade builders who think, ship, and scale at the highest level.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button ref={el => ctasRef.current[0] = el} className="rounded-full px-6 py-3 font-semibold btn-glow" style={{ background: 'linear-gradient(90deg,#00f0ff,#7c3aed)', color: '#021021' }}>Watch the Vision</button>

              {/* <button ref={el => ctasRef.current[1] = el} className="rounded-full px-5 py-3 border border-white/8 text-sm text-white/90">Watch the Vision</button> */}

              <a ref={el => ctasRef.current[2] = el} href="#contact" className="rounded-full px-5 py-3 text-sm font-medium" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'transparent' }}>Book a Demo</a>
            </div>

            <div className="mt-8 flex gap-6">
              <Stats />
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-6 order-first md:order-last flex items-center justify-center">
            <div className="w-full max-w-lg md:max-w-none">
              <MockIDE />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}