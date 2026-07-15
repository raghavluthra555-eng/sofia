import { useState, useEffect, useCallback } from 'react';

function getResponsiveValues(width) {
  if (width < 768) {
    return { isMobile: true, isTablet: false, isDesktop: false, motionScale: 0.5, scrollDistance: 2500 };
  }
  if (width <= 1024) {
    return { isMobile: false, isTablet: true, isDesktop: false, motionScale: 0.7, scrollDistance: 2800 };
  }
  return { isMobile: false, isTablet: false, isDesktop: true, motionScale: 1.0, scrollDistance: 3000 };
}

export function useResponsive() {
  const [values, setValues] = useState(() => getResponsiveValues(typeof window !== 'undefined' ? window.innerWidth : 1200));

  const handleResize = useCallback(() => {
    setValues(getResponsiveValues(window.innerWidth));
  }, []);

  useEffect(() => {
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return values;
}
