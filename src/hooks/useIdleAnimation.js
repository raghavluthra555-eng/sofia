import { useEffect, useRef } from 'react';

export function useIdleAnimation(delay = 0, speed = 1, rotationRange = 0.5, floatRange = 5) {
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let startTime = performance.now() + delay;

    const animate = (time) => {
      if (!ref.current) return;
      
      const elapsed = (time - startTime) * 0.001 * speed;
      
      // Extremely subtle cinematic float
      const yFloat = Math.sin(elapsed) * floatRange;
      const xFloat = Math.cos(elapsed * 0.8) * (floatRange * 0.5);
      
      // Keep rotation practically imperceptible (under 1 degree)
      const rotX = Math.sin(elapsed * 0.5) * rotationRange;
      const rotY = Math.cos(elapsed * 0.6) * rotationRange;
      const rotZ = Math.sin(elapsed * 0.4) * (rotationRange * 0.5);
      
      ref.current.style.transform = `translate3d(${xFloat}px, ${yFloat}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [delay, speed, rotationRange, floatRange]);

  return ref;
}
