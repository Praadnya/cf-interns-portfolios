import React from 'react';
import { FloatingShape } from './FloatingShape';

export const BackgroundShapes = () => (
  <div className="fixed inset-0 overflow-hidden">
    <FloatingShape 
      className="from-pink-500/20 to-purple-500/20 w-64 h-64 -left-32"
      animationProps={{ 
        x: [-100, 100],
        y: [-50, 50],
        rotate: [0, 180]
      }}
    />
    <FloatingShape 
      className="from-purple-500/20 to-pink-500/20 w-96 h-96 right-0 top-1/4"
      animationProps={{ 
        x: [100, -100],
        y: [100, -100],
        rotate: [180, 0]
      }}
    />
    <FloatingShape 
      className="from-pink-500/20 to-purple-500/20 w-72 h-72 bottom-0 left-1/4"
      animationProps={{ 
        x: [-50, 50],
        y: [50, -50],
        rotate: [-90, 90]
      }}
    />
    <FloatingShape 
      className="from-purple-600/10 to-pink-600/10 w-48 h-48 top-1/3 left-1/3"
      animationProps={{ 
        scale: [1, 1.2],
        rotate: [45, -45]
      }}
    />
    <FloatingShape 
      className="from-pink-600/10 to-purple-600/10 w-56 h-56 bottom-1/4 right-1/4"
      animationProps={{ 
        scale: [1.2, 1],
        rotate: [-45, 45]
      }}
    />
  </div>
);