
"use client";

import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  delay?: number; // Milliseconds to delay the animation
}

export function useScrollReveal<T extends HTMLElement>(
  options?: ScrollRevealOptions
): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (options?.delay && options.delay > 0) {
            timeoutId = setTimeout(() => {
              setIsVisible(true);
              if (options?.triggerOnce !== false && elementRef.current) {
                observer.unobserve(elementRef.current);
              }
            }, options.delay);
          } else {
            setIsVisible(true);
            if (options?.triggerOnce !== false && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        } else {
          // If triggerOnce is false, reset visibility when element scrolls out of view
          if (options?.triggerOnce === false) {
             if (timeoutId) clearTimeout(timeoutId);
            setIsVisible(false);
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px',
        root: options?.root ?? null,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
}
