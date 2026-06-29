import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/6 bg-black">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-zinc-500 text-xs text-center md:text-left">
          <div className="font-semibold text-zinc-300">© {new Date().getFullYear()} Tech-Squarers</div>
          <div className="mt-1">Incubating systems engineers, open-source maintainers, and upcoming tech founders.</div>
        </div>
        <div className="flex gap-6 text-xs text-zinc-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Back to Top</a>
          <span>•</span>
          {/* <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300">GitHub</a>
          <span>•</span> */}
          <a href="https://www.linkedin.com/company/techsquarers/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

