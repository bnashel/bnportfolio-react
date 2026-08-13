import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { useReducedMotion } from '../hooks/useReducedMotion';

const DEFAULT_TEXT = "Hi, I'm Benjamin Nashel";

const CONFIG = {
  gravityY: 1.0,
  floorOffset: 120,
  floorThickness: 60,
  floorRestitution: 1.1,
  floorFriction: 0.2,
  floorFrictionStatic: 0.3,
  wallOffset: 50,
  wallThickness: 100,
  mobileBreakpoint: 768,
  desktopFontSize: 35,
  mobileFontSize: 28,
  charSpacingFactor: 0.95,
  spaceWidthFactor: 1.8,
  finalY: 80,
  spawnXSpreadFactor: 1.2,
  spawnXOffsetFactor: 0.1,
  spawnYRange: 400,
  spawnYLift: 300,
  offscreenRemovalDistance: 300,
  convergenceDelay: 6000,
  magneticIntervalMs: 50,
  magneticStrengthStep: 0.003,
  magneticForceCoefficient: 0.000015,
  magneticDistanceRange: 300,
  minMagneticDistance: 20,
  velocityDampening: 0.92,
  nearTargetDistance: 100,
  nearTargetMinStrength: 0.5,
  airResistance: 0.98,
  microSwayStrength: 0.00001,
  minCorrectionAngle: 0.2,
  rotationCorrectionFactor: 0.02,
  angularDampening: 0.95,
  specialConvergenceFactor: 0.4,
  specialSpinStart: 0.7,
  specialSpinVelocity: 0.003,
  specialPullFactor: 0.4,
  specialStabilizationDistance: 8,
  specialStabilizeMinStrength: 0.85,
  stabilizationThreshold: 8,
  smallCharThresholdBonus: 5,
  rotationThreshold: 0.05,
  velocityThreshold: 0.3,
  stableDuration: 10000,
  fallDuration: 3000,
  restartDelay: 500,
  fallForceXSpread: 0.03,
  fallForceYRange: 0.02,
  fallForceYBase: 0.01,
  fallSpinSpread: 0.15,
  stabilizedTextShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  smallCharacters: ['i', 'l', 'j', ',', "'"],
  specialExcludedCharacters: ['i', 'l', 'j', ','],
  letterTypes: {
    medium: {
      radiusBase: 14,
      radiusVariance: 6,
      mass: 1.0,
      density: 0.001,
      restitution: 1.0,
      friction: 0.3,
      frictionAir: 0.03,
      fontScale: 1.0,
      opacity: 0.9,
      fontWeight: 500,
      initialVelocityXSpread: 3,
      initialVelocityYShift: 0.3,
      initialVelocityYScale: 2
    },
    heavy: {
      radiusBase: 18,
      radiusVariance: 8,
      mass: 2.0,
      density: 0.003,
      restitution: 0.9,
      friction: 0.4,
      frictionAir: 0.015,
      fontScale: 1.2,
      opacity: 1.0,
      fontWeight: 700,
      initialVelocityXSpread: 2,
      initialVelocityYShift: 0,
      initialVelocityYScale: 1
    }
  }
};

const containerStyle = {
  position: 'fixed',
  top: '0.5rem',
  left: '0',
  width: '100%',
  height: '400px',
  zIndex: -2,
  pointerEvents: 'none',
  overflow: 'visible',
  backgroundColor: 'transparent'
};

const PhysicsTitle = ({ text = DEFAULT_TEXT }) => {
  const containerRef = useRef(null);
  const cleanupRef = useRef(null);
  const animationStateRef = useRef('falling'); // 'falling', 'converging', 'stable', 'restarting'
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const startAnimation = () => {
      if (!containerRef.current) return;

      animationStateRef.current = 'falling';

      // Clear any existing elements
      const existingElements = containerRef.current.querySelectorAll('.physics-letter');
      existingElements.forEach(el => el.remove());

      // Create physics engine with realistic gravity
      const engine = Matter.Engine.create();
      engine.world.gravity.y = CONFIG.gravityY;
      engine.world.gravity.x = 0;

      // Create runner
      const runner = Matter.Runner.create();

      // Container dimensions
      const containerWidth = window.innerWidth;

      // Create floor slightly above bottom so letters stay visible
      const screenHeight = window.innerHeight;
      const floorY = screenHeight - CONFIG.floorOffset;
      const floor = Matter.Bodies.rectangle(containerWidth / 2, floorY, containerWidth * 3, CONFIG.floorThickness, {
        isStatic: true,
        render: { visible: false },
        restitution: CONFIG.floorRestitution,
        friction: CONFIG.floorFriction,
        frictionStatic: CONFIG.floorFrictionStatic,
        label: 'floor'
      });

      const leftWall = Matter.Bodies.rectangle(-CONFIG.wallOffset, screenHeight / 2, CONFIG.wallThickness, screenHeight * 2, {
        isStatic: true,
        render: { visible: false }
      });

      const rightWall = Matter.Bodies.rectangle(containerWidth + CONFIG.wallOffset, screenHeight / 2, CONFIG.wallThickness, screenHeight * 2, {
        isStatic: true,
        render: { visible: false }
      });

      // Create letters with physics
      const bodies = [];
      const textElements = [];
      const fontSize = window.innerWidth > CONFIG.mobileBreakpoint ? CONFIG.desktopFontSize : CONFIG.mobileFontSize;

      // Calculate precise final positions for perfectly readable text
      const charSpacing = fontSize * CONFIG.charSpacingFactor;
      const lettersOnly = text.replace(/ /g, '');
      const totalTextWidth = lettersOnly.length * charSpacing;
      const startX = (containerWidth - totalTextWidth) / 2;
      const finalY = CONFIG.finalY;

      // Choose a random letter to be the "special" spinning one that arrives last
      // Exclude small letters like 'i' from being special to avoid issues
      const eligibleForSpecial = [];
      lettersOnly.split('').forEach((char, index) => {
        if (!CONFIG.specialExcludedCharacters.includes(char.toLowerCase())) {
          eligibleForSpecial.push(index);
        }
      });
      const specialLetterIndex = eligibleForSpecial.length > 0 ?
        eligibleForSpecial[Math.floor(Math.random() * eligibleForSpecial.length)] :
        Math.floor(Math.random() * lettersOnly.length);

      let letterIndex = 0;
      let visualIndex = 0; // For spacing that includes spaces
      text.split('').forEach(char => {
        if (char === ' ') {
          visualIndex += CONFIG.spaceWidthFactor;
          return;
        }

        // Calculate precise final position including space handling
        const finalX = startX + visualIndex * charSpacing;

        // Random starting positions - closer range for smoother convergence
        const startXPos = Math.random() * containerWidth * CONFIG.spawnXSpreadFactor - containerWidth * CONFIG.spawnXOffsetFactor;
        const startYPos = Math.random() * CONFIG.spawnYRange - CONFIG.spawnYLift;

        // Assign letter types - only medium and heavy
        const typeNames = Object.keys(CONFIG.letterTypes);
        const letterType = typeNames[Math.floor(Math.random() * typeNames.length)];
        const type = CONFIG.letterTypes[letterType];
        const radius = type.radiusBase + Math.random() * type.radiusVariance;

        // Create physics body
        const body = Matter.Bodies.circle(startXPos, startYPos, radius, {
          restitution: type.restitution,
          friction: type.friction,
          frictionAir: type.frictionAir,
          density: type.density,
          render: { visible: false },
          label: `char_${letterIndex}`,
          mass: type.mass,
          radius: radius,
          letterType: letterType,
          finalX: finalX,
          finalY: finalY,
          character: char,
          isSpecial: letterIndex === specialLetterIndex,
          letterIndex: letterIndex
        });

        // Initial velocities - more controlled for natural convergence
        const initialVelocityX = (Math.random() - 0.5) * type.initialVelocityXSpread;
        const initialVelocityY = (Math.random() - type.initialVelocityYShift) * type.initialVelocityYScale;

        Matter.Body.setVelocity(body, { x: initialVelocityX, y: initialVelocityY });
        bodies.push(body);

        // Create DOM element
        const element = document.createElement('div');
        element.className = 'physics-letter';
        element.textContent = char;

        element.style.cssText = `
          position: absolute;
          font-size: ${fontSize * type.fontScale}px;
          font-weight: ${type.fontWeight};
          color: inherit;
          font-family: inherit;
          pointer-events: none;
          z-index: 10;
          left: 0;
          top: 0;
          transform: translate(${startXPos}px, ${startYPos}px) translate(-50%, -50%);
          will-change: transform;
          user-select: none;
          opacity: ${type.opacity};
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

      // Start physics
      Matter.Runner.run(runner, engine);

      // Every timer/rAF id lives here so cleanup can clear them all
      let disposed = false;
      let animationId = null;
      let convergenceTimeoutId = null;
      let magneticIntervalId = null;
      let stableTimeoutId = null;
      let fallTimeoutId = null;
      let restartTimeoutId = null;
      const removedBodies = new Set();

      const updatePositions = () => {
        if (disposed) return;

        textElements.forEach(({ element, body }) => {
          if (body.isStabilized) return;

          const x = body.position.x;
          const y = body.position.y;

          // Remove letters that fall too far
          if (y > floorY + CONFIG.offscreenRemovalDistance && !removedBodies.has(body)) {
            Matter.World.remove(engine.world, body);
            element.style.display = 'none';
            removedBodies.add(body);
            return;
          }

          element.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${body.angle}rad)`;
        });

        if (animationStateRef.current !== 'restarting') {
          animationId = requestAnimationFrame(updatePositions);
        }
      };

      // Function to stabilize a letter in perfect position
      const stabilizeLetter = (body) => {
        if (body.isStabilized) return;

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
          element.style.color = 'inherit';
          element.style.textShadow = CONFIG.stabilizedTextShadow;
          element.style.fontFamily = 'inherit';
          element.style.letterSpacing = '0';
          element.style.lineHeight = '1';
        }

        body.isStabilized = true;
      };

      // Function to make letters fall again
      const makeLettersFall = () => {
        if (disposed) return;

        animationStateRef.current = 'restarting';

        // Resume the physics paused during the stable phase
        Matter.Runner.run(runner, engine);

        bodies.forEach(body => {
          if (!removedBodies.has(body)) {
            // Reset stabilization and make body dynamic again
            body.isStabilized = false;
            Matter.Body.setStatic(body, false);

            // Add dramatic falling forces
            const fallForceX = (Math.random() - 0.5) * CONFIG.fallForceXSpread;
            const fallForceY = Math.random() * CONFIG.fallForceYRange + CONFIG.fallForceYBase;

            Matter.Body.applyForce(body, body.position, {
              x: fallForceX,
              y: fallForceY
            });

            // Add some spin for dramatic effect
            const spinForce = (Math.random() - 0.5) * CONFIG.fallSpinSpread;
            Matter.Body.setAngularVelocity(body, spinForce);

            // Reset element styling for physics mode
            if (body.element) {
              const type = CONFIG.letterTypes[body.letterType];
              body.element.style.transition = 'none';
              body.element.style.position = 'absolute';
              body.element.style.zIndex = '10';
              body.element.style.color = 'inherit';
              body.element.style.textShadow = 'none';
              body.element.style.fontWeight = `${type.fontWeight}`;
              body.element.style.opacity = `${type.opacity}`;
              body.element.style.left = '0';
              body.element.style.top = '0';
              body.element.style.transform = `translate(${body.finalX}px, ${body.finalY}px) translate(-50%, -50%)`;
            }
          }
        });

        updatePositions();

        // Restart the animation after a short delay
        fallTimeoutId = setTimeout(() => {
          cleanup();
          restartTimeoutId = setTimeout(() => {
            startAnimation();
          }, CONFIG.restartDelay);
        }, CONFIG.fallDuration);
      };

      // Cleanup function
      const cleanup = () => {
        disposed = true;
        animationStateRef.current = 'restarting';

        clearTimeout(convergenceTimeoutId);
        clearInterval(magneticIntervalId);
        clearTimeout(stableTimeoutId);
        clearTimeout(fallTimeoutId);
        clearTimeout(restartTimeoutId);

        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }

        Matter.Runner.stop(runner);
        Matter.Engine.clear(engine);

        const elements = containerRef.current?.querySelectorAll('.physics-letter');
        elements?.forEach(el => el.remove());
      };

      cleanupRef.current = cleanup;

      // Animation loop
      updatePositions();

      // Start magnetic convergence after the bouncing phase
      convergenceTimeoutId = setTimeout(() => {
        if (disposed) return;

        animationStateRef.current = 'converging';

        let magneticStrengthMultiplier = 0;

        magneticIntervalId = setInterval(() => {
          if (disposed || animationStateRef.current === 'restarting') {
            clearInterval(magneticIntervalId);
            return;
          }

          // Very gradually increase magnetic strength for natural convergence
          magneticStrengthMultiplier = Math.min(magneticStrengthMultiplier + CONFIG.magneticStrengthStep, 1.0);

          bodies.forEach(body => {
            if (!removedBodies.has(body) && body.finalX !== undefined && !body.isStabilized) {
              const currentX = body.position.x;
              const currentY = body.position.y;
              const targetX = body.finalX;
              const targetY = body.finalY;

              // Special letter spins longer before converging
              const convergenceDelay = body.isSpecial ? CONFIG.specialConvergenceFactor : 1.0;
              let actualMagneticStrength = magneticStrengthMultiplier * convergenceDelay;

              // Special letter continues spinning while others stabilize
              if (body.isSpecial && magneticStrengthMultiplier > CONFIG.specialSpinStart) {
                Matter.Body.setAngularVelocity(body, CONFIG.specialSpinVelocity);
                actualMagneticStrength *= CONFIG.specialPullFactor; // Weaker pull for special letter
              }

              const distanceX = targetX - currentX;
              const distanceY = targetY - currentY;
              const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

              // Gentle magnetic force that feels natural
              if (distance > CONFIG.minMagneticDistance) {
                // Distance-based force that gets weaker as letters get closer
                const distanceFactor = Math.min(distance / CONFIG.magneticDistanceRange, 1.0);
                const baseStrength = distance * CONFIG.magneticForceCoefficient * distanceFactor;
                const strength = baseStrength * actualMagneticStrength;
                const forceX = distanceX * strength;
                const forceY = distanceY * strength;

                Matter.Body.applyForce(body, body.position, { x: forceX, y: forceY });

                // Gentle velocity dampening - let physics feel natural
                Matter.Body.setVelocity(body, {
                  x: body.velocity.x * CONFIG.velocityDampening,
                  y: body.velocity.y * CONFIG.velocityDampening
                });

                // Very subtle rotation correction
                if (Math.abs(body.angle) > CONFIG.minCorrectionAngle) {
                  const rotationCorrection = -body.angle * CONFIG.rotationCorrectionFactor * actualMagneticStrength;
                  Matter.Body.setAngularVelocity(body, body.angularVelocity * CONFIG.angularDampening + rotationCorrection);
                }
              }

              // Add subtle air resistance and micro-movements for natural feel
              if (distance < CONFIG.nearTargetDistance && actualMagneticStrength > CONFIG.nearTargetMinStrength) {
                const microSway = (Math.random() - 0.5) * CONFIG.microSwayStrength;

                Matter.Body.setVelocity(body, {
                  x: body.velocity.x * CONFIG.airResistance + microSway,
                  y: body.velocity.y * CONFIG.airResistance
                });
              }

              const speed = Math.sqrt(body.velocity.x * body.velocity.x + body.velocity.y * body.velocity.y);

              // Extra help for small characters like 'i' that might have trouble
              const isSmallChar = CONFIG.smallCharacters.includes(body.character.toLowerCase());
              const smallCharBonus = isSmallChar ? CONFIG.smallCharThresholdBonus : 0;

              if (!body.isSpecial && distance < CONFIG.stabilizationThreshold + smallCharBonus && Math.abs(body.angle) < CONFIG.rotationThreshold && speed < CONFIG.velocityThreshold) {
                stabilizeLetter(body);
              } else if (body.isSpecial && distance < CONFIG.specialStabilizationDistance && Math.abs(body.angle) < CONFIG.rotationThreshold && speed < CONFIG.velocityThreshold && magneticStrengthMultiplier > CONFIG.specialStabilizeMinStrength) {
                // Special letter stabilizes last with same strict conditions
                stabilizeLetter(body);
              }
            }
          });

          // Check if all letters are stabilized
          const allStabilized = bodies.every(b => b.isStabilized || removedBodies.has(b));

          if (allStabilized && animationStateRef.current === 'converging') {
            animationStateRef.current = 'stable';
            clearInterval(magneticIntervalId);

            // Pause physics and the sync loop while the title just sits there
            Matter.Runner.stop(runner);
            if (animationId) {
              cancelAnimationFrame(animationId);
              animationId = null;
            }

            // Start timer to make letters fall again
            stableTimeoutId = setTimeout(() => {
              if (!disposed && animationStateRef.current === 'stable') {
                makeLettersFall();
              }
            }, CONFIG.stableDuration);
          }
        }, CONFIG.magneticIntervalMs);
      }, CONFIG.convergenceDelay);
    };

    startAnimation();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [prefersReducedMotion, text]);

  if (prefersReducedMotion) {
    const fontSize = window.innerWidth > CONFIG.mobileBreakpoint ? CONFIG.desktopFontSize : CONFIG.mobileFontSize;
    return (
      <div style={containerStyle}>
        <h1
          style={{
            position: 'fixed',
            top: `${CONFIG.finalY}px`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            fontSize: `${fontSize}px`,
            fontWeight: 700,
            color: 'inherit',
            textShadow: CONFIG.stabilizedTextShadow,
            whiteSpace: 'nowrap',
            lineHeight: 1,
            zIndex: 20
          }}
        >
          {text}
        </h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="sr-only">{text}</h1>
      <div ref={containerRef} aria-hidden="true" style={containerStyle} />
    </>
  );
};

export default PhysicsTitle;
