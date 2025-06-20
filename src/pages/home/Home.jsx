import { useEffect, useRef, useState } from 'react';
import BackgroundAnimation from '../../components/BackgroundAnimation';

export default function Home() {
  const titleRef = useRef(null);
  const gridCanvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Prevent scrolling on homepage
    document.body.classList.add('home-no-scroll');
    
    // Typing animation
    const text = "Hi, I'm Benjamin Nashel";
    let index = 0;
    titleRef.current.textContent = '';
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        titleRef.current.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Mouse move handler for interactive effects
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth);
      const y = (e.clientY / window.innerHeight);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animated grid canvas setup
    const setupAnimatedGrid = () => {
      const canvas = gridCanvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resize();
      window.addEventListener('resize', resize);

      let animationId;
      let time = 0;

      const drawGrid = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Grid properties
        const gridSize = 60;
        const lineWidth = 1;
        const baseOpacity = 0.1;
        
        // Mouse influence
        const mouseInfluence = 150;
        const mouseX = mousePosition.x * canvas.width;
        const mouseY = mousePosition.y * canvas.height;
        
        // Animated wave effect
        const waveSpeed = 0.002;
        const waveAmplitude = 0.3;
        
        // Draw vertical lines
        for (let x = 0; x <= canvas.width; x += gridSize) {
          for (let y = 0; y <= canvas.height; y += gridSize) {
            const distanceToMouse = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
            const mouseEffect = Math.max(0, 1 - distanceToMouse / mouseInfluence);
            
            const wave = Math.sin((x + y) * 0.01 + time * waveSpeed) * waveAmplitude;
            const opacity = baseOpacity + mouseEffect * 0.4 + wave * 0.1;
            
            const hue = (time * 0.05 + x * 0.1 + y * 0.1) % 360;
            ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${Math.min(opacity, 0.8)})`;
            ctx.lineWidth = lineWidth + mouseEffect * 2;
            
            // Vertical line
            if (x <= canvas.width) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, Math.min(y + gridSize, canvas.height));
              ctx.stroke();
            }
            
            // Horizontal line  
            if (y <= canvas.height) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(Math.min(x + gridSize, canvas.width), y);
              ctx.stroke();
            }
          }
        }
        
        time++;
        animationId = requestAnimationFrame(drawGrid);
      };

      drawGrid();
      
      return () => {
        window.removeEventListener('resize', resize);
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    };

    const gridCleanup = setupAnimatedGrid();

    return () => {
      clearInterval(typingInterval);
      document.body.classList.remove('home-no-scroll');
      window.removeEventListener('mousemove', handleMouseMove);
      if (gridCleanup) gridCleanup();
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="content fade-in">
      {/* Animated Grid Background */}
      <canvas 
        ref={gridCanvasRef}
        className="animated-grid-canvas"
      />
      
      {/* Gradient Overlays */}
      <div className="gradient-overlay-container">
        <div className="gradient-overlay gradient-overlay-1"></div>
        <div className="gradient-overlay gradient-overlay-2"></div>
        <div className="gradient-overlay gradient-overlay-3"></div>
      </div>
      
      <div className="home-title-fixed" ref={titleRef}></div>
      <BackgroundAnimation />
    </div>
  );
} 