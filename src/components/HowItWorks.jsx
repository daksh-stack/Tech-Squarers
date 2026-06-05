import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.how-step', {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="how" ref={ref} className="py-24 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">How It Works</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">A simple 3-step journey from learning to impact.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="how-step rounded-2xl bg-white/3 p-6">
            <h3 className="text-xl font-medium text-white">1. Learn</h3>
            <p className="mt-3 text-zinc-400">Curated modules and guided projects to build foundations fast.</p>
          </div>

          <div className="how-step rounded-2xl bg-white/3 p-6">
            <h3 className="text-xl font-medium text-white">2. Build</h3>
            <p className="mt-3 text-zinc-400">Hands-on projects, pair programming, and mentor feedback.</p>
          </div>

          <div className="how-step rounded-2xl bg-white/3 p-6">
            <h3 className="text-xl font-medium text-white">3. Launch</h3>
            <p className="mt-3 text-zinc-400">Portfolio-ready work and interview prep to land roles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
