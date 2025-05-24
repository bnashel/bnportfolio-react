import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const meshRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const isHoveringRef = useRef(false);
  const pulseTimeRef = useRef(0);
  const rotationVelocityRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const excitedRef = useRef(false);
  const excitementTargetRef = useRef(0);
  const excitementLevelRef = useRef(0);
  const [error, setError] = useState(null);

  // Error boundary component
  if (error) {
    return <div className="error-message">Animation failed to load. Please refresh the page.</div>;
  }

  useEffect(() => {
    console.log('BackgroundAnimation useEffect started');
    let cleanupFunctions = [];

    try {
      // Initialize Three.js scene
      const initScene = () => {
        console.log('Initializing scene...');
        if (!containerRef.current) {
          console.error('Container ref is null');
          return null;
        }
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        console.log('Container dimensions:', width, height);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0xf5f0e6, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.pointerEvents = 'auto';
        containerRef.current.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 28;
        camera.position.y = 1.5;
        rendererRef.current = renderer;
        cameraRef.current = camera;
        sceneRef.current = scene;
        console.log('Scene, camera, renderer initialized');
        return { scene, camera, renderer };
      };

      // Create and configure the torus mesh
      const createTorus = () => {
        console.log('Creating torus...');
        const geometry = new THREE.TorusGeometry(2.5, 0.55, 64, 128);
        const vertexCount = geometry.attributes.position.count;
        const initialPositions = new Float32Array(geometry.attributes.position.array);
        const colors = new Float32Array(vertexCount * 3);
        for (let i = 0; i < vertexCount; i++) {
          const y = initialPositions[i * 3 + 1];
          const hue = 0.6 + 0.2 * (y + 2) / 4;
          const color = new THREE.Color().setHSL(hue % 1, 1.0, 0.7);
          colors.set([color.r, color.g, color.b], i * 3);
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.attributes.color.needsUpdate = true;
        geometry.userData = { initialPositions, colors };
        const envMapUrls = [
          'https://threejs.org/examples/textures/cube/Bridge2/posx.jpg',
          'https://threejs.org/examples/textures/cube/Bridge2/negx.jpg',
          'https://threejs.org/examples/textures/cube/Bridge2/posy.jpg',
          'https://threejs.org/examples/textures/cube/Bridge2/negy.jpg',
          'https://threejs.org/examples/textures/cube/Bridge2/posz.jpg',
          'https://threejs.org/examples/textures/cube/Bridge2/negz.jpg',
        ];
        return new Promise((resolve) => {
          console.log('Loading environment map...');
          new THREE.CubeTextureLoader().load(envMapUrls, (envMap) => {
            console.log('Environment map loaded');
            const material = new THREE.MeshPhysicalMaterial({
              vertexColors: true,
              roughness: 0.01,
              metalness: 0.6,
              clearcoat: 1,
              clearcoatRoughness: 0.01,
              reflectivity: 1,
              envMap: envMap,
              envMapIntensity: 2,
              ior: 1.5,
              thickness: 2.0
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.y = 1.5;
            meshRef.current = mesh;
            console.log('Torus created and ready');
            resolve(mesh);
          });
        });
      };

      // Set up lighting
      const setupLights = (scene) => {
        console.log('Setting up lights');
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
        console.log('Lights setup complete');
      };

      // Animation loop
      const animate = (mesh, scene, camera, renderer) => {
        console.log('Starting animation loop...');
        let dragDeformStrength = 0;
        let dragMouse = { x: 0, y: 0 };
        let dragActive = false;
        const geometry = mesh.geometry;
        const initialPositions = geometry.userData.initialPositions;
        const colors = geometry.userData.colors;
        const simplex = createNoise4D();
        const raycaster = new THREE.Raycaster();
        let breathScale = 1;
        let targetBreathScale = 1;
        let breathTimeout = null;

        function animateFrame(time) {
          if (!lastTimeRef.current) lastTimeRef.current = time;
          const deltaTime = (time - lastTimeRef.current) / 1000;
          lastTimeRef.current = time;

          // Robust excitement interpolation
          excitementLevelRef.current += (excitementTargetRef.current - excitementLevelRef.current) * Math.min(1, deltaTime * 3);
          const excitementLevel = excitementLevelRef.current;

          // Update colors with time-based transition and excitement
          const colorArray = geometry.attributes.color.array;
          const t = time * 0.0007 * (1 + excitementLevel * 2);
          for (let i = 0; i < colors.length; i += 3) {
            const y = initialPositions[i];
            const baseHue = 0.6 + 0.2 * (y + 2) / 4;
            const timeOffset = Math.sin(t * 0.5) * 0.2;
            const excitementOffset = Math.sin(t * 2) * 0.2 * excitementLevel;
            const hue = (baseHue + timeOffset + excitementOffset) % 1;
            const color = new THREE.Color().setHSL(hue, 1.0, 0.7);
            colorArray[i] = color.r;
            colorArray[i + 1] = color.g;
            colorArray[i + 2] = color.b;
          }

          // Smoothly interpolate breath scale with excitement
          breathScale += (targetBreathScale - breathScale) * Math.min(1, deltaTime * 8);
          const excitementScale = 1 + Math.sin(time * 0.005) * 0.08 * excitementLevel;
          mesh.scale.set(breathScale * excitementScale, breathScale * excitementScale, breathScale * excitementScale);

          // Update camera position
          const optimalDistance = calculateOptimalCameraDistance();
          camera.position.z = optimalDistance;
          camera.position.y = 1.5;
          camera.lookAt(0, 1.5, 0);

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
              const vertex = new THREE.Vector3(ox, oy, oz);
              vertex.applyMatrix4(mesh.matrixWorld);
              vertex.project(camera);
              const dist = Math.sqrt(
                Math.pow(vertex.x - dragMouse.x, 2) +
                Math.pow(vertex.y - dragMouse.y, 2)
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

          positions.needsUpdate = true;
          geometry.attributes.color.needsUpdate = true;
          geometry.computeVertexNormals();

          renderer.render(scene, camera);
          animationFrameRef.current = requestAnimationFrame(animateFrame);
          if (time < 1e6) console.log('Animation frame running at time:', time);
        }

        // Calculate optimal camera distance
        const calculateOptimalCameraDistance = () => {
          const torusRadius = 2.5 + 0.55;
          const margin = 1.8;
          const scaledRadius = torusRadius * breathScale * margin;
          const fov = camera.fov * (Math.PI / 180);
          const aspect = camera.aspect;
          const excitementLevel = excitementLevelRef.current;
          const fitHeightDistance = scaledRadius / Math.tan(fov / 2);
          const fitWidthDistance = scaledRadius / (Math.tan(fov / 2) * aspect);
          return Math.max(fitHeightDistance, fitWidthDistance) * (1 + excitementLevel * 0.1);
        };

        // Mouse event handlers
        const handleMouseDown = (e) => {
          dragActive = true;
          dragDeformStrength = 0.5;
          const rect = renderer.domElement.getBoundingClientRect();
          dragMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          dragMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        };

        const handleMouseMove = (e) => {
          if (dragActive) {
            const rect = renderer.domElement.getBoundingClientRect();
            dragMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            dragMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          }
        };

        const handleMouseUp = () => {
          dragActive = false;
          dragDeformStrength = 0;
        };

        const handleClick = (e) => {
          const rect = renderer.domElement.getBoundingClientRect();
          const mouse = new THREE.Vector2(
            ((e.clientX - rect.left) / rect.width) * 2 - 1,
            -((e.clientY - rect.top) / rect.height) * 2 + 1
          );
          raycaster.setFromCamera(mouse, camera);
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

        renderer.domElement.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        renderer.domElement.addEventListener('click', handleClick);
        window.addEventListener('mouseleave', handleMouseUp);

        animationFrameRef.current = requestAnimationFrame(animateFrame);

        return () => {
          renderer.domElement.removeEventListener('mousedown', handleMouseDown);
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
          renderer.domElement.removeEventListener('click', handleClick);
          window.removeEventListener('mouseleave', handleMouseUp);
          if (breathTimeout) clearTimeout(breathTimeout);
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
      };

      // Handle container resize
      const handleResize = (camera, renderer) => {
        const resize = () => {
          if (!containerRef.current) return;
          const width = containerRef.current.offsetWidth;
          const height = containerRef.current.offsetHeight;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
          renderer.domElement.style.width = '100%';
          renderer.domElement.style.height = '100%';
        };

        resize();
        const observer = new window.ResizeObserver(resize);
        observer.observe(containerRef.current);
        window.addEventListener('resize', resize);

        return () => {
          observer.disconnect();
          window.removeEventListener('resize', resize);
        };
      };

      // Initialize animation
      console.log('Starting animation initialization...');
      const { scene, camera, renderer } = initScene();
      if (!scene || !camera || !renderer) {
        console.error('Failed to initialize scene components');
        return;
      }

      const group = new THREE.Group();
      scene.add(group);

      createTorus().then((mesh) => {
        console.log('Torus created, adding to scene...');
        group.add(mesh);
        setupLights(scene);
        const cleanupAnimation = animate(mesh, scene, camera, renderer);
        const cleanupResize = handleResize(camera, renderer);
        cleanupFunctions.push(cleanupAnimation, cleanupResize);
      }).catch(error => {
        console.error('Error in animation setup:', error);
      });

    } catch (error) {
      console.error('Error in animation initialization:', error);
      setError(error);
    }

    // Cleanup function
    return () => {
      console.log('Cleaning up animation');
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
      }
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="animation-bg" 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        zIndex: -1,
        pointerEvents: 'auto'
      }} 
    />
  );
};

export default BackgroundAnimation; 