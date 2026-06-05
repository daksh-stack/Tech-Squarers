import React, { useEffect, useRef, useState } from 'react'

export default function HeroBackground() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMouse({ x, y });
    };

    const handleLeave = () => setMouse({ x: 0.5, y: 0.5 });

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  const transformFor = (depth = 0.04) => {
    const tx = (mouse.x - 0.5) * 100 * depth;
    const ty = (mouse.y - 0.5) * 80 * depth;
    const rotate = (mouse.x - 0.5) * 8 * depth * 10;
    return `translate3d(${tx}px, ${ty}px, 0) rotate(${rotate}deg)`;
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
      {/* Aurora Blob 1 */}
      <div
        className="absolute left-[6%] top-[12%] h-[26rem] w-[26rem] rounded-full bg-violet-500/60 blur-[120px]"
        style={{ transform: transformFor(0.9), transition: 'transform 0.6s cubic-bezier(0.2,0.8,0.2,1)' }}
      />

      {/* Aurora Blob 2 */}
      <div
        className="absolute right-[8%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-cyan-500/50 blur-[120px]"
        style={{ transform: transformFor(0.6), transition: 'transform 0.7s cubic-bezier(0.2,0.8,0.2,1)' }}
      />

      {/* Aurora Blob 3 */}
      <div
        className="absolute bottom-[4%] left-[30%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/35 blur-[150px]"
        style={{ transform: transformFor(0.3), transition: 'transform 0.9s cubic-bezier(0.2,0.8,0.2,1)' }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)] pointer-events-none" />
    </div>
  );
}