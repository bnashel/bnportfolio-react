import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const PhysicsTitle = () => {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const bodiesRef = useRef([]);
  const textElementsRef = useRef([]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const animationStateRef = useRef('falling'); // 'falling', 'converging', 'stable', 'restarting'

  const text = "Hi, I'm Benjamin Nashel";

  const startAnimation = () => {
    if (!containerRef.current) return;

    console.log('🚀 Starting Physics Animation Cycle...');
    animationStateRef.current = 'falling';

    // Clear any existing elements
    const existingElements = containerRef.current.querySelectorAll('.physics-letter');
    existingElements.forEach(el => el.remove());

    // Create physics engine with realistic gravity
    const engine = Matter.Engine.create();
    engine.world.gravity.y = 1.0;
    engine.world.gravity.x = 0;
    engineRef.current = engine;

    // Create runner
    const runner = Matter.Runner.create();
    runnerRef.current = runner;

    // Container dimensions
    const containerWidth = window.innerWidth;

    // Create floor slightly above bottom so letters stay visible
    const screenHeight = window.innerHeight;
    const floorY = screenHeight - 120;
    const floor = Matter.Bodies.rectangle(containerWidth / 2, floorY, containerWidth * 3, 60, {
      isStatic: true,
      render: { visible: false },
      restitution: 1.1, // Nice bounce without being crazy
      friction: 0.2, // Moderate friction
      frictionStatic: 0.3,
      label: 'floor'
    });
    
    const leftWall = Matter.Bodies.rectangle(-50, screenHeight / 2, 100, screenHeight * 2, {
      isStatic: true,
      render: { visible: false }
    });
    
    const rightWall = Matter.Bodies.rectangle(containerWidth + 50, screenHeight / 2, 100, screenHeight * 2, {
      isStatic: true,
      render: { visible: false }
    });

    // Create letters with physics
    const bodies = [];
    const textElements = [];
    const fontSize = window.innerWidth > 768 ? 35 : 28;
    
    // Calculate precise final positions for perfectly readable text
    const charSpacing = fontSize * 0.95; // Tighter spacing for better readability
    const lettersOnly = text.replace(/ /g, '');
    const totalTextWidth = lettersOnly.length * charSpacing;
    const startX = (containerWidth - totalTextWidth) / 2;
    const finalY = 80; // Positioned lower to avoid overlap with torus animation

    // Choose a random letter to be the "special" spinning one that arrives last
    // Exclude small letters like 'i' from being special to avoid issues
    const excludeFromSpecial = ['i', 'l', 'j', ','];
    const eligibleForSpecial = [];
    lettersOnly.split('').forEach((char, index) => {
      if (!excludeFromSpecial.includes(char.toLowerCase())) {
        eligibleForSpecial.push(index);
      }
    });
    const specialLetterIndex = eligibleForSpecial.length > 0 ? 
      eligibleForSpecial[Math.floor(Math.random() * eligibleForSpecial.length)] : 
      Math.floor(Math.random() * lettersOnly.length);
    console.log(`✨ Special letter will be index ${specialLetterIndex}: "${lettersOnly[specialLetterIndex]}"`);

    let letterIndex = 0;
    let visualIndex = 0; // For spacing that includes spaces
    text.split('').forEach((char, index) => {
      if (char === ' ') {
        visualIndex += 1.8; // Add proper space equivalent for readability
        return;
      }

      // Calculate precise final position including space handling
      const finalX = startX + visualIndex * charSpacing;
      
      // Random starting positions - closer range for smoother convergence
      const startX_pos = Math.random() * containerWidth * 1.2 - containerWidth * 0.1;
      const startY_pos = Math.random() * 400 - 300;

      // Assign letter types - only medium and heavy
      const letterTypes = ['medium', 'heavy'];
      const letterType = letterTypes[Math.floor(Math.random() * letterTypes.length)];
      
      let radius, mass, density, restitution, friction, frictionAir;
      
      if (letterType === 'medium') {
        radius = 14 + Math.random() * 6;
        mass = 1.0;
        density = 0.001;
        restitution = 1.0; // Good bounce but not excessive
        friction = 0.3;
        frictionAir = 0.03;
      } else {
        radius = 18 + Math.random() * 8;
        mass = 2.0;
        density = 0.003;
        restitution = 0.9; // Solid bounce for heavy letters
        friction = 0.4;
        frictionAir = 0.015;
      }

      // Create physics body
      const body = Matter.Bodies.circle(startX_pos, startY_pos, radius, {
        restitution: restitution,
        friction: friction,
        frictionAir: frictionAir,
        density: density,
        render: { visible: false },
        label: `char_${letterIndex}`,
        mass: mass,
        radius: radius,
        letterType: letterType,
        finalX: finalX,
        finalY: finalY,
        character: char,
        isSpecial: letterIndex === specialLetterIndex,
        letterIndex: letterIndex
      });

      // Initial velocities - more controlled for natural convergence
      let initialVelocityX, initialVelocityY;
      
      if (letterType === 'medium') {
        initialVelocityX = (Math.random() - 0.5) * 3;
        initialVelocityY = (Math.random() - 0.3) * 2;
      } else {
        initialVelocityX = (Math.random() - 0.5) * 2;
        initialVelocityY = Math.random() * 1;
      }
      
      Matter.Body.setVelocity(body, { x: initialVelocityX, y: initialVelocityY });
      bodies.push(body);

      // Create DOM element
      const element = document.createElement('div');
      element.className = 'physics-letter';
      element.textContent = char;
      
      let actualFontSize, opacity, fontWeight;
      
      if (letterType === 'medium') {
        actualFontSize = fontSize * 1.0;
        opacity = 0.9;
        fontWeight = 500;
      } else {
        actualFontSize = fontSize * 1.2;
        opacity = 1.0;
        fontWeight = 700;
      }
      
      element.style.cssText = `
        position: absolute;
        font-size: ${actualFontSize}px;
        font-weight: ${fontWeight};
        color: inherit;
        font-family: inherit;
        pointer-events: none;
        z-index: 10;
        left: ${startX_pos}px;
        top: ${startY_pos}px;
        transform: translate(-50%, -50%);
        user-select: none;
        opacity: ${opacity};
        transition: none;
      `;

      // Store reference to element in body for easier access
      body.element = element;
      containerRef.current.appendChild(element);
      textElements.push({ element, body, char });
      letterIndex++;
      visualIndex++; // Increment visual position for next letter
    });

    // Add everything to world
    Matter.World.add(engine.world, [...bodies, floor, leftWall, rightWall]);
    bodiesRef.current = bodies;
    textElementsRef.current = textElements;

    // Start physics
    Matter.Runner.run(runner, engine);

    // Animation loop
    let animationId;
    const removedBodies = new Set();
    
    const updatePositions = () => {
      textElements.forEach(({ element, body }) => {
        if (body.isStabilized) return;
        
        const x = body.position.x;
        const y = body.position.y;
        
        // Remove letters that fall too far
        if (y > floorY + 300 && !removedBodies.has(body)) {
          Matter.World.remove(engine.world, body);
          element.style.display = 'none';
          removedBodies.add(body);
          return;
        }
        
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      
      if (animationStateRef.current !== 'restarting') {
        animationId = requestAnimationFrame(updatePositions);
      }
    };

    updatePositions();
    setAnimationStarted(true);

    // Start magnetic convergence after 3 seconds
    setTimeout(() => {
      console.log('🧲 Starting magnetic convergence...');
      animationStateRef.current = 'converging';
      
      let magneticStrengthMultiplier = 0;
      
      const magneticInterval = setInterval(() => {
        if (animationStateRef.current === 'restarting') {
          clearInterval(magneticInterval);
          return;
        }
        
        // Very gradually increase magnetic strength for natural convergence
        magneticStrengthMultiplier = Math.min(magneticStrengthMultiplier + 0.003, 1.0);
        
        bodies.forEach(body => {
          if (!removedBodies.has(body) && body.finalX !== undefined && !body.isStabilized) {
            const currentX = body.position.x;
            const currentY = body.position.y;
            const targetX = body.finalX;
            const targetY = body.finalY;
            
            // Special letter spins longer before converging
            let convergenceDelay = body.isSpecial ? 0.4 : 1.0;
            let actualMagneticStrength = magneticStrengthMultiplier * convergenceDelay;
            
            // Special letter continues spinning while others stabilize
            if (body.isSpecial && magneticStrengthMultiplier > 0.7) {
              const spinForce = 0.003;
              Matter.Body.setAngularVelocity(body, spinForce);
              actualMagneticStrength *= 0.4; // Weaker pull for special letter
            }
            
            const distanceX = targetX - currentX;
            const distanceY = targetY - currentY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            // Gentle magnetic force that feels natural
            if (distance > 20) {
              // Distance-based force that gets weaker as letters get closer
              const distanceFactor = Math.min(distance / 300, 1.0);
              const baseStrength = distance * 0.000015 * distanceFactor;
              const strength = baseStrength * actualMagneticStrength;
              const forceX = distanceX * strength;
              const forceY = distanceY * strength;
              
              Matter.Body.applyForce(body, body.position, { x: forceX, y: forceY });
              
              // Gentle velocity dampening - let physics feel natural
              Matter.Body.setVelocity(body, { 
                x: body.velocity.x * 0.92, 
                y: body.velocity.y * 0.92 
              });
              
              // Very subtle rotation correction
              if (Math.abs(body.angle) > 0.2) {
                const rotationCorrection = -body.angle * 0.02 * actualMagneticStrength;
                Matter.Body.setAngularVelocity(body, body.angularVelocity * 0.95 + rotationCorrection);
              }
            }
            
            // Add subtle air resistance and micro-movements for natural feel
            if (distance < 100 && actualMagneticStrength > 0.5) {
              const airResistance = 0.98;
              const microSway = (Math.random() - 0.5) * 0.00001;
              
              Matter.Body.setVelocity(body, { 
                x: body.velocity.x * airResistance + microSway, 
                y: body.velocity.y * airResistance 
              });
            }
            
            // Natural stabilization thresholds - very tight for perfect alignment
            const stabilizationThreshold = body.isSpecial ? 5 : 8;
            const rotationThreshold = 0.05; // Very strict rotation for perfect alignment
            const velocityThreshold = 0.3; // Very strict velocity for perfect alignment
            
            const speed = Math.sqrt(body.velocity.x * body.velocity.x + body.velocity.y * body.velocity.y);
            
            // Extra help for small characters like 'i' that might have trouble
            const isSmallChar = ['i', 'l', 'j', ',', "'"].includes(body.character.toLowerCase());
            const smallCharBonus = isSmallChar ? 5 : 0; // Extra threshold for small chars
            
            if (distance < (stabilizationThreshold + smallCharBonus) && Math.abs(body.angle) < rotationThreshold && speed < velocityThreshold && !body.isSpecial) {
              stabilizeLetter(body);
            } else if (body.isSpecial && distance < 8 && Math.abs(body.angle) < rotationThreshold && speed < velocityThreshold && magneticStrengthMultiplier > 0.85) {
              // Special letter stabilizes last with same strict conditions
              stabilizeLetter(body);
            }
          }
        });
        
        // Check if all letters are stabilized
        const allStabilized = bodies.every(b => b.isStabilized || removedBodies.has(b));
        
        if (allStabilized && animationStateRef.current === 'converging') {
          console.log('🎯 All letters stabilized! Text is readable.');
          animationStateRef.current = 'stable';
          clearInterval(magneticInterval);
          
          // Start 10-second timer to make letters fall again  
          setTimeout(() => {
            if (animationStateRef.current === 'stable') {
              console.log('⏰ 10 seconds up! Making letters fall again...');
              makeLettersFall();
            }
          }, 10000);
        }
      }, 50); // Slower update rate for smoother movement
      
    }, 6000); // Give even more time for dramatic bouncing before convergence

    // Function to stabilize a letter in perfect position
    const stabilizeLetter = (body) => {
      if (body.isStabilized) return;
      
      console.log(`🔒 Stabilizing letter "${body.character}" at position (${body.finalX}, ${body.finalY})`);
      
      // FORCE perfect final position and rotation
      Matter.Body.setPosition(body, { x: body.finalX, y: body.finalY });
      Matter.Body.setAngle(body, 0); // Perfectly upright
      Matter.Body.setVelocity(body, { x: 0, y: 0 });
      Matter.Body.setAngularVelocity(body, 0);
      
      // Make the body static so it can't move anymore
      Matter.Body.setStatic(body, true);
      
      // Update DOM element to exact final stable position with perfect readability
      const element = body.element;
      if (element) {
        element.style.position = 'fixed';
        element.style.left = `${body.finalX}px`;
        element.style.top = `${body.finalY}px`;
        element.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        element.style.transition = 'all 0.5s ease-out';
        element.style.zIndex = '20';
        element.style.opacity = '1';
        element.style.fontWeight = '700';
        element.style.fontSize = `${fontSize}px`;
        element.style.color = 'white';
        element.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
        element.style.fontFamily = 'inherit';
        element.style.letterSpacing = '0';
        element.style.lineHeight = '1';
      }
      
      body.isStabilized = true;
    };

    // Function to make letters fall again
    const makeLettersFall = () => {
      console.log('💥 Making letters fall for restart...');
      animationStateRef.current = 'restarting';
      
      bodies.forEach(body => {
        if (!removedBodies.has(body)) {
          // Reset stabilization and make body dynamic again
          body.isStabilized = false;
          Matter.Body.setStatic(body, false);
          
          // Add dramatic falling forces
          const fallForceX = (Math.random() - 0.5) * 0.03;
          const fallForceY = Math.random() * 0.02 + 0.01;
          
          Matter.Body.applyForce(body, body.position, { 
            x: fallForceX, 
            y: fallForceY 
          });
          
          // Add some spin for dramatic effect
          const spinForce = (Math.random() - 0.5) * 0.15;
          Matter.Body.setAngularVelocity(body, spinForce);
          
          // Reset element styling for physics mode
          if (body.element) {
            body.element.style.transition = 'none';
            body.element.style.position = 'absolute';
            body.element.style.zIndex = '10';
            body.element.style.color = 'inherit';
            body.element.style.textShadow = 'none';
            body.element.style.fontWeight = body.letterType === 'medium' ? '500' : '700';
            body.element.style.opacity = body.letterType === 'medium' ? '0.9' : '1.0';
          }
        }
      });
      
      // Restart the animation after a short delay
      setTimeout(() => {
        cleanup();
        setTimeout(startAnimation, 500);
      }, 3000);
    };

    // Cleanup function
    const cleanup = () => {
      console.log('🧹 Cleaning up animation...');
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      if (runnerRef.current) {
        Matter.Runner.stop(runnerRef.current);
      }
      
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
      
      const elements = containerRef.current?.querySelectorAll('.physics-letter');
      elements?.forEach(el => el.remove());
      
      bodiesRef.current = [];
      textElementsRef.current = [];
    };

    return cleanup;
  };

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: '0.5rem',
        left: '0',
        width: '100%',
        height: '400px',
        zIndex: -2,
        pointerEvents: 'none',
        overflow: 'visible',
        backgroundColor: 'transparent'
      }}
    >

    </div>
  );
};

export default PhysicsTitle; 