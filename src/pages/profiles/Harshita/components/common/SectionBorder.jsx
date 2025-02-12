import React from 'react';

export const SectionBorder = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-1/3 h-1/3 border-l-2 border-t-2 border-pink-800/50 rounded-tl-3xl" />
    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-r-2 border-b-2 border-pink-800/50 rounded-br-3xl" />
  </div>
);