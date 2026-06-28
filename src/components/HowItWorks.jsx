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
    <section id="how" ref={ref} className="py-24 border-t border-white/6 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Title */}
        <div className="numbered-heading mb-6 inline-flex mx-auto">
          <div className="index">04</div>
          <h2 className="title">HOW IT WORKS — The Builder Journey</h2>
        </div>
        
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm leading-relaxed">
          A rigorous 3-step loop designed to transition you from consuming information to shipping core systems.
        </p>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="how-step relative rounded-3xl bg-white/[0.01] border border-white/5 p-8 text-left transition-all duration-300 hover:border-cyan-500/20">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 font-mono">01</span>
            <h3 className="text-base font-bold text-white mt-4">Deconstruct</h3>
            <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
              Deconstruct production engines, language runtime memory models, compile pipelines, and thread scheduling models.
            </p>
          </div>

          {/* Step 2 */}
          <div className="how-step relative rounded-3xl bg-white/[0.01] border border-white/5 p-8 text-left transition-all duration-300 hover:border-cyan-500/20">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 font-mono">02</span>
            <h3 className="text-base font-bold text-white mt-4">Build</h3>
            <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
              Build your own clean-room implementations of LSM-Tree databases, custom AST VMs, load-balancers, and concurrency pools.
            </p>
          </div>

          {/* Step 3 */}
          <div className="how-step relative rounded-3xl bg-white/[0.01] border border-white/5 p-8 text-left transition-all duration-300 hover:border-cyan-500/20">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 font-mono">03</span>
            <h3 className="text-base font-bold text-white mt-4">Launch</h3>
            <p className="mt-2 text-zinc-400 text-xs leading-relaxed">
              Publish your specifications, submit core PRs to global systems tools, and package your projects as high-impact startups.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

