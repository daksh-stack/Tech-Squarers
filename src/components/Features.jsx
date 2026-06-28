import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Code2, Flame } from 'lucide-react'

export default function Features() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.feature-card')

      gsap.from(cards, {
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 82%' }
      })

      cards.forEach((card) => {
        gsap.set(card, { transformPerspective: 900, transformOrigin: 'center' })

        const handleMove = (e) => {
          const rect = card.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width - 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5

          gsap.to(card, {
            duration: 0.4,
            rotateX: (-y) * 8,
            rotateY: x * 12,
            scale: 1.03,
            boxShadow: `${-x * 24}px ${-y * 24}px 48px rgba(2,6,23,0.55), 0 6px 20px rgba(2,6,23,0.35)`,
            ease: 'power3.out'
          })
        }

        const handleLeave = () => {
          gsap.to(card, { duration: 0.6, rotateX: 0, rotateY: 0, scale: 1, boxShadow: '0 18px 40px rgba(2,6,23,0.6)', ease: 'power3.out' })
        }

        card.addEventListener('pointermove', handleMove)
        card.addEventListener('pointerleave', handleLeave)
        card.addEventListener('pointerenter', () => gsap.to(card, { duration: 0.28, scale: 1.02 }))

        card._cleanup = () => {
          card.removeEventListener('pointermove', handleMove)
          card.removeEventListener('pointerleave', handleLeave)
        }
      })
    }, ref)

    return () => {
      if (ref.current) {
        const cards = ref.current.querySelectorAll('.feature-card')
        cards.forEach(c => { if (c._cleanup) c._cleanup() })
      }
      ctx.revert()
    }
  }, [])

  const cards = [
    {
      title: 'Systems Engineering',
      desc: 'Build key production-level infrastructure from scratch: compilers, LSM databases, and work-stealing async runtimes.',
      accent: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
      icon: Cpu,
      label: 'Core Track'
    },
    {
      title: 'Architecture Reviews',
      desc: 'Get deep, 1-on-1 code reviews from veteran systems leads. Learn how to optimize for speed, memory pools, and lock-free lists.',
      accent: 'linear-gradient(90deg,#06b6d4,#a78bfa)',
      icon: Code2,
      label: 'Cohort Led'
    },
    {
      title: 'Venture Incubation',
      desc: 'Incubate developer tools or infrastructure startup ideas. Pitch projects to top accelerators and scale open source libraries.',
      accent: 'linear-gradient(90deg,#f43f5e,#fb923c)',
      icon: Flame,
      label: 'Founder Track'
    }
  ]

  return (
    <section id="features" ref={ref} className="py-24 border-t border-white/6 bg-gradient-to-b from-zinc-950 to-black">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <div className="numbered-heading mb-6 inline-flex mx-auto">
          <div className="index">02</div>
          <h2 className="title">WHAT WE OFFER — Engineered to Lead</h2>
        </div>
        
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
          High-performance curricula, personal review loops, and code incubation designed to make you stand out in the global technology community.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="feature-card relative rounded-3xl bg-white/[0.01] border border-white/5 p-8 flex flex-col justify-between text-left transition-all duration-300"
                style={{ boxShadow: '0 18px 40px rgba(2,6,23,0.6)', overflow: 'hidden' }}
              >
                {/* Accent top line */}
                <div className="absolute left-0 top-0 h-1 w-full" style={{ background: c.accent, opacity: 0.95 }} />
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{c.label}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{c.desc}</p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                  <a href="#contact" className="text-xs font-semibold text-cyan-400 hover:text-white transition-colors duration-300">
                    Apply Now →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

