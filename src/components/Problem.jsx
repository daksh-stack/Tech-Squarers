import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, RefreshCw, Sliders, Terminal } from 'lucide-react'

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
    { title: 'Passive Learning', desc: 'Standard courses and videos fail to produce production-grade systems builders.', icon: BookOpen },
    { title: 'Static Curriculum', desc: 'Syllabi age quickly; they fail to reflect actual modern systems engineering internals.', icon: RefreshCw },
    { title: 'Zero Personalization', desc: 'Learners receive the same static material regardless of their skill level or project goals.', icon: Sliders },
    { title: 'No Systems Practice', desc: 'No realistic simulation of low-level debugging, consensus runs, and cluster scaling workflows.', icon: Terminal }
  ]

  return (
    <section id="problem" ref={ref} className="py-24 border-t border-white/6 bg-black/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="numbered-heading mb-10">
          <div className="index">01</div>
          <h2 className="title">THE PROBLEM — Traditional EdTech is Broken</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(i => {
            const Icon = i.icon;
            return (
              <div key={i.title} className="problem-card rounded-2xl bg-white/[0.01] border border-white/5 p-6 hover:border-violet-500/20 hover:bg-white/[0.02] transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/25">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{i.title}</h3>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{i.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

