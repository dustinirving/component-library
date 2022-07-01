import { useCallback, useEffect, useState } from 'react';
import { useLatest } from './useLatest';

/**
 * Starts a timer which will call `fn` in `ms` milliseconds.
 *
 * If any value in `deps` changes, or `ms` changes, then the timeout will be cancelled
 * and restarted.  Note that if `fn` changes and `deps` do not change, then the
 * timer will *not* be restarted, but the most recent fn will be called.
 *
 * Timer will not be started in the first place if `ms` is undefined or < 0.
 */
export function useTimeout(fn: () => void, ms: number | undefined, deps: any[] = []) {
  const latestFn = useLatest(fn);

  useEffect(() => {
    if (typeof ms === 'number' && ms > -1) {
      const timeout = setTimeout(() => latestFn.current(), ms);
      return () => clearTimeout(timeout);
    }

    return void 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms, ...deps]);
}

/**
 * Runs `fn` event `ms` milliseconds.
 *
 * If `ms` is undefined or <= 0, then this function will do nothing.
 *
 * If any value in `deps` changes, or `ms` changes, then the interval will be cancelled
 * and restarted.  Note that if `fn` changes and `deps` do not change, then the
 * interval will *not* be restarted.
 */
export function useInterval(fn: () => void, ms: number | undefined, deps: any[] = []) {
  const latestFn = useLatest(fn);

  useEffect(() => {
    if (typeof ms === 'number' && ms > 0) {
      const timeout = setInterval(() => latestFn.current(), ms);
      return () => clearInterval(timeout);
    }

    return void 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms, ...deps]);
}

/**
 * If `trigger()` is called, then `state` will become true for the specified timeout,
 * and then become false again.  If `trigger` is called multiple times, each time
 * will cancel the current timeout and start a new one.
 *
 * This hook is ideal for cases where you want to show an error message for a
 * short time when a user clicks on a button.
 *
 * @returns a `[state, trigger]` object.
 */
export function useImperativeTimeout(timeout: number): [boolean, () => void] {
  const [trueUntil, setTrueUntil] = useState<number | undefined>();
  const timeoutRef = useLatest(timeout);

  const trigger = useCallback(() => setTrueUntil(Date.now() + timeoutRef.current), [timeoutRef]);

  useTimeout(
    () => setTrueUntil(undefined),
    trueUntil !== undefined ? trueUntil - Date.now() : undefined,
    [],
  );

  return [trueUntil !== undefined, trigger];
}
