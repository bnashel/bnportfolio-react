import { useState, useEffect, useRef } from 'react';

export const usePerformanceMode = () => {
  const [performanceMode, setPerformanceMode] = useState('auto');
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const isLowPerformanceRef = useRef(false);

  useEffect(() => {
    isLowPerformanceRef.current = isLowPerformance;
  }, [isLowPerformance]);

  useEffect(() => {
    // One-time performance detection
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      setIsLowPerformance(true);
      return;
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
    const hasSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    gl.getExtension('WEBGL_lose_context')?.loseContext();

    const detected = Boolean(isMobile || hasLimitedMemory || hasSlowCPU);
    setIsLowPerformance(prev => prev || detected);
  }, []);

  useEffect(() => {
    // Monitor frame rate; downgrade once after sustained low FPS, then stop
    let frameCount = 0;
    let lastTime = performance.now();
    let badSeconds = 0;
    let rafId = null;

    const monitorFrameRate = () => {
      if (isLowPerformanceRef.current) {
        rafId = null;
        return;
      }

      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTime;

      if (elapsed >= 1000) {
        if (!document.hidden && elapsed <= 1500) {
          const fps = (frameCount * 1000) / elapsed;
          badSeconds = fps < 30 ? badSeconds + 1 : 0;
        } else {
          badSeconds = 0;
        }
        frameCount = 0;
        lastTime = currentTime;

        if (badSeconds >= 3) {
          setIsLowPerformance(true);
          rafId = null;
          return;
        }
      }

      rafId = requestAnimationFrame(monitorFrameRate);
    };

    const handleVisibilityChange = () => {
      frameCount = 0;
      lastTime = performance.now();
      badSeconds = 0;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    rafId = requestAnimationFrame(monitorFrameRate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { isLowPerformance, performanceMode, setPerformanceMode };
};
