import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  BookOpen, 
  Search, 
  FlaskConical, 
  Hammer, 
  Users, 
  Rocket, 
  TrendingUp,
  ArrowRight
} from 'lucide-react'

export default function Features() {
  const sectionRef = useRef(null)
  const workflowRef = useRef(null)
  const [openPhase, setOpenPhase] = useState(1)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from('.features-heading', { 
        y: 50, 
        opacity: 0, 
        duration: 1.1, 
        ease: 'power3.out',
        scrollTrigger: { trigger: '.features-heading', start: 'top 80%' }
      })

      // Workflow line
      gsap.from('.workflow-line', { 
        height: 0, 
        duration: 2, 
        ease: 'power3.inOut',
        scrollTrigger: { trigger: workflowRef.current, start: 'top 70%' }
      })

      // Workflow nodes
      gsap.from('.workflow-node', { 
        scale: 0.6, 
        opacity: 0, 
        stagger: 0.2, 
        duration: 0.9, 
        ease: 'back.out(1.4)',
        scrollTrigger: { trigger: workflowRef.current, start: 'top 65%' }
      })

      // Phases reveal
      gsap.from('.phase-panel', { 
        y: 60, 
        opacity: 0, 
        stagger: 0.15, 
        duration: 0.9, 
        ease: 'power3.out',
        scrollTrigger: { trigger: '.phases-container', start: 'top 75%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const workflowSteps = [
    { icon: BookOpen, label: "Learn", color: "violet" },
    { icon: Search, label: "Research", color: "violet" },
    { icon: FlaskConical, label: "Experiment", color: "cyan" },
    { icon: Hammer, label: "Build", color: "violet" },
    { icon: Users, label: "Collaborate", color: "cyan" },
    { icon: Rocket, label: "Ship", color: "violet" },
    { icon: TrendingUp, label: "Improve", color: "cyan" }
  ]

  const phases = [
    {
      id: 1,
      number: "01",
      title: "Learn + Research",
      icon: BookOpen,
      accent: "violet",
      description: "Deep conceptual mastery through research papers, case studies, and scientific thinking. Interactive AI assistance and dynamic knowledge graphs help you truly understand systems — not just memorize them.",
      outcomes: [
        "Mastery of fundamentals",
        "Critical research skills",
        "Systems thinking framework"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Build + Execute",
      icon: Hammer,
      accent: "cyan",
      description: "Real industry-grade projects. Tackle production systems, complex debugging, architecture decisions, and team collaboration. Move from theory to execution with guided, high-fidelity engineering challenges.",
      outcomes: [
        "Production systems built",
        "Advanced debugging skills",
        "Architectural intuition"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Ship + Scale",
      icon: Rocket,
      accent: "violet",
      description: "Deploy real products. Build your portfolio, contribute to open source, and experience startup building. Prepare for real-world engineering roles with community feedback and career acceleration.",
      outcomes: [
        "Live deployed products",
        "Strong public portfolio",
        "Industry-ready confidence"
      ]
    }
  ]

  return (
    <section id="features" ref={sectionRef} className="py-24 border-t border-white/6 bg-black/20 relative overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_40%,rgba(139,92,246,0.07)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_70%_70%,rgba(103,232,249,0.05)_0%,transparent_60%)]"></div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* PART 1: Story + Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="features-heading">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm tracking-[3px] mb-6">
                THE LEARNING ENGINE
              </div>
              
              <h2 className="text-6xl md:text-7xl leading-none tracking-tighter font-semibold text-white">
                Building software<br />
                isn&apos;t something<br />
                you memorize.
              </h2>
              
              <div className="mt-8 text-5xl md:text-6xl leading-none tracking-tighter font-semibold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                It&apos;s something<br />you practice.
              </div>
            </div>

            <p className="mt-12 max-w-md text-xl text-zinc-400 leading-relaxed">
              Modern engineering is learned through deliberate research, relentless experimentation, deep collaboration, and shipping real products — not passive video consumption.
            </p>
          </div>

          {/* Animated Workflow */}
          <div ref={workflowRef} className="lg:col-span-7 pt-8">
            <div className="relative pl-12">
              <div className="workflow-line absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent" />
              
              <div className="space-y-14">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="workflow-node flex gap-7 group">
                      <div className="relative flex-shrink-0">
                        <div className={`w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-${step.color}-400/60 transition-all duration-500`}>
                          <Icon className={`w-7 h-7 text-${step.color}-400`} />
                        </div>
                        <div className="absolute -inset-2 bg-violet-500/10 rounded-3xl scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-30 transition-all duration-700" />
                      </div>
                      <div className="pt-3">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs tracking-[2px] text-zinc-500">STEP 0{index + 1}</span>
                          <h3 className="text-3xl font-medium tracking-tight text-white">{step.label}</h3>
                        </div>
                        {index < workflowSteps.length - 1 && (
                          <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">↓</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: Three Learning Phases
        <div className="phases-container mt-32">
          <div className="numbered-heading mb-16">
            <div className="index">02</div>
            <h2 className="title text-5xl tracking-tighter">Three Transformative Phases</h2>
          </div>

          <div className="space-y-6">
            {phases.map((phase) => {
              const Icon = phase.icon
              const isOpen = openPhase === phase.id

              return (
                <div 
                  key={phase.id}
                  onClick={() => setOpenPhase(isOpen ? null : phase.id)}
                  className="phase-panel group rounded-3xl bg-white/[0.015] border border-white/5 hover:border-white/10 overflow-hidden cursor-pointer transition-all duration-500"
                >
                  <div className="p-10 flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${phase.accent}-500/10 to-transparent flex items-center justify-center border border-${phase.accent}-500/20`}>
                        <Icon className={`w-8 h-8 text-${phase.accent}-400`} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-mono text-sm text-zinc-500 tracking-widest">{phase.number}</div>
                          <h3 className="text-3xl font-semibold tracking-tight text-white mt-1">{phase.title}</h3>
                        </div>
                        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                          <ArrowRight className="w-6 h-6 text-zinc-400" />
                        </div>
                      </div>

                      <p className="mt-6 text-zinc-400 text-[17px] leading-relaxed pr-12">
                        {phase.description}
                      </p>

                      Expandable Content
                      <div className={`overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-96 mt-8' : 'max-h-0'}`}>
                        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                          {phase.outcomes.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                              <div className="text-sm text-zinc-300">{outcome}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  Bottom glow accent
                  <div className={`h-px w-full bg-gradient-to-r from-transparent via-${phase.accent}-400/30 to-transparent transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-30'}`} />
                </div>
              )
            })}
          </div>
        </div> */}
      </div>
    </section>
  )
}