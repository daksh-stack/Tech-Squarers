import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.test-card', {
        y: 22,
        opacity: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' }
      })
      const cards = gsap.utils.toArray('.test-card')
      cards.forEach(card => {
        card.style.transition = 'transform 0.22s ease, box-shadow 0.22s ease'
        card.addEventListener('pointerenter', () => gsap.to(card, { scale: 1.03, boxShadow: '0 22px 60px rgba(2,6,23,0.6)', duration: 0.28 }))
        card.addEventListener('pointerleave', () => gsap.to(card, { scale: 1, boxShadow: '0 12px 30px rgba(2,6,23,0.45)', duration: 0.45 }))
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">What Students Say</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Real stories from learners who levelled up with Tech-Squarers.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="test-card rounded-2xl bg-white/[0.01] border border-white/5 p-6 text-left" style={{ boxShadow: '0 12px 30px rgba(2,6,23,0.45)' }}>
            <p className="text-zinc-300 text-xs leading-relaxed">“We built an LSM storage engine from scratch and got our PRs merged into upstream database repos. Pushing systems boundaries is on a different level.”</p>
            <div className="mt-4 text-xs font-semibold text-cyan-400">— Aisha, Systems Maintainer</div>
          </div>

          <div className="test-card rounded-2xl bg-white/[0.01] border border-white/5 p-6 text-left" style={{ boxShadow: '0 12px 30px rgba(2,6,23,0.45)' }}>
            <p className="text-zinc-300 text-xs leading-relaxed">“Tech-Squarers didn’t train me to write CRUD endpoints. I designed my custom VM compiler here, which ultimately incubated my pre-seed dev-tool startup.”</p>
            <div className="mt-4 text-xs font-semibold text-cyan-400">— Carlos, Founder @ CacheFlow</div>
          </div>

          <div className="test-card rounded-2xl bg-white/[0.01] border border-white/5 p-6 text-left" style={{ boxShadow: '0 12px 30px rgba(2,6,23,0.45)' }}>
            <p className="text-zinc-300 text-xs leading-relaxed">“The code reviews here are brutal but excellent. Discussing work-stealing schedulers and lock-free thread queues saved me months of systems engineering study.”</p>
            <div className="mt-4 text-xs font-semibold text-cyan-400">— Priya, Systems Lead</div>
          </div>
        </div>
      </div>
    </section>
  )
}
