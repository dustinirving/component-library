import { useRef } from 'react';

/**
 * Keep track of the previous value of a prop (or other value)
 * between renders.
 */
export function usePrevious<T>(value: T) {
  const previousRef = useRef<T | undefined>(undefined);

  const prevProps = previousRef.current;
  previousRef.current = value;
  return prevProps;
}
