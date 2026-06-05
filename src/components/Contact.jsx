import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.contact-card', { y: 18, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 90%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-20 border-t border-white/6">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-semibold text-white">Get Early Access</h2>
        <p className="mt-3 text-zinc-400">Join the waitlist and receive updates about launches and cohorts.</p>

        <div className="mt-8 contact-card rounded-2xl bg-white/3 p-6 mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-3">
            <input aria-label="Email" type="email" placeholder="your@email.com" className="flex-1 rounded-xl px-4 py-3 bg-white/5 text-white placeholder:text-zinc-500" />
            <button className="rounded-xl px-6 py-3 font-semibold shadow-lg transform transition hover:scale-105" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)', color: '#051025' }}>Notify Me</button>
          </form>
        </div>
      </div>
    </section>
  )
}
