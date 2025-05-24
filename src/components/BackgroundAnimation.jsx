import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const isHoveringRef = useRef(false);
  const pulseTimeRef = useRef(0);
  const rotationVelocityRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);

  useEffect(() => {
    // Initialize Three.js scene
    const initScene = () => {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xf5f0e6);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      containerRef.current.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 22;
      camera.position.y = 0;

      rendererRef.current = renderer;
      cameraRef.current = camera;

      return { scene, camera, renderer };
    };

    // Create and configure the torus mesh
    const createTorus = () => {
      const geometry = new THREE.TorusGeometry(2.5, 0.55, 64, 128);
      const vertexCount = geometry.attributes.position.count;
      const initialPositions = new Float32Array(geometry.attributes.position.array);
      const colors = new Float32Array(vertexCount * 3);

      // Initialize colors with a blue-purple gradient
      for (let i = 0; i < vertexCount; i++) {
        const y = initialPositions[i * 3 + 1];
        // Start with blue-purple gradient (hue between 0.6 and 0.8)
        const hue = 0.6 + 0.2 * (y + 2) / 4;
        const color = new THREE.Color().setHSL(hue % 1, 1.0, 0.7);
        colors.set([color.r, color.g, color.b], i * 3);
      }

      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.attributes.color.needsUpdate = true;
      geometry.userData = { initialPositions, colors };

      // Create a simple environment map (cube texture with solid colors)
      const envMapUrls = [
        'https://threejs.org/examples/textures/cube/Bridge2/posx.jpg',
        'https://threejs.org/examples/textures/cube/Bridge2/negx.jpg',
        'https://threejs.org/examples/textures/cube/Bridge2/posy.jpg',
        'https://threejs.org/examples/textures/cube/Bridge2/negy.jpg',
        'https://threejs.org/examples/textures/cube/Bridge2/posz.jpg',
        'https://threejs.org/examples/textures/cube/Bridge2/negz.jpg',
      ];

      // Only add mesh after envMap loads
      return new Promise((resolve) => {
        new THREE.CubeTextureLoader().load(envMapUrls, (envMap) => {
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
          resolve(new THREE.Mesh(geometry, material));
        });
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

    // Animation loop with enhanced interactivity
    const animate = (mesh, scene, camera, renderer) => {
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
      let isExcited = false;
      let excitementLevel = 0;
      let excitementTarget = 0;

      // Calculate optimal camera distance
      const calculateOptimalCameraDistance = () => {
        const torusRadius = 2.5 + 0.55;
        const margin = 1.5;  // Adjusted margin
        const scaledRadius = torusRadius * breathScale * margin;
        const fov = camera.fov * (Math.PI / 180);
        const aspect = camera.aspect;
        
        const fitHeightDistance = scaledRadius / Math.tan(fov / 2);
        const fitWidthDistance = scaledRadius / (Math.tan(fov / 2) * aspect);
        
        return Math.max(fitHeightDistance, fitWidthDistance) * (1 + excitementLevel * 0.1); // Add excitement-based distance adjustment
      };

      function animateFrame(time) {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = (time - lastTimeRef.current) / 1000;
        lastTimeRef.current = time;

        // Update excitement level
        excitementLevel += (excitementTarget - excitementLevel) * Math.min(1, deltaTime * 3);

        // Update colors with time-based transition and excitement
        const colorArray = geometry.attributes.color.array;
        const t = time * 0.0007 * (1 + excitementLevel * 2); // Speed up color changes when excited
        for (let i = 0; i < colors.length; i += 3) {
          const y = initialPositions[i];
          const baseHue = 0.6 + 0.2 * (y + 2) / 4;
          const timeOffset = Math.sin(t * 0.5) * 0.2;
          const excitementOffset = Math.sin(t * 2) * 0.2 * excitementLevel; // Add excitement-based color variation
          const hue = (baseHue + timeOffset + excitementOffset) % 1;
          const color = new THREE.Color().setHSL(hue, 1.0, 0.7);
          colorArray[i] = color.r;
          colorArray[i + 1] = color.g;
          colorArray[i + 2] = color.b;
        }

        // Smoothly interpolate breath scale with excitement
        breathScale += (targetBreathScale - breathScale) * Math.min(1, deltaTime * 8);
        const excitementScale = 1 + Math.sin(time * 0.005) * 0.05 * excitementLevel;
        mesh.scale.set(breathScale * excitementScale, breathScale * excitementScale, breathScale * excitementScale);

        // Update camera position for optimal viewing
        const optimalDistance = calculateOptimalCameraDistance();
        camera.position.z = optimalDistance;

        // Ensure camera stays level with slight upward tilt
        camera.position.y = 1.5;  // Match camera height with torus
        camera.lookAt(0, 1.5, 0);  // Look at torus center

        // Enhanced rotation based on excitement
        if (!dragActive) {
          const baseRotationSpeed = 0.01;
          const excitementRotationSpeed = 0.02;
          mesh.rotation.x += baseRotationSpeed + excitementRotationSpeed * excitementLevel;
          mesh.rotation.y += baseRotationSpeed * 0.5 + excitementRotationSpeed * 0.5 * excitementLevel;
        }

        // Organic blob deformation using simplex noise with excitement
        const positions = geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const ox = initialPositions[i * 3];
          const oy = initialPositions[i * 3 + 1];
          const oz = initialPositions[i * 3 + 2];
          
          // Base noise
          let scale = 1 + 0.18 * simplex(ox * 0.7, oy * 0.7, oz * 0.7, t);
          
          // Add excitement-based deformation
          if (excitementLevel > 0) {
            const excitementNoise = simplex(ox * 1.2, oy * 1.2, oz * 1.2, t * 2) * 0.3 * excitementLevel;
            scale += excitementNoise;
          }

          // Deform if dragging
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
        requestAnimationFrame(animateFrame);
      }

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

      // Enhanced click effect
      const handleClick = (e) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        );
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(mesh);
        if (intersects.length > 0) {
          // Toggle excitement state
          isExcited = !isExcited;
          excitementTarget = isExcited ? 1 : 0;
          
          // Add a quick pulse effect
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

      animateFrame(0);

      return () => {
        renderer.domElement.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        renderer.domElement.removeEventListener('click', handleClick);
        window.removeEventListener('mouseleave', handleMouseUp);
      };
    };

    // Handle container resize with ResizeObserver
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
    const { scene, camera, renderer } = initScene();
    const group = new THREE.Group();
    scene.add(group);

    createTorus().then((mesh) => {
      mesh.position.y = 1.5;  // Move torus up
      group.add(mesh);
      setupLights(scene);
      const cleanupAnimation = animate(mesh, scene, camera, renderer);
      const cleanupResize = handleResize(camera, renderer);

      // Clean up
      group.userData.cleanupAnimation = cleanupAnimation;
      group.userData.cleanupResize = cleanupResize;
    });

    return () => {
      if (group.userData.cleanupAnimation) group.userData.cleanupAnimation();
      if (group.userData.cleanupResize) group.userData.cleanupResize();
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} id="animation-bg" />;
};

export default BackgroundAnimation; 