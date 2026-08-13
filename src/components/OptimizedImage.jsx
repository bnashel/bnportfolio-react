import { useEffect, useRef, useState } from 'react';

export default function OptimizedImage({
  src,
  alt,
  className,
  style,
  width,
  height,
  loading = 'lazy',
  fetchpriority
}) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Cached images can finish before React attaches the onLoad listener
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={className ? `optimized-image-fallback ${className}` : 'optimized-image-fallback'}
        style={{
          width: '100%',
          aspectRatio: width && height ? `${width} / ${height}` : undefined,
          ...style
        }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchpriority}
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
        ...style
      }}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
    />
  );
}
