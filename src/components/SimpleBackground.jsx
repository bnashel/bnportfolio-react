import { useEffect, useRef } from 'react';

const SimpleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Simple CSS-only animated background
    container.style.background = `
      linear-gradient(45deg, 
        rgba(255, 255, 255, 0.1) 25%, 
        transparent 25%, 
        transparent 75%, 
        rgba(255, 255, 255, 0.1) 75%
      ),
      linear-gradient(-45deg, 
        rgba(255, 255, 255, 0.1) 25%, 
        transparent 25%, 
        transparent 75%, 
        rgba(255, 255, 255, 0.1) 75%
      )
    `;
    container.style.backgroundSize = '20px 20px';
    container.style.animation = 'simpleBackgroundMove 20s linear infinite';
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        opacity: 0.3,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SimpleBackground; 