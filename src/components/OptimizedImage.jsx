import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className, style }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    return () => { img.onload = null; };
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
        ...style
      }}
    />
  );
} 