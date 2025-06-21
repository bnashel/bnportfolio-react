import { useEffect, useRef, useState, useCallback } from 'react';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import SimpleBackground from '../../components/SimpleBackground';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';

// Throttle function for performance optimization
const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export default function Home() {
  const titleRef = useRef(null);
  const gridCanvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isLowPerformance } = usePerformanceMode();
  
  // Throttle mouse movement for better performance
  const throttledSetMousePosition = useCallback(
    throttle((x, y) => setMousePosition({ x, y }), isLowPerformance ? 100 : 16),
    [isLowPerformance]
  );

  // One-time setup effect (typing animation, scroll prevention, mouse handler)
  useEffect(() => {
    // Prevent scrolling on homepage
    document.body.classList.add('home-no-scroll');
    
    // Typing animation - runs only once
    const text = "Hi, I'm Benjamin Nashel";
    let index = 0;
    titleRef.current.textContent = '';
    
    // Faster typing for low performance devices
    const typingSpeed = isLowPerformance ? 50 : 100;
    
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        titleRef.current.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Mouse move handler for interactive effects
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth);
      const y = (e.clientY / window.innerHeight);
      throttledSetMousePosition(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearInterval(typingInterval);
      document.body.classList.remove('home-no-scroll');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // No dependencies - runs only once

  // Grid animation effect - DISABLED
  // useEffect(() => {
  //   const setupAnimatedGrid = () => {
  //     const canvas = gridCanvasRef.current;
  //     if (!canvas) return;

  //     const ctx = canvas.getContext('2d');
  //     const resize = () => {
  //       canvas.width = window.innerWidth;
  //       canvas.height = window.innerHeight;
  //     };
      
  //     resize();
  //     window.addEventListener('resize', resize);

  //     let animationId;
  //     let time = 0;

  //     const drawGrid = () => {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
        
  //       // Performance-aware grid properties
  //       const gridSize = isLowPerformance ? 80 : 60;
  //       const lineWidth = 1;
  //       const isDarkMode = document.documentElement.classList.contains('dark');
  //       const baseOpacity = isLowPerformance ? 0.05 : (isDarkMode ? 0.06 : 0.1);
        
  //       // Mouse influence (reduced for low performance)
  //       const mouseInfluence = isLowPerformance ? 100 : 150;
  //       const mouseX = mousePosition.x * canvas.width;
  //       const mouseY = mousePosition.y * canvas.height;
        
  //       // Animated wave effect (slower for low performance)
  //       const waveSpeed = isLowPerformance ? 0.001 : 0.002;
  //       const waveAmplitude = isLowPerformance ? 0.15 : 0.3;
        
  //       // Draw vertical lines
  //       for (let x = 0; x <= canvas.width; x += gridSize) {
  //         for (let y = 0; y <= canvas.height; y += gridSize) {
  //           const distanceToMouse = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
  //           const mouseEffect = Math.max(0, 1 - distanceToMouse / mouseInfluence);
            
  //           const wave = Math.sin((x + y) * 0.01 + time * waveSpeed) * waveAmplitude;
  //           const opacity = baseOpacity + mouseEffect * 0.4 + wave * 0.1;
            
  //           const hue = (time * 0.05 + x * 0.1 + y * 0.1) % 360;
  //           ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${Math.min(opacity, 0.8)})`;
  //           ctx.lineWidth = lineWidth + mouseEffect * 2;
            
  //           // Vertical line
  //           if (x <= canvas.width) {
  //             ctx.beginPath();
  //             ctx.moveTo(x, y);
  //             ctx.lineTo(x, Math.min(y + gridSize, canvas.height));
  //             ctx.stroke();
  //           }
            
  //           // Horizontal line  
  //           if (y <= canvas.height) {
  //             ctx.beginPath();
  //             ctx.moveTo(x, y);
  //             ctx.lineTo(Math.min(x + gridSize, canvas.width), y);
  //             ctx.stroke();
  //           }
  //         }
  //       }
        
  //       time++;
  //       animationId = requestAnimationFrame(drawGrid);
  //     };

  //     drawGrid();
      
  //     return () => {
  //       window.removeEventListener('resize', resize);
  //       if (animationId) {
  //         cancelAnimationFrame(animationId);
  //       }
  //     };
  //   };

  //   const gridCleanup = setupAnimatedGrid();
  //   return () => {
  //     if (gridCleanup) gridCleanup();
  //   };
  // }, [mousePosition.x, mousePosition.y]); // Only grid depends on mouse position

  return (
    <div className="content fade-in">
      {/* Animated Grid Background - DISABLED */}
      {/* {!isLowPerformance && (
      <canvas 
        ref={gridCanvasRef}
        className="animated-grid-canvas"
      />
      )} */}
      
      {/* Gradient Overlays - simplified for low performance */}
      <div className="gradient-overlay-container">
        <div className="gradient-overlay gradient-overlay-1"></div>
        {!isLowPerformance && <div className="gradient-overlay gradient-overlay-2"></div>}
        {!isLowPerformance && <div className="gradient-overlay gradient-overlay-3"></div>}
      </div>
      
      <div className="home-title-fixed" ref={titleRef}></div>
      {isLowPerformance ? <SimpleBackground /> : <BackgroundAnimation />}
    </div>
  );
} 