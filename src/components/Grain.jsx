import React from 'react';
import grainTexture from '../assets/grain.png';

export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-40 pointer-events-none mix-blend-screen opacity-[0.15]"
      style={{
        backgroundImage: `url(${grainTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
      }}
    />
  );
}
