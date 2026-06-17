import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Problem() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from('.problem-card', { y: 22, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  const items = [
    { title: 'Passive Learning', desc: 'Courses and videos don’t produce production-ready engineers.' },
    { title: 'Static Curriculum', desc: 'Curricula age quickly; they don’t reflect current industry needs.' },
    { title: 'Zero Personalization', desc: 'Learners receive the same content regardless of skills or goals.' },
    { title: 'No Workflow Simulation', desc: 'No realistic practice of debugging, deployment, and scaling workflows.' }
  ]

  return (
    <section id="problem" ref={ref} className="py-24 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="numbered-heading mb-6">
          <div className="index">01</div>
          <h2 className="title">THE PROBLEM — Traditional EdTech is Broken</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(i => (
            <div key={i.title} className="problem-card rounded-2xl bg-[rgba(255,255,255,0.02)] p-6">
              <h3 className="text-lg font-semibold text-white">{i.title}</h3>
              <p className="mt-2 text-zinc-400">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
