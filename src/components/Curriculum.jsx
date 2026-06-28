import React, { useState } from "react";

export default function Curriculum() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Phase 01: Systems Foundations",
      subtitle: "Weeks 1-4 • Concurrency & Hardware Internals",
      desc: "Go beyond syntax. Understand memory barriers, custom thread schedulers, kernel syscalls, and low-level resource allocation.",
      project: {
        name: "Custom Async Runtime Engine",
        difficulty: "8.5 / 10",
        tech: ["Rust", "Assembly", "Linux Syscalls", "epoll"],
        blueprint: "Creates a non-blocking network I/O loop using native epoll wrappers and an work-stealing thread pool executor.",
        deliverables: [
          "Thread pool with work-stealing queues",
          "Lock-free memory allocation arena",
          "Zero-copy async network listener"
        ]
      }
    },
    {
      title: "Phase 02: Production Systems",
      subtitle: "Weeks 5-8 • Databases, Consensus & Compilers",
      desc: "Implement high-throughput storage engines and consensus systems. Learn database internals and translation logic.",
      project: {
        name: "Distributed Consensus LSM Database",
        difficulty: "9.6 / 10",
        tech: ["Go", "Raft Protocol", "LSM-Tree", "gRPC"],
        blueprint: "Builds a replicated key-value storage engine using Raft consensus and a log-structured merge-tree storage architecture.",
        deliverables: [
          "Raft leader election and log replication from scratch",
          "LSM storage engine with Memtable, SSTables, and compaction",
          "MVCC transaction support for concurrent reads"
        ]
      }
    },
    {
      title: "Phase 03: The Tech-Squarers Edge",
      subtitle: "Weeks 9-12 • Open Source & Incubating Projects",
      desc: "Contribute to core open-source repositories (Rust, Linux, Kubernetes) and build high-performance systems ready to spin off as startups.",
      project: {
        name: "Upstream OSS Contribution & Foundational Tooling",
        difficulty: "10.0 / 10",
        tech: ["Rust / C++", "Git Internals", "Compilers", "WebAssembly"],
        blueprint: "Identify a critical upstream bug or performance bottleneck in a major repository, engineer a fix, write technical specs, and publish.",
        deliverables: [
          "PR merged into a globally used open-source systems repo",
          "Production-grade developer tool (e.g. lightweight compiler or custom bundler)",
          "Architectural spec paper defending your system design"
        ]
      }
    }
  ];

  return (
    <section id="curriculum" className="py-24 border-t border-white/6 bg-black/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <div className="numbered-heading mb-12">
          <div className="index">03</div>
          <h2 className="title">THE CURRICULUM — Pushing Engineering Boundaries</h2>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-12">
          Edtech standardly stops at teaching API endpoints. We prepare you to build compilers, write distributed engines, and contribute to major open-source repositories as upcoming systems leaders and founders.
        </p>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Phase Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {phases.map((phase, idx) => {
              const isActive = activePhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-2 ${
                    isActive
                      ? "bg-slate-900/60 border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.06)]"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-cyan-400" : "text-zinc-500"}`}>
                    {phase.title}
                  </span>
                  <span className="text-sm font-semibold text-white">{phase.subtitle}</span>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-1">{phase.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Project Spotlight Panel */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-white/5 bg-slate-950/40 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              {/* Decorative background glow */}
              <div className="absolute right-0 top-0 -z-10 w-48 h-48 rounded-full bg-cyan-500/5 blur-[80px]" />
              
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 flex-wrap border-b border-white/5 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
                      CURRICULUM SPOTLIGHT PROJECT
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {phases[activePhase].project.name}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-zinc-500">DIFFICULTY SCORE</span>
                    <span className="text-base font-bold text-cyan-400 glow-text">
                      {phases[activePhase].project.difficulty}
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {phases[activePhase].project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md border border-cyan-500/10 bg-cyan-950/20 text-cyan-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Blueprint */}
                <div className="mb-6 bg-white/[0.02] border border-white/5 rounded-xl p-4">
                  <span className="text-[10px] font-mono text-zinc-500 block mb-1">SYSTEM ARCHITECTURE BLUEPRINT</span>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {phases[activePhase].project.blueprint}
                  </p>
                </div>

                {/* Deliverables */}
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block mb-2">KEY PRODUCTION DELIVERABLES</span>
                  <ul className="space-y-2">
                    {phases[activePhase].project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <span className="text-cyan-400 font-bold mt-0.5">↳</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="border-t border-white/5 pt-4 mt-8 flex items-center justify-between text-[11px] text-zinc-500">
                <span>PROJECT TYPE: CORE PORTFOLIO ENGINE</span>
                <span className="text-zinc-400">BUILD FROM SCRATCH ⚡</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
