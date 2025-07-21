import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  effect = 'opacity',
  threshold = 100,
  onClick,
  loading = 'lazy',
  sizes,
  srcSet,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate responsive srcSet if not provided
  const generateSrcSet = (baseSrc) => {
    if (srcSet) return srcSet;
    
    // For external URLs (Unsplash), generate different sizes
    if (baseSrc?.includes('unsplash.com')) {
      return `
        ${baseSrc}&w=400 400w,
        ${baseSrc}&w=800 800w,
        ${baseSrc}&w=1200 1200w,
        ${baseSrc}&w=1600 1600w
      `;
    }
    
    return undefined;
  };

  // Generate sizes attribute if not provided
  const generateSizes = () => {
    if (sizes) return sizes;
    
    return `
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      33vw
    `;
  };

  // Generate placeholder based on image dimensions
  const generatePlaceholder = () => {
    if (placeholder) return placeholder;
    
    // Create a low-quality placeholder
    if (src?.includes('unsplash.com')) {
      return `${src}&w=50&h=30&q=20&blur=10`;
    }
    
    // Default placeholder for local images
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiAxMkMxNiAxMy4xMDQ2IDE1LjEwNDYgMTQgMTQgMTRDMTIuODk1NCAxNCAxMiAxMy4xMDQ2IDEyIDEyQzEyIDEwLjg5NTQgMTIuODk1NCAxMCAxNCAxMEMxNS4xMDQ2IDEwIDE2IDEwLjg5NTQgMTYgMTJaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0yOCAyMEwyNCAyMEwyMCAxNkwxMiAyNEgyOFYyMFoiIGZpbGw9IiM5QjlCQTAiLz4KPC9zdmc+';
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  // Fallback image for errors
  const fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNUwxNSAyMEgyNUwyMCAxNVoiIGZpbGw9IiM5QjlCQTAiLz4KPHRleHQgeD0iMjAiIHk9IjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjgiIGZpbGw9IiM5QjlCQTAiPkVycm9yPC90ZXh0Pgo8L3N2Zz4=';

  if (hasError) {
    return (
      <div 
        className={`${className} flex items-center justify-center bg-sand text-charcoal/60`}
        style={{ width, height }}
      >
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <p className="text-xs">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <LazyLoadImage
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'image-loaded' : 'image-loading'}`}
      width={width}
      height={height}
      effect={effect}
      threshold={threshold}
      placeholderSrc={generatePlaceholder()}
      srcSet={generateSrcSet(src)}
      sizes={generateSizes()}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      onClick={onClick}
      {...props}
    />
  );
};

export default OptimizedImage;
