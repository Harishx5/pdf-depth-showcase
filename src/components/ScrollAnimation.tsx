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
    up: 'translateY(16px)',
    left: 'translateX(-16px)',
    right: 'translateX(16px)',
    scale: 'scale(0.97)',
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transforms[direction],
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
