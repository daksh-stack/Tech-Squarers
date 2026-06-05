import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroBackground from "./HeroBackground.jsx";
// import Phoenix from './Phoenix.jsx';

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
    <section ref={rootRef} className="relative top-10 flex min-h-screen items-center justify-center px-1" id="home">
      <HeroBackground />
      {/* <Phoenix /> */}

      <div className="absolute inset-0 bg-black/30 hero-overlay z-0 pointer-events-none" />

      <div className="relative z-30 max-w-5xl text-center px-4">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300">Early Access · Beta</span>
        </div>

        <h1 ref={titleRef} className="text-6xl font-extrabold leading-tight text-white md:text-8xl tracking-tight">
          Build The Future
          <br />
          With Intelligent
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {' '}AI Systems
          </span>
        </h1>

        <p ref={copyRef} className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Deploy scalable AI solutions, automate workflows,
          and transform ideas into intelligent products with
          a modern developer-first platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            ref={el => ctasRef.current[0] = el}
            className="rounded-2xl px-7 py-3 font-semibold transition transform shadow-lg"
            style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)', color: '#061025' }}
            aria-label="Get started with Tech-Squarers"
          >
            Get Started
          </button>

          <a
            ref={el => ctasRef.current[1] = el}
            href="#features"
            className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 text-white backdrop-blur-xl transition transform"
            aria-label="Explore offerings"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}