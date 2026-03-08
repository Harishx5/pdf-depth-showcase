import { useState, useEffect, useCallback, useRef } from 'react';

export const useMousePosition = (containerRef?: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      } else {
        setPosition({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      }
    });
  }, [containerRef]);

  useEffect(() => {
    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);
    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, containerRef]);

  return position;
};
