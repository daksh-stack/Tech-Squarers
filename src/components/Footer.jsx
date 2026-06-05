import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-300">© {new Date().getFullYear()} Tech-Squarers</div>
        <div className="flex gap-4">
          <a href="#" className="text-zinc-300 hover:text-white">Twitter</a>
          <a href="#" className="text-zinc-300 hover:text-white">LinkedIn</a>
          <a href="#" className="text-zinc-300 hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
