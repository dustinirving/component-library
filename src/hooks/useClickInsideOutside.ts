import { useEffect } from 'react';
import { useLatest } from './useLatest';

/**
 * useOnClickOutside will call `fn(false)` whenever the user clicks outside
 * the provided element (and will call `fn(true)` whenever the user clicks inside
 * the provided element)
 */
export function useOnClickInsideOutside(
  element: React.RefObject<Node | null | undefined>,
  fn: (isInside: boolean) => void,
  options: {
    disabled?: boolean;
  } = {},
) {
  const latestFn = useLatest(fn);
  const disabled = options.disabled || false;

  useEffect(() => {
    if (!disabled) {
      const listener = (e: MouseEvent) => {
        if (!element.current) {
          return;
        }

        let clickInside = false;

        let clickTarget: Node | null = isNode(e.target) ? e.target : null;
        while (clickTarget) {
          if (clickTarget === element.current) {
            clickInside = true;
            break;
          }
          clickTarget = clickTarget.parentNode;
        }

        latestFn.current(clickInside);
      };

      document.addEventListener('click', listener);
      return () => document.removeEventListener('click', listener);
    }
  }, [element, latestFn, disabled]);
}

function isNode(n: EventTarget | null): n is Node {
  return 'parentNode' in (n as any);
}
