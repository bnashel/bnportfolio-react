import { lazy, Suspense, useEffect } from 'react';
import SimpleBackground from '../../components/SimpleBackground';
import PhysicsTitle from '../../components/PhysicsTitle';
import { usePerformanceMode } from '../../hooks/usePerformanceMode';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const BackgroundAnimation = lazy(() => import('../../components/BackgroundAnimation'));

export default function Home() {
  const { isLowPerformance } = usePerformanceMode();
  const reducedMotion = useReducedMotion();
  const useSimpleBackground = isLowPerformance || reducedMotion;

  useEffect(() => {
    document.body.classList.add('home-no-scroll');
    return () => {
      document.body.classList.remove('home-no-scroll');
    };
  }, []);

  return (
    <>
      <div className="gradient-overlay-container">
        <div className="gradient-overlay gradient-overlay-1"></div>
        {!useSimpleBackground && <div className="gradient-overlay gradient-overlay-2"></div>}
        {!useSimpleBackground && <div className="gradient-overlay gradient-overlay-3"></div>}
      </div>

      <PhysicsTitle />
      {useSimpleBackground ? (
        <SimpleBackground />
      ) : (
        <Suspense fallback={null}>
          <BackgroundAnimation />
        </Suspense>
      )}
    </>
  );
}
