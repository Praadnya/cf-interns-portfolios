import React from 'react';

export const SectionDecorator = ({ title }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="h-[2px] w-12 bg-pink-800" />
    <div className="w-3 h-3 rounded-full bg-pink-800" />
    <h2 className="text-4xl font-bold text-gray-100">{title}</h2>
  </div>
);