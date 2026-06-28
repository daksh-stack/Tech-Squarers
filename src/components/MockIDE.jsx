import React, { useState } from "react";

export default function MockIDE() {
  const [activeTab, setActiveTab] = useState("rust");

  const files = {
    rust: {
      name: "scheduler.rs",
      lang: "rust",
      icon: "🦀",
      code: [
        { text: "// Concurrent task scheduler for systems engines", color: "text-zinc-500 font-italic" },
        { text: "pub struct Scheduler {", color: "text-violet-400" },
        { text: "    workers: Vec<Worker>,", color: "text-zinc-300" },
        { text: "    queue: Arc<Mutex<VecDeque<Task>>>,", color: "text-zinc-300" },
        { text: "}", color: "text-violet-400" },
        { text: "", color: "" },
        { text: "impl Scheduler {", color: "text-violet-400" },
        { text: "    pub fn spawn(&mut self, task: Task) {", color: "text-cyan-400" },
        { text: "        let mut queue = self.queue.lock().unwrap();", color: "text-zinc-300" },
        { text: "        queue.push_back(task);", color: "text-zinc-300" },
        { text: "        // Signal worker threads", color: "text-zinc-500" },
        { text: "        self.notify_idle_workers();", color: "text-cyan-400" },
        { text: "    }", color: "text-cyan-400" },
        { text: "}", color: "text-violet-400" }
      ]
    },
    go: {
      name: "storage.go",
      lang: "go",
      icon: "⚡",
      code: [
        { text: "package storage", color: "text-cyan-400" },
        { text: "", color: "" },
        { text: "import \"sync\"", color: "text-violet-400" },
        { text: "", color: "" },
        { text: "// Distributed Log replication engine", color: "text-zinc-500 font-italic" },
        { text: "type ReplicationGroup struct {", color: "text-violet-400" },
        { text: "    mu      sync.RWMutex", color: "text-zinc-300" },
        { text: "    peers   []string", color: "text-zinc-300" },
        { text: "    commit  int64", color: "text-zinc-300" },
        { text: "}", color: "text-violet-400" },
        { text: "", color: "" },
        { text: "func (rg *ReplicationGroup) AppendEntries(term int) bool {", color: "text-cyan-400" },
        { text: "    rg.mu.Lock()", color: "text-zinc-300" },
        { text: "    defer rg.mu.Unlock()", color: "text-violet-400" },
        { text: "    // Run consensus quorum check", color: "text-zinc-500" },
        { text: "    return rg.verifyQuorum()", color: "text-cyan-400" },
        { text: "}", color: "text-cyan-400" }
      ]
    },
    cpp: {
      name: "kernel.cpp",
      lang: "cpp",
      icon: "⚙️",
      code: [
        { text: "#include <vector>", color: "text-cyan-400" },
        { text: "#include <iostream>", color: "text-cyan-400" },
        { text: "", color: "" },
        { text: "// High-performance virtual memory manager", color: "text-zinc-500 font-italic" },
        { text: "class MemoryManager {", color: "text-violet-400" },
        { text: "private:", color: "text-violet-400" },
        { text: "    size_t total_pages;", color: "text-zinc-300" },
        { text: "    std::vector<void*> page_table;", color: "text-zinc-300" },
        { text: "public:", color: "text-violet-400" },
        { text: "    void* allocate_page() {", color: "text-cyan-400" },
        { text: "        void* page = malloc(4096); // 4KB aligned", color: "text-zinc-300" },
        { text: "        page_table.push_back(page);", color: "text-zinc-300" },
        { text: "        return page;", color: "text-zinc-300" },
        { text: "    }", color: "text-cyan-400" },
        { text: "};", color: "text-violet-400" }
      ]
    }
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl overflow-hidden flex flex-col font-mono text-xs select-none">
      {/* IDE Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-zinc-500 text-[11px] font-medium flex items-center gap-1">
          <span>tech-squarers-workspace</span>
          <span>/</span>
          <span className="text-zinc-400">{files[activeTab].name}</span>
        </div>
        <div className="w-12" />
      </div>

      {/* IDE Tabs */}
      <div className="flex bg-slate-900/30 border-b border-white/5">
        {Object.entries(files).map(([key, file]) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-4 py-2.5 border-r border-white/5 transition-all text-[11px] ${
                isActive
                  ? "bg-slate-950 text-cyan-400 border-b-2 border-b-cyan-400"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-slate-900/20"
              }`}
            >
              <span>{file.icon}</span>
              <span>{file.name}</span>
            </button>
          );
        })}
      </div>

      {/* IDE Code Area */}
      <div className="flex-1 p-5 overflow-x-auto custom-scrollbar h-[200px] md:h-[240px] bg-slate-950/90 text-left">
        <pre className="leading-relaxed">
          {files[activeTab].code.map((line, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="w-5 text-right text-zinc-600 select-none text-[10px]">{idx + 1}</span>
              <span className={line.color}>{line.text}</span>
            </div>
          ))}
        </pre>
      </div>

      {/* Terminal / Output Console */}
      <div className="bg-slate-900/60 border-t border-white/5 p-4 text-[10px] text-zinc-400">
        <div className="flex items-center justify-between text-zinc-500 mb-2 pb-1 border-b border-white/5 font-semibold">
          <span>TERMINAL (REPLICATOR SHELL)</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 glow-pulse" />
            ONLINE
          </span>
        </div>
        <div className="space-y-1 text-left leading-normal">
          <div className="text-zinc-500">$ cargo build --release --target=systems_core</div>
          <div className="text-zinc-300">   Compiling tech-squarers-rt v0.9.4</div>
          <div className="text-zinc-300">    Finished release [optimized] target(s) in 0.28s</div>
          <div className="text-zinc-500">$ ./tech-squarers-rt --run</div>
          <div className="text-emerald-400/90 font-medium">✓ Engine core listening on port 8080 (10k req/s loop)</div>
          <div className="text-violet-400/90 font-medium">✓ Custom memory scheduler loaded: 0ms garbage collection delay</div>
        </div>
      </div>
    </div>
  );
}
