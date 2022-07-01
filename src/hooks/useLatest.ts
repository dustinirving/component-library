import { useRef } from 'react';

/**
 * Returns a ref to the passed in object that updates whenever the passed in object
 * updates.  This is handy when you want to create a callback, and you don't want
 * the callback to change because a value it depends on changes.
 */
export function useLatest<T>(thing: T) {
  const ref = useRef<T>(thing);
  ref.current = thing;
  return ref;
}
