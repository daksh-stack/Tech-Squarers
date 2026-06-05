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
          <div className="test-card rounded-2xl bg-white/3 p-6 text-left" style={{ boxShadow: '0 12px 30px rgba(2,6,23,0.45)' }}>
            <p className="text-zinc-300">“The mentorship and projects transformed my portfolio — I got my dream job.”</p>
            <div className="mt-4 text-sm text-zinc-400">— Aisha, Frontend Engineer</div>
          </div>

          <div className="test-card rounded-2xl bg-white/3 p-6 text-left" style={{ boxShadow: '0 12px 30px rgba(2,6,23,0.45)' }}>
            <p className="text-zinc-300">“Hands-on. Practical. The interview prep was the difference-maker.”</p>
            <div className="mt-4 text-sm text-zinc-400">— Carlos, Software Developer</div>
          </div>

          <div className="test-card rounded-2xl bg-white/3 p-6 text-left" style={{ boxShadow: '0 12px 30px rgba(2,6,23,0.45)' }}>
            <p className="text-zinc-300">“The community and project reviews accelerated my learning curve.”</p>
            <div className="mt-4 text-sm text-zinc-400">— Priya, Systems Engineer</div>
          </div>
        </div>
      </div>
    </section>
  )
}
