import { useLayoutEffect, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

/**
 * Returns the `width` and `height` of the window.
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return () => void 0;
    }

    const listener = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return windowSize;
}
