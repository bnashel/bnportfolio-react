import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';
import envPx from '../assets/envmap/px.jpg';
import envNx from '../assets/envmap/nx.jpg';
import envPy from '../assets/envmap/py.jpg';
import envNy from '../assets/envmap/ny.jpg';
import envPz from '../assets/envmap/pz.jpg';
import envNz from '../assets/envmap/nz.jpg';

// Shared GLSL used by multiple shader materials
const NOISE_GLSL = `
  float noise(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.543))) * 43758.5453);
  }
`;

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const meshRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const excitedRef = useRef(false);
  const excitementTargetRef = useRef(0);
  const excitementLevelRef = useRef(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    let cancelled = false;
    let cleanupFunctions = [];
    let activeMesh = null;
    let activeEnvMap = null;

    // Ensure clean slate (important for React StrictMode)
    if (container && container.children.length > 0) {
      Array.from(container.children).forEach(child => {
        container.removeChild(child);
      });
    }

    try {
      // Initialize Three.js scene
      const initScene = () => {
        if (!container) {
          return null;
        }
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0xf5f0e6, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(width, height);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.pointerEvents = 'auto';
        container.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 28;
        camera.position.y = 6.0;
        rendererRef.current = renderer;
        cameraRef.current = camera;
        sceneRef.current = scene;
        return { scene, camera, renderer };
      };

      // Create torus with cycling shader effects
      const createTorusWithShaders = () => {
        const createGeometry = () => {
          // Reduce geometry complexity on mobile devices
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          const radialSegments = isMobile ? 32 : 64;
          const tubularSegments = isMobile ? 64 : 128;

          const geometry = new THREE.TorusGeometry(2.5, 0.5, radialSegments, tubularSegments);
          const vertexCount = geometry.attributes.position.count;
          const initialPositions = new Float32Array(geometry.attributes.position.array);
          const colors = new Float32Array(vertexCount * 3);
          const vertexColor = new THREE.Color();

          for (let i = 0; i < vertexCount; i++) {
            const y = initialPositions[i * 3 + 1];
            const hue = 0.6 + 0.2 * (y + 2) / 4;
            vertexColor.setHSL(hue % 1, 1.0, 0.7);
            colors.set([vertexColor.r, vertexColor.g, vertexColor.b], i * 3);
          }

          geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
          geometry.attributes.color.needsUpdate = true;
          geometry.userData = { initialPositions, colors };
          return geometry;
        };

        // Create different shader materials
        const createShaderMaterials = (envMap) => {
          const materials = [
            // 0. Crystal Glass
            {
              name: "Crystal Glass",
              material: new THREE.MeshPhysicalMaterial({
                color: 0x88ccff,
                roughness: 0.0,
                metalness: 0.0,
                transmission: 0.9,
                transparent: true,
                opacity: 0.8,
                clearcoat: 1.0,
                clearcoatRoughness: 0.0,
                ior: 1.8,
                thickness: 1.0,
                envMap: envMap,
                envMapIntensity: 1.5
              })
            },

            // 1. Molten Lava
            {
              name: "Molten Lava",
              material: new THREE.ShaderMaterial({
                uniforms: {
                  time: { value: 0 }
                },
                vertexShader: `
                  varying vec3 vPosition;
                  varying vec3 vNormal;

                  void main() {
                    vPosition = position;
                    vNormal = normal;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                  }
                `,
                fragmentShader: `
                  uniform float time;
                  varying vec3 vPosition;
                  varying vec3 vNormal;

                  ${NOISE_GLSL}

                  void main() {
                    vec3 p = vPosition * 2.0 + time * 0.5;
                    float n = noise(p) * 0.5 + noise(p * 2.0) * 0.25 + noise(p * 4.0) * 0.125;

                    float heat = sin(vPosition.y * 5.0 + time * 2.0 + n * 3.0) * 0.5 + 0.5;

                    vec3 cold = vec3(0.8, 0.1, 0.0); // Dark red
                    vec3 hot = vec3(1.0, 0.8, 0.2);  // Bright yellow
                    vec3 color = mix(cold, hot, heat);

                    // Add some emissive glow
                    color += vec3(0.3, 0.1, 0.0) * heat;

                    gl_FragColor = vec4(color, 1.0);
                  }
                `
              })
            },

            // 2. Digital Matrix
            {
              name: "Digital Matrix",
              material: new THREE.ShaderMaterial({
                uniforms: {
                  time: { value: 0 }
                },
                vertexShader: `
                  varying vec3 vPosition;
                  varying vec3 vNormal;
                  varying vec3 vWorldPosition;

                  void main() {
                    vPosition = position;
                    vNormal = normal;
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPos.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                  }
                `,
                fragmentShader: `
                  uniform float time;
                  varying vec3 vPosition;
                  varying vec3 vNormal;
                  varying vec3 vWorldPosition;

                  void main() {
                    // Create grid pattern
                    vec3 p = vWorldPosition * 4.0;
                    vec3 grid = abs(fract(p) - 0.5) / fwidth(p);
                    float lineWidth = min(min(grid.x, grid.y), grid.z);
                    float gridMask = 1.0 - min(lineWidth, 1.0);

                    // Digital rain effect
                    float rain = fract(sin(floor(p.x) * 123.456 + floor(p.z) * 789.012) * 43758.5453);
                    rain = smoothstep(0.8, 1.0, rain);
                    float rainAnim = fract(time * 2.0 + rain * 10.0);
                    rainAnim = smoothstep(0.0, 0.2, rainAnim) * (1.0 - smoothstep(0.8, 1.0, rainAnim));

                    vec3 color = vec3(0.0, 1.0, 0.3) * gridMask; // Green wireframe
                    color += vec3(0.0, 1.0, 0.8) * rainAnim * rain; // Cyan rain

                    // Add some base glow
                    color += vec3(0.0, 0.3, 0.1) * 0.3;

                    gl_FragColor = vec4(color, 1.0);
                  }
                `
              })
            },

            // 3. Liquid Gold
            {
              name: "Liquid Gold",
              material: new THREE.ShaderMaterial({
                uniforms: {
                  time: { value: 0 },
                  envMap: { value: envMap }
                },
                vertexShader: `
                  varying vec3 vNormal;
                  varying vec3 vPosition;
                  varying vec3 vViewDirection;

                  void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vPosition = position;
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vViewDirection = normalize(cameraPosition - worldPosition.xyz);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                  }
                `,
                fragmentShader: `
                  uniform float time;
                  uniform samplerCube envMap;
                  varying vec3 vNormal;
                  varying vec3 vPosition;
                  varying vec3 vViewDirection;

                  ${NOISE_GLSL}

                  void main() {
                    // Flowing liquid effect
                    vec3 p = vPosition * 3.0 + time * 0.2;
                    float flow = noise(p) * 0.5 + noise(p * 2.0) * 0.25;

                    // Gold color gradient
                    vec3 darkGold = vec3(0.8, 0.5, 0.1);
                    vec3 brightGold = vec3(1.0, 0.9, 0.3);
                    vec3 goldColor = mix(darkGold, brightGold, flow);

                    // Fresnel for metallic look
                    float fresnel = pow(1.0 - dot(vViewDirection, vNormal), 2.0);

                    // Environment reflection
                    vec3 reflectVec = reflect(-vViewDirection, vNormal);
                    vec3 envColor = textureCube(envMap, reflectVec).rgb;

                    // Combine everything
                    vec3 color = mix(goldColor, envColor * goldColor, fresnel * 0.8);

                    // Add some extra shine
                    color += vec3(1.0, 0.9, 0.6) * pow(fresnel, 4.0) * 0.3;

                    gl_FragColor = vec4(color, 1.0);
                  }
                `
              })
            }
          ];

          return materials;
        };

        const envMapFaces = [envPx, envNx, envPy, envNy, envPz, envNz];

        return new Promise((resolve) => {
          const buildTorus = (envMap) => {
            const shaderMaterials = createShaderMaterials(envMap);

            // Create torus with first shader (Crystal Glass)
            const geometry = createGeometry();
            const initialIndex = 0; // Always start with Crystal Glass
            const mesh = new THREE.Mesh(geometry, shaderMaterials[initialIndex].material);
            mesh.position.y = 6.0;

            // Store references for cycling
            mesh.userData = {
              shaderMaterials,
              currentShaderIndex: initialIndex,
              lastShaderChange: 0
            };

            resolve({ mesh, envMap });
          };

          new THREE.CubeTextureLoader().load(
            envMapFaces,
            (envMap) => buildTorus(envMap),
            undefined,
            () => buildTorus(null)
          );
        });
      };

      // Set up lighting
      const setupLights = (scene) => {
        const lights = [
          { color: 0xff00ff, intensity: 2.5, position: [4, 4, 6] },
          { color: 0x00ffff, intensity: 2.5, position: [-4, -4, 6] },
          { color: 0xffff00, intensity: 2.0, position: [0, 6, 0] },
          { color: 0x00ff00, intensity: 2.0, position: [0, -6, 0] }
        ];

        lights.forEach(light => {
          const pointLight = new THREE.PointLight(light.color, light.intensity, 100);
          pointLight.position.set(...light.position);
          scene.add(pointLight);
        });

        const whiteLight = new THREE.DirectionalLight(0xffffff, 2.5);
        whiteLight.position.set(5, 10, 10);
        scene.add(whiteLight);

        const ambient = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambient);
      };

      // Animation loop for torus
      const animate = (mesh, scene, camera, renderer) => {
        let dragDeformStrength = 0;
        let dragMouse = { x: 0, y: 0 };
        let dragActive = false;
        const geometry = mesh.geometry;
        const initialPositions = geometry.userData.initialPositions;
        const colors = geometry.userData.colors;
        const simplex = createNoise4D();
        const raycaster = new THREE.Raycaster();
        const frameColor = new THREE.Color();
        const dragVertex = new THREE.Vector3();
        const clickPointer = new THREE.Vector2();
        let breathScale = 1;
        let targetBreathScale = 1;
        let breathTimeout = null;
        let normalsElapsed = 0;

        // Calculate optimal camera distance
        const calculateOptimalCameraDistance = () => {
          const torusRadius = 2.5 + 0.5;
          const margin = 1.8;
          const scaledRadius = torusRadius * breathScale * margin;
          const fov = camera.fov * (Math.PI / 180);
          const aspect = camera.aspect;
          const excitementLevel = excitementLevelRef.current;
          const fitHeightDistance = scaledRadius / Math.tan(fov / 2);
          const fitWidthDistance = scaledRadius / (Math.tan(fov / 2) * aspect);
          return Math.max(fitHeightDistance, fitWidthDistance) * (1 + excitementLevel * 0.1);
        };

        function animateFrame(time) {
          if (!lastTimeRef.current) lastTimeRef.current = time;
          const deltaTime = (time - lastTimeRef.current) / 1000;
          lastTimeRef.current = time;

          // Handle shader cycling (all shaders available)
          const shaderCycleInterval = 4000; // 4 seconds per shader
          if (mesh.userData && mesh.userData.shaderMaterials) {
            const userData = mesh.userData;
            const timeSinceLastChange = time - userData.lastShaderChange;

            // Cycle through all shaders regardless of theme
            if (timeSinceLastChange > shaderCycleInterval) {
              // Cycle to next shader (all 4 shaders available)
              userData.currentShaderIndex = (userData.currentShaderIndex + 1) % userData.shaderMaterials.length;
              const newMaterial = userData.shaderMaterials[userData.currentShaderIndex];
              mesh.material = newMaterial.material;
              userData.lastShaderChange = time;
            }
          }

          // Update shader uniforms for time-based animations
          if (mesh.material.uniforms && mesh.material.uniforms.time) {
            mesh.material.uniforms.time.value = time * 0.001;
          }

          // Robust excitement interpolation
          excitementLevelRef.current += (excitementTargetRef.current - excitementLevelRef.current) * Math.min(1, deltaTime * 3);
          const excitementLevel = excitementLevelRef.current;
          const t = time * 0.0007 * (1 + excitementLevel * 2);

          // Update colors with unified color scheme
          const colorArray = geometry.attributes.color.array;
          for (let i = 0; i < colors.length; i += 3) {
            const y = initialPositions[i];
            const z = initialPositions[i + 2];

            // Single unified color scheme with smooth gradient
            const baseHue = 0.6; // Blue-green base
            const timeOffset = Math.sin(t * 0.5) * 0.2;
            const excitementOffset = Math.sin(t * 2) * 0.2 * excitementLevel;
            const spatialOffset = Math.sin(y * 0.5 + z * 0.3) * 0.1;
            const hue = (baseHue + 0.2 * (y + 2) / 4 + timeOffset + excitementOffset + spatialOffset) % 1;
            frameColor.setHSL(hue, 1.0, 0.7);
            colorArray[i] = frameColor.r;
            colorArray[i + 1] = frameColor.g;
            colorArray[i + 2] = frameColor.b;
          }

          // Organic blob deformation
          const positions = geometry.attributes.position;
          for (let i = 0; i < positions.count; i++) {
            const ox = initialPositions[i * 3];
            const oy = initialPositions[i * 3 + 1];
            const oz = initialPositions[i * 3 + 2];

            let scale = 1 + 0.18 * simplex(ox * 0.7, oy * 0.7, oz * 0.7, t);

            if (excitementLevel > 0) {
              const excitementNoise = simplex(ox * 1.2, oy * 1.2, oz * 1.2, t * 2) * 0.3 * excitementLevel;
              scale += excitementNoise;
            }

            if (dragActive) {
              dragVertex.set(ox, oy, oz);
              dragVertex.applyMatrix4(mesh.matrixWorld);
              dragVertex.project(camera);
              const dist = Math.sqrt(
                Math.pow(dragVertex.x - dragMouse.x, 2) +
                Math.pow(dragVertex.y - dragMouse.y, 2)
              );
              if (dist < 0.3) {
                scale += (0.4 - dist) * dragDeformStrength;
              }
            }

            if (!dragActive && scale > 1) {
              scale -= deltaTime * 1.5 * (scale - 1);
            }

            scale = Math.max(0.5, scale);
            positions.setXYZ(i, ox * scale, oy * scale, oz * scale);
          }

          // Smoothly interpolate breath scale with excitement
          breathScale += (targetBreathScale - breathScale) * Math.min(1, deltaTime * 8);
          const excitementScale = 1 + Math.sin(time * 0.005) * 0.08 * excitementLevel;
          mesh.scale.set(breathScale * excitementScale, breathScale * excitementScale, breathScale * excitementScale);

          // Update camera position
          const optimalDistance = calculateOptimalCameraDistance();
          camera.position.z = optimalDistance;
          camera.position.y = 6.0;
          camera.lookAt(0, 6.0, 0);

          // Enhanced rotation
          if (!dragActive) {
            const baseRotationSpeed = 0.01;
            const excitementRotationSpeed = 0.02;
            const timeSec = time * 0.001;

            // Add noise-based rotation variation
            const noiseX = simplex(timeSec * 0.5, 0, 0, 0) * 0.02;
            const noiseY = simplex(0, timeSec * 0.5, 0, 0) * 0.02;

            mesh.rotation.x += baseRotationSpeed + excitementRotationSpeed * excitementLevel + noiseX;
            mesh.rotation.y += baseRotationSpeed * 0.5 + excitementRotationSpeed * 0.5 * excitementLevel + noiseY;
          }

          positions.needsUpdate = true;
          geometry.attributes.color.needsUpdate = true;

          // Positions deform every frame; recompute normals at most ~30 times per second
          normalsElapsed += deltaTime;
          if (normalsElapsed >= 1 / 30) {
            geometry.computeVertexNormals();
            normalsElapsed = 0;
          }

          renderer.render(scene, camera);
          animationFrameRef.current = requestAnimationFrame(animateFrame);
        }

        // Mouse and touch event handlers
        const getEventCoordinates = (e) => {
          const rect = renderer.domElement.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;
          return {
            x: ((clientX - rect.left) / rect.width) * 2 - 1,
            y: -((clientY - rect.top) / rect.height) * 2 + 1
          };
        };

        const handleStart = (e) => {
          e.preventDefault();
          dragActive = true;
          dragDeformStrength = 0.5;
          const coords = getEventCoordinates(e);
          dragMouse.x = coords.x;
          dragMouse.y = coords.y;
        };

        const handleMove = (e) => {
          if (dragActive) {
            e.preventDefault();
            const coords = getEventCoordinates(e);
            dragMouse.x = coords.x;
            dragMouse.y = coords.y;
          }
        };

        const handleEnd = (e) => {
          e.preventDefault();
          dragActive = false;
          dragDeformStrength = 0;
        };

        const handleClick = (e) => {
          e.preventDefault();
          const coords = getEventCoordinates(e);
          clickPointer.set(coords.x, coords.y);
          raycaster.setFromCamera(clickPointer, camera);
          const intersects = raycaster.intersectObject(mesh);
          if (intersects.length > 0) {
            excitedRef.current = !excitedRef.current;
            excitementTargetRef.current = excitedRef.current ? 1 : 0;
            targetBreathScale = 1.2;
            if (breathTimeout) clearTimeout(breathTimeout);
            breathTimeout = setTimeout(() => {
              targetBreathScale = 1;
            }, 200);
          }
        };

        // Mouse events
        renderer.domElement.addEventListener('mousedown', handleStart);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        renderer.domElement.addEventListener('click', handleClick);
        window.addEventListener('mouseleave', handleEnd);

        // Touch events for mobile
        renderer.domElement.addEventListener('touchstart', handleStart, { passive: false });
        renderer.domElement.addEventListener('touchmove', handleMove, { passive: false });
        renderer.domElement.addEventListener('touchend', handleEnd, { passive: false });
        renderer.domElement.addEventListener('touchcancel', handleEnd, { passive: false });

        animationFrameRef.current = requestAnimationFrame(animateFrame);

        return () => {
          // Remove mouse event listeners
          renderer.domElement.removeEventListener('mousedown', handleStart);
          window.removeEventListener('mousemove', handleMove);
          window.removeEventListener('mouseup', handleEnd);
          renderer.domElement.removeEventListener('click', handleClick);
          window.removeEventListener('mouseleave', handleEnd);

          // Remove touch event listeners
          renderer.domElement.removeEventListener('touchstart', handleStart);
          renderer.domElement.removeEventListener('touchmove', handleMove);
          renderer.domElement.removeEventListener('touchend', handleEnd);
          renderer.domElement.removeEventListener('touchcancel', handleEnd);

          if (breathTimeout) clearTimeout(breathTimeout);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
      };

      // Handle container resize
      const handleResize = (camera, renderer) => {
        const resize = () => {
          if (!container) return;
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
          renderer.domElement.style.width = '100%';
          renderer.domElement.style.height = '100%';
        };

        resize();
        const observer = new window.ResizeObserver(resize);
        observer.observe(container);
        window.addEventListener('resize', resize);

        return () => {
          observer.disconnect();
          window.removeEventListener('resize', resize);
        };
      };

      // Initialize animation
      const context = initScene();
      if (!context) {
        return;
      }
      const { scene, camera, renderer } = context;

      createTorusWithShaders().then(({ mesh, envMap }) => {
        if (cancelled) {
          mesh.geometry.dispose();
          mesh.userData.shaderMaterials.forEach(({ material }) => material.dispose());
          if (envMap) envMap.dispose();
          return;
        }

        activeMesh = mesh;
        activeEnvMap = envMap;
        meshRef.current = mesh;

        // Clear any existing meshes from the scene
        const objectsToRemove = [];
        scene.traverse((child) => {
          if (child.type === 'Mesh') {
            objectsToRemove.push(child);
          }
        });
        objectsToRemove.forEach(obj => {
          scene.remove(obj);
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });

        scene.add(mesh);
        setupLights(scene);
        const cleanupAnimation = animate(mesh, scene, camera, renderer);
        const cleanupResize = handleResize(camera, renderer);
        cleanupFunctions.push(cleanupAnimation, cleanupResize);
      }).catch(err => {
        if (!cancelled) setError(err);
      });

    } catch (error) {
      setError(error);
    }

    // Cleanup function
    return () => {
      cancelled = true;

      // Cancel animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      // Run all cleanup functions
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());

      // Dispose every cycling shader material and the environment map texture
      if (activeMesh && activeMesh.userData.shaderMaterials) {
        activeMesh.userData.shaderMaterials.forEach(({ material }) => material.dispose());
      }
      if (activeEnvMap) {
        activeEnvMap.dispose();
      }

      // Clear and dispose of scene objects
      if (sceneRef.current) {
        sceneRef.current.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
        sceneRef.current.clear();
        sceneRef.current = null;
      }

      // Remove canvas and dispose renderer
      if (container && rendererRef.current?.domElement) {
        try {
          container.removeChild(rendererRef.current.domElement);
        } catch {
          // Canvas already removed
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      // Clear refs
      meshRef.current = null;
      cameraRef.current = null;
    };
  }, []);

  if (error) {
    return <div className="error-message">Animation failed to load. Please refresh the page.</div>;
  }

  return <div ref={containerRef} id="animation-bg" />;
};

export default BackgroundAnimation;
