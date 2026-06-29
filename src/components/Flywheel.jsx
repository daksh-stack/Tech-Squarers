import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Sparkles, 
  BookOpen, 
  Search, 
  Bot, 
  Hammer, 
  Bug, 
  Users, 
  Rocket, 
  FolderOpen, 
  Award,
  ArrowRight
} from 'lucide-react'

export default function LearningEngine() {
  const sectionRef = useRef(null)
  const diagramRef = useRef(null)
  const [activePhase, setActivePhase] = useState(null)
  const [activeNode, setActiveNode] = useState(null)

  const phases = [
    {
      id: 1,
      number: "01",
      title: "LEARN + RESEARCH",
      icon: BookOpen,
      accent: "violet",
      items: [
        "Research papers & case studies",
        "Interactive AI mentor",
        "Scientific thinking",
        "Knowledge graphs"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "BUILD + EXECUTE",
      icon: Hammer,
      accent: "cyan",
      items: [
        "Real-world production projects",
        "Advanced debugging",
        "System architecture",
        "Team collaboration & code reviews"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "SHIP + SCALE",
      icon: Rocket,
      accent: "violet",
      items: [
        "Live deployment",
        "Portfolio & open source",
        "Community contribution",
        "Career acceleration"
      ]
    }
  ]

  const diagramNodes = [
    { id: 'curiosity', label: "Curiosity", icon: Sparkles, phase: 1 },
    { id: 'learn', label: "Learn", icon: BookOpen, phase: 1 },
    { id: 'research', label: "Research", icon: Search, phase: 1 },
    { id: 'ai', label: "AI Guidance", icon: Bot, phase: 1 },
    { id: 'build', label: "Build", icon: Hammer, phase: 2 },
    { id: 'debug', label: "Debug", icon: Bug, phase: 2 },
    { id: 'collaborate', label: "Collaborate", icon: Users, phase: 2 },
    { id: 'ship', label: "Ship", icon: Rocket, phase: 3 },
    { id: 'portfolio', label: "Portfolio", icon: FolderOpen, phase: 3 },
    { id: 'impact', label: "Impact", icon: Award, phase: 3 }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Heading
      gsap.from('.engine-heading', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.engine-heading', start: 'top 80%' }
      })

      // Diagram nodes
      gsap.from('.diagram-node', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'back.out(1)',
        scrollTrigger: { trigger: diagramRef.current, start: 'top 70%' }
      })

      // Connection lines
      gsap.from('.connection-line', {
        scaleY: 0,
        transformOrigin: "top center",
        stagger: 0.1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: diagramRef.current, start: 'top 65%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handlePhaseHover = (phaseId) => {
    setActivePhase(phaseId)
    // Highlight related nodes
    diagramNodes.forEach(node => {
      if (node.phase === phaseId) {
        const el = document.getElementById(`node-${node.id}`)
        if (el) gsap.to(el, { scale: 1.08, duration: 0.3 })
      }
    })
  }

  const handlePhaseLeave = () => {
    setActivePhase(null)
    diagramNodes.forEach(node => {
      const el = document.getElementById(`node-${node.id}`)
      if (el) gsap.to(el, { scale: 1, duration: 0.3 })
    })
  }

  return (
    <section id="learning-engine" ref={sectionRef} className="py-24 border-t border-white/6 bg-black/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(at_40%_30%,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_70%_60%,rgba(103,232,249,0.04)_0%,transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="engine-heading max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-3xl border border-violet-500/20 bg-violet-500/5 text-violet-400 text-sm tracking-[3px] font-medium mb-6">
            CORE PHILOSOPHY
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tighter font-semibold text-white leading-none">
            THE LEARNING<br />ENGINE
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-lg">
            A structured engineering workflow that transforms curiosity into production-ready skills through research, execution, collaboration and continuous iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: Architecture Diagram */}
          <div ref={diagramRef} className="lg:col-span-7">
            <div className="relative bg-zinc-950/80 border border-white/5 rounded-3xl p-12 min-h-[820px] flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-md mx-auto">
                {/* Central Engine */}
                <div className="flex justify-center mb-16 relative z-20">
                  <div className="diagram-node bg-gradient-to-br from-zinc-900 to-black border border-violet-500/30 rounded-3xl px-8 py-6 text-center shadow-2xl shadow-violet-500/10 group hover:border-violet-400 transition-all">
                    <div className="mx-auto mb-3 w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-violet-400" />
                    </div>
                    <div className="font-mono text-xs tracking-[3px] text-violet-400 mb-1">CORE</div>
                    <div className="text-2xl font-semibold tracking-tight text-white">LUNARIS ENGINE</div>
                    <div className="text-xs text-zinc-500 mt-1">Powers every stage</div>
                  </div>
                </div>

                {/* Vertical Flow */}
                <div className="space-y-8 relative">
                  {diagramNodes.map((node, index) => {
                    const Icon = node.icon
                    const isActive = activePhase === node.phase || activeNode === node.id
                    
                    return (
                      <div 
                        key={node.id}
                        id={`node-${node.id}`}
                        className={`diagram-node group relative flex items-center gap-6 transition-all duration-300 ${isActive ? 'scale-[1.03]' : ''}`}
                        onMouseEnter={() => setActiveNode(node.id)}
                        onMouseLeave={() => setActiveNode(null)}
                      >
                        {/* Connection Line */}
                        {index > 0 && (
                          <div className="connection-line absolute left-[29px] -top-8 w-px h-8 bg-gradient-to-b from-violet-500/30 to-transparent" />
                        )}

                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all flex-shrink-0
                          ${isActive ? 'border-violet-400 bg-violet-500/10' : 'border-white/10 bg-zinc-900 group-hover:border-violet-500/50'}`}>
                          <Icon className={`w-7 h-7 transition-colors ${isActive ? 'text-violet-400' : 'text-zinc-400 group-hover:text-violet-400'}`} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="font-semibold text-lg text-white tracking-tight">{node.label}</div>
                            <div className="px-2 py-0.5 text-[10px] font-mono tracking-widest bg-white/5 text-zinc-500 rounded">0{index + 1}</div>
                          </div>
                          <div className="text-sm text-zinc-500">Stage {node.phase}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Learning Phases */}
          <div className="lg:col-span-5 space-y-6">
            {phases.map((phase) => {
              const Icon = phase.icon
              const isActive = activePhase === phase.id

              return (
                <div
                  key={phase.id}
                  className={`phase-panel group rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer
                    ${isActive 
                      ? 'border-violet-400/60 bg-zinc-900/90' 
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10'}`}
                  onMouseEnter={() => handlePhaseHover(phase.id)}
                  onMouseLeave={handlePhaseLeave}
                  onClick={() => setActivePhase(isActive ? null : phase.id)}
                >
                  <div className="p-9">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all
                          ${isActive ? 'border-violet-400 bg-violet-500/10' : 'border-white/10 bg-zinc-900'}`}>
                          <Icon className={`w-6 h-6 ${isActive ? 'text-violet-400' : 'text-zinc-400'}`} />
                        </div>
                        <div>
                          <div className="font-mono text-sm tracking-widest text-zinc-500">{phase.number}</div>
                          <h3 className="text-2xl font-semibold tracking-tight text-white mt-1">{phase.title}</h3>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 mt-3 transition-transform ${isActive ? 'rotate-90 text-violet-400' : 'text-zinc-500'}`} />
                    </div>

                    <div className={`mt-8 space-y-4 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'}`}>
                      {phase.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-zinc-400 text-[15px]">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                          <div>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-28 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl md:text-6xl leading-tight tracking-tighter font-semibold text-white">
              Every lesson becomes research.<br />
              Every research becomes execution.<br />
              Every execution becomes proof.<br />
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Every proof becomes opportunity.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}