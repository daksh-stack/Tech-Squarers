import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
        // initial shadow
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

        // cleanup
        card._cleanup = () => {
          card.removeEventListener('pointermove', handleMove)
          card.removeEventListener('pointerleave', handleLeave)
        }
      })
    }, ref)

    return () => {
      // run context revert and cleanup listeners
      if (ref.current) {
        const cards = ref.current.querySelectorAll('.feature-card')
        cards.forEach(c => { if (c._cleanup) c._cleanup() })
      }
      ctx.revert()
    }
  }, [])

  const cards = [
    {
      title: 'Project-based Learning',
      desc: 'Real projects that build portfolios and practical skills employers want.',
      accent: 'linear-gradient(90deg,#7c3aed,#06b6d4)'
    },
    {
      title: 'Mentorship & Reviews',
      desc: 'Expert mentors and code reviews to accelerate growth with focused feedback.',
      accent: 'linear-gradient(90deg,#06b6d4,#a78bfa)'
    },
    {
      title: 'Interview Prep',
      desc: 'Interview simulations and tailored guidance to land top roles.',
      accent: 'linear-gradient(90deg,#f43f5e,#fb923c)'
    }
  ]

  return (
    <section id="features" ref={ref} className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">What We Offer</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Curated learning paths, mentorship, and hands-on projects to turn you into a world-class engineer.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="feature-card relative rounded-2xl bg-white/3 p-6"
              style={{ boxShadow: '0 18px 40px rgba(2,6,23,0.6)', overflow: 'hidden' }}
            >
              <div className="absolute left-0 top-0 h-1 w-full" style={{ background: c.accent, opacity: 0.95 }} />
              <div className="relative">
                <h3 className="text-xl font-medium text-white">{c.title}</h3>
                <p className="mt-3 text-zinc-400">{c.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white">Join Waitlist →</a>
                  <div className="text-sm text-zinc-400">{i === 0 ? 'Popular' : i === 1 ? 'Mentor-led' : 'Career'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
