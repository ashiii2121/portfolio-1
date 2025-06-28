import { useEffect, useState } from 'react';

export const usePerformance = () => {
  const [metrics, setMetrics] = useState({
    loading: true,
    connectionType: 'unknown',
    isSlowConnection: false,
    performanceScore: null,
  });

  useEffect(() => {
    // Check connection type
    const getConnectionInfo = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const effectiveType = connection?.effectiveType || 'unknown';
        const isSlowConnection = ['slow-2g', '2g', '3g'].includes(effectiveType);
        
        return {
          connectionType: effectiveType,
          isSlowConnection,
        };
      }
      
      return {
        connectionType: 'unknown',
        isSlowConnection: false,
      };
    };

    // Get performance metrics
    const getPerformanceMetrics = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0];
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
          
          // Simple performance score calculation (0-100)
          let score = 100;
          if (loadTime > 3000) score -= 30;
          if (domContentLoaded > 2000) score -= 20;
          if (firstContentfulPaint > 2500) score -= 25;
          if (firstPaint > 2000) score -= 15;
          
          return {
            loadTime,
            domContentLoaded,
            firstPaint,
            firstContentfulPaint,
            performanceScore: Math.max(0, score),
          };
        }
      }
      
      return {
        performanceScore: null,
      };
    };

    const connectionInfo = getConnectionInfo();
    const performanceInfo = getPerformanceMetrics();

    setMetrics({
      loading: false,
      ...connectionInfo,
      ...performanceInfo,
    });

    // Listen for connection changes
    const handleConnectionChange = () => {
      const newConnectionInfo = getConnectionInfo();
      setMetrics(prev => ({
        ...prev,
        ...newConnectionInfo,
      }));
    };

    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      connection?.addEventListener('change', handleConnectionChange);
      
      return () => {
        connection?.removeEventListener('change', handleConnectionChange);
      };
    }
  }, []);

  return metrics;
};

// Hook for preloading critical resources
export const usePreloadResources = (resources = []) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as || 'image';
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (resource.crossorigin) {
        link.crossOrigin = resource.crossorigin;
      }
      
      document.head.appendChild(link);
    });

    // Cleanup function to remove preload links
    return () => {
      resources.forEach(resource => {
        const existingLink = document.querySelector(`link[href="${resource.href}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, [resources]);
};

// Hook for lazy loading components based on viewport
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, options]);

  return [setElement, isIntersecting];
};

// Hook for optimizing images based on device capabilities
export const useImageOptimization = () => {
  const [optimization, setOptimization] = useState({
    quality: 80,
    format: 'webp',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  });

  useEffect(() => {
    const checkCapabilities = () => {
      // Check WebP support
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      
      // Check device pixel ratio
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Check connection speed
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowConnection = connection && ['slow-2g', '2g'].includes(connection.effectiveType);
      
      setOptimization({
        quality: isSlowConnection ? 60 : 80,
        format: webpSupported ? 'webp' : 'jpg',
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
        pixelRatio,
        isSlowConnection,
      });
    };

    checkCapabilities();
  }, []);

  return optimization;
};
