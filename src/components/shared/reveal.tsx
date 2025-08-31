"use client";

import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const Reveal = ({ children, className, delay = 0, direction = 'up' }: RevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionClasses = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: '-translate-x-12',
    right: 'translate-x-12',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0',
        !inView && directionClasses[direction],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
