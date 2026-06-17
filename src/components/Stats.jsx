import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll('.stat')
      items.forEach((el) => {
        // animate the stat container into view
        gsap.from(el, { opacity: 0, y: 10, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 95%' } })
        const number = el.querySelector('.stat-number')
        const value = parseFloat(number.dataset.value)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate: function() {
            if (String(value).includes('.')) {
              number.innerText = obj.val.toFixed(1)
            } else {
              number.innerText = Math.floor(obj.val)
            }
          }
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="mt-12 mb-8 flex flex-col sm:flex-row items-center justify-start gap-8 sm:gap-12 md:gap-16 w-full">
      <div className="stat text-center sm:text-left">
        <div className="stat-number text-3xl md:text-4xl font-bold text-white" data-value="73">0</div>
        <div className="text-sm text-zinc-400 mt-2">% of engineers roles changed</div>
      </div>

      <div className="stat text-center sm:text-left">
        <div className="stat-number text-3xl md:text-4xl font-bold text-white" data-value="320">0</div>
        <div className="text-sm text-zinc-400 mt-2">B USD market opportunity</div>
      </div>

      <div className="stat text-center sm:text-left">
        <div className="stat-number text-3xl md:text-4xl font-bold text-white" data-value="4">0</div>
        <div className="text-sm text-zinc-400 mt-2">x faster adoption with AI</div>
      </div>
    </div>
  )
}
