import { useEffect, useRef, useState } from "react";

export default function Phoenix() {
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const [rotation, setRotation] = useState(0);

  const targetRef = useRef({
    x: window.innerWidth * 0.7,
    y: window.innerHeight * 0.4,
  });

  const trailRef = useRef([]);

  useEffect(() => {
    const chooseTarget = () => {
      targetRef.current = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.8,
      };
    };

    chooseTarget();

    let animationFrame;

    const animate = () => {
      setPos((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          chooseTarget();
        }

        const speed = 1.5;

        const nx = prev.x + dx * 0.005 * speed;
        const ny = prev.y + dy * 0.005 * speed;

        const angle =
          (Math.atan2(dy, dx) * 180) / Math.PI;

        setRotation(angle);

        trailRef.current.push({
          x: nx,
          y: ny,
          id: Date.now() + Math.random(),
        });

        if (trailRef.current.length > 40) {
          trailRef.current.shift();
        }

        return { x: nx, y: ny };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {/* Trail */}
      {trailRef.current.map((point, i) => (
        <div
          key={point.id}
          className="absolute rounded-full bg-orange-400"
          style={{
            left: point.x,
            top: point.y,
            width: 4,
            height: 4,
            opacity: i / trailRef.current.length,
            filter: "blur(4px)",
          }}
        />
      ))}

      {/* Phoenix */}
      <div
        className="absolute"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transition: "transform 0.15s linear",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M20 55
               Q50 10 80 55
               Q60 40 50 70
               Q40 40 20 55Z"
            fill="#ff6a00"
            filter="url(#glow)"
          />

          <defs>
            <filter id="glow">
              <feGaussianBlur
                stdDeviation="3"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}