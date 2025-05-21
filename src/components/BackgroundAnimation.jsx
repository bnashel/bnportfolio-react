import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene
    const initScene = () => {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xf5f0e6);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      camera.position.z = 9;

      return { scene, camera, renderer };
    };

    // Create and configure the torus mesh
    const createTorus = () => {
      const geometry = new THREE.TorusGeometry(2, 0.5, 64, 128);
      const vertexCount = geometry.attributes.position.count;
      const initialPositions = new Float32Array(geometry.attributes.position.array);
      const colors = new Float32Array(vertexCount * 3);

      for (let i = 0; i < vertexCount; i++) {
        const y = initialPositions[i * 3 + 1];
        const hue = 0.5 + 0.5 * (y + 2) / 4;
        const color = new THREE.Color().setHSL(hue % 1, 1.0, 0.7);
        colors.set([color.r, color.g, color.b], i * 3);
      }

      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.2,
        metalness: 0.4,
        transparent: true,
        opacity: 0.95
      });

      return new THREE.Mesh(geometry, material);
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

      const ambient = new THREE.AmbientLight(0xffffff, 1.5);
      scene.add(ambient);
    };

    // Animation loop with click-and-drag interactivity
    const animate = (mesh, scene, camera, renderer) => {
      let isDragging = false;
      let lastX = 0;
      let lastY = 0;
      let dragRotX = 0;
      let dragRotY = 0;

      function animateFrame(time) {
        if (!isDragging) {
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.005;
        } else {
          mesh.rotation.x = dragRotX;
          mesh.rotation.y = dragRotY;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animateFrame);
      }

      mesh.userData = { rotX: mesh.rotation.x, rotY: mesh.rotation.y };
      
      const handleMouseDown = (e) => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        dragRotX = mesh.rotation.x;
        dragRotY = mesh.rotation.y;
      };

      const handleMouseMove = (e) => {
        if (isDragging) {
          const deltaX = e.clientX - lastX;
          const deltaY = e.clientY - lastY;
          dragRotY += deltaX * 0.01;
          dragRotX += deltaY * 0.01;
          lastX = e.clientX;
          lastY = e.clientY;
        }
      };

      const handleMouseUp = () => {
        isDragging = false;
        mesh.userData.rotX = mesh.rotation.x;
        mesh.userData.rotY = mesh.rotation.y;
      };

      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseUp);

      animateFrame(0);

      // Cleanup
      return () => {
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mouseleave', handleMouseUp);
      };
    };

    // Handle window resize
    const handleResize = (camera, renderer) => {
      const handleWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    };

    // Initialize animation
    const { scene, camera, renderer } = initScene();
    const group = new THREE.Group();
    scene.add(group);

    const mesh = createTorus();
    group.add(mesh);

    setupLights(scene);
    const cleanupAnimation = animate(mesh, scene, camera, renderer);
    const cleanupResize = handleResize(camera, renderer);

    // Cleanup function
    return () => {
      cleanupAnimation();
      cleanupResize();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} id="animation-bg" />;
};

export default BackgroundAnimation; 