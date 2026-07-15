import { useRef, useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapConfig';

export function useScrollTimeline(containerRef, scrollDistance = 3000) {
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    timelineRef.current = tl;

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [containerRef, scrollDistance]);

  return timelineRef;
}
