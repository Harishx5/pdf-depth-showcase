import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, className, delay = 0, direction = 'up' }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const transforms = {
    up: 'translate3d(0, 60px, 0)',
    left: 'translate3d(-60px, 0, 0)',
    right: 'translate3d(60px, 0, 0)',
    scale: 'scale(0.85)',
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0,0,0) scale(1)' : transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
