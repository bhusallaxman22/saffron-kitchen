// src/components/CursorTrail.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function CursorTrail() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const springStyle = useSpring({
    to: { left: coords.x, top: coords.y },
    config: { tension: 300, friction: 20 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <animated.div
      style={{
        position: 'fixed',
        width: 12,
        height: 12,
        background: 'rgba(245, 158, 11, 0.8)',
        borderRadius: '50%',
        pointerEvents: 'none',
        ...springStyle,
      }}
    />
  );
}
