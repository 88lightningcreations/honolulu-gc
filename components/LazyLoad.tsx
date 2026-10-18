'use client';

import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { PropsWithChildren } from 'react';

interface LazyLoadProps extends PropsWithChildren {
  className?: string;
}

export default function LazyLoad({ children, className }: LazyLoadProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : null}
    </div>
  );
}
