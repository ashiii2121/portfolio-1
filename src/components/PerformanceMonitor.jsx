import React, { useEffect, useState } from 'react';
import { usePerformance } from '../hooks/usePerformance';

const PerformanceMonitor = ({ showInDevelopment = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({});
  const performance = usePerformance();

  useEffect(() => {
    // Only show in development mode
    const isDevelopment = process.env.NODE_ENV === 'development';
    setIsVisible(isDevelopment && showInDevelopment);

    if (isDevelopment) {
      // Collect additional performance metrics
      const collectMetrics = () => {
        const navigation = window.performance?.getEntriesByType('navigation')[0];
        const paint = window.performance?.getEntriesByType('paint');
        
        if (navigation) {
          setMetrics({
            domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
            firstPaint: paint?.find(p => p.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint?.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
            transferSize: Math.round(navigation.transferSize / 1024), // KB
            domElements: document.querySelectorAll('*').length,
          });
        }
      };

      // Collect metrics after page load
      if (document.readyState === 'complete') {
        collectMetrics();
      } else {
        window.addEventListener('load', collectMetrics);
        return () => window.removeEventListener('load', collectMetrics);
      }
    }
  }, [showInDevelopment]);

  const getPerformanceScore = () => {
    if (!metrics.firstContentfulPaint) return 'N/A';
    
    let score = 100;
    if (metrics.firstContentfulPaint > 2500) score -= 30;
    if (metrics.domContentLoaded > 2000) score -= 25;
    if (metrics.loadComplete > 3000) score -= 25;
    if (metrics.transferSize > 1000) score -= 20; // > 1MB
    
    return Math.max(0, score);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#22c55e'; // green
    if (score >= 70) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  if (!isVisible) return null;

  return (
    <div className="performance-monitor">
      <div className="performance-monitor-header">
        <h4>Performance Monitor</h4>
        <button 
          onClick={() => setIsVisible(false)}
          aria-label="Close performance monitor"
          className="performance-monitor-close"
        >
          ×
        </button>
      </div>
      
      <div className="performance-metrics">
        <div className="metric">
          <span className="metric-label">Score:</span>
          <span 
            className="metric-value"
            style={{ color: getScoreColor(getPerformanceScore()) }}
          >
            {getPerformanceScore()}
          </span>
        </div>
        
        <div className="metric">
          <span className="metric-label">Connection:</span>
          <span className="metric-value">
            {performance.connectionType}
            {performance.isSlowConnection && ' (slow)'}
          </span>
        </div>
        
        <div className="metric">
          <span className="metric-label">FCP:</span>
          <span className="metric-value">
            {Math.round(metrics.firstContentfulPaint)}ms
          </span>
        </div>
        
        <div className="metric">
          <span className="metric-label">DCL:</span>
          <span className="metric-value">
            {metrics.domContentLoaded}ms
          </span>
        </div>
        
        <div className="metric">
          <span className="metric-label">Load:</span>
          <span className="metric-value">
            {metrics.loadComplete}ms
          </span>
        </div>
        
        <div className="metric">
          <span className="metric-label">Size:</span>
          <span className="metric-value">
            {metrics.transferSize}KB
          </span>
        </div>
        
        <div className="metric">
          <span className="metric-label">DOM:</span>
          <span className="metric-value">
            {metrics.domElements} elements
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
