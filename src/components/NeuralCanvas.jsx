import React, { useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

export default function NeuralCanvas() {
  const ref = useRef(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return

    const createVanta = typeof NET === 'function' ? NET : NET?.default
    if (!createVanta) {
      console.error('Vanta NET could not be initialized:', NET)
      return
    }

    if (!vantaRef.current) {
      vantaRef.current = createVanta({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00f0ff,
        backgroundColor: 0x000000,
        points: 12.0,
        maxDistance: 24.0,
        spacing: 20.0
      })
    }

    return () => {
      if (vantaRef.current) {
        try { vantaRef.current.destroy() } catch (e) {}
        vantaRef.current = null
      }
    }
  }, [])

  return (
    <div ref={ref} className="w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(5,10,15,0.6), rgba(0,0,0,0.6))' }} />
  )
}
