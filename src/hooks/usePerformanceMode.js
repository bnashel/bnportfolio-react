import { useState, useEffect } from 'react';

export const usePerformanceMode = () => {
  const [performanceMode, setPerformanceMode] = useState('auto');
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Performance detection
    const detectPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setIsLowPerformance(true);
        return;
      }

      // Check for performance indicators
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const hasSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      // Simple GPU benchmark
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
      const isIntegratedGPU = renderer.toLowerCase().includes('intel') || renderer.toLowerCase().includes('integrated');

      const shouldReducePerformance = isMobile || hasLimitedMemory || hasSlowCPU || isIntegratedGPU;
      setIsLowPerformance(shouldReducePerformance);
    };

    detectPerformance();

    // Monitor frame rate
    let frameCount = 0;
    let lastTime = performance.now();
    let checkFrameRate;
    
    const monitorFrameRate = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
        
        // If FPS drops below 30, enable low performance mode
        if (fps < 30 && !isLowPerformance) {
          setIsLowPerformance(true);
        }
      }
      
      checkFrameRate = requestAnimationFrame(monitorFrameRate);
    };
    
    checkFrameRate = requestAnimationFrame(monitorFrameRate);

    return () => {
      if (checkFrameRate) {
        cancelAnimationFrame(checkFrameRate);
      }
    };
  }, [isLowPerformance]);

  return { isLowPerformance, performanceMode, setPerformanceMode };
}; 