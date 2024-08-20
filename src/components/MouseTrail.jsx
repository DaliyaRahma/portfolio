import React, { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateTrail = (x, y) => {
      const newTrail = [...trail, { x, y }];
      setTrail(newTrail.slice(-30));
    };

    const mouseMove = (event) => {
      updateTrail(event.clientX, event.clientY);
    };

    const touchMove = (event) => {
      const touch = event.touches[0];
      updateTrail(touch.clientX, touch.clientY);
    };

    const clearTrail = () => {
      setTrail([]);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', clearTrail);
    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', clearTrail);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', clearTrail);
      document.removeEventListener('touchmove', touchMove);
      document.removeEventListener('touchend', clearTrail);
    };
  }, [trail]);

  return (
    <svg className='absolute inset-0 pointer-events-none z-10 w-full h-full'
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
    >
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="blur-filter" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      <polyline
        points={trail.map((point) => `${point.x},${point.y}`).join(' ')}
        style={{ fill: 'none', stroke: 'url(#gradient)', strokeWidth: '2', filter: 'url(#blur-filter)' }}
      />
    </svg>
  );
};

export default MouseTrail;
