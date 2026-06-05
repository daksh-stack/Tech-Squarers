import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
      >
        <a href="#home" className="rounded-xl px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white">Home</a>
        <a href="#features" className="rounded-xl px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white">Features</a>
        <a href="#how" className="rounded-xl px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white">How</a>
        <a href="#testimonials" className="rounded-xl px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white">Testimonials</a>
        <a href="#contact" className="rounded-xl px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white">Contact</a>
      </nav>
    </div>
  );
}
