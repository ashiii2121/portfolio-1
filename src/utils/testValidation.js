// Test validation utilities for the enhanced Zunafa website

export const validateAccessibility = () => {
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  // Check for skip link
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    results.passed.push('Skip link present');
  } else {
    results.failed.push('Skip link missing');
  }

  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let headingLevels = [];
  headings.forEach(heading => {
    headingLevels.push(parseInt(heading.tagName.charAt(1)));
  });
  
  let properHierarchy = true;
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] > headingLevels[i-1] + 1) {
      properHierarchy = false;
      break;
    }
  }
  
  if (properHierarchy) {
    results.passed.push('Proper heading hierarchy');
  } else {
    results.failed.push('Improper heading hierarchy');
  }

  // Check for alt text on images
  const images = document.querySelectorAll('img');
  let missingAlt = 0;
  images.forEach(img => {
    if (!img.alt || img.alt.trim() === '') {
      missingAlt++;
    }
  });
  
  if (missingAlt === 0) {
    results.passed.push('All images have alt text');
  } else {
    results.failed.push(`${missingAlt} images missing alt text`);
  }

  // Check for proper button labels
  const buttons = document.querySelectorAll('button');
  let unlabeledButtons = 0;
  buttons.forEach(button => {
    const hasLabel = button.getAttribute('aria-label') || 
                    button.getAttribute('aria-labelledby') || 
                    button.textContent.trim() !== '';
    if (!hasLabel) {
      unlabeledButtons++;
    }
  });
  
  if (unlabeledButtons === 0) {
    results.passed.push('All buttons properly labeled');
  } else {
    results.failed.push(`${unlabeledButtons} buttons missing labels`);
  }

  // Check for focus indicators
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
  if (focusableElements.length > 0) {
    results.passed.push('Focusable elements present');
  }

  return results;
};

export const validatePerformance = () => {
  const results = {
    passed: [],
    failed: [],
    warnings: [],
    metrics: {}
  };

  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      const firstPaint = paint?.find(p => p.name === 'first-paint')?.startTime || 0;
      const firstContentfulPaint = paint?.find(p => p.name === 'first-contentful-paint')?.startTime || 0;
      
      results.metrics = {
        loadTime: Math.round(loadTime),
        domContentLoaded: Math.round(domContentLoaded),
        firstPaint: Math.round(firstPaint),
        firstContentfulPaint: Math.round(firstContentfulPaint),
        transferSize: Math.round(navigation.transferSize / 1024) // KB
      };

      // Performance thresholds
      if (firstContentfulPaint < 2500) {
        results.passed.push('Good First Contentful Paint');
      } else {
        results.failed.push('Slow First Contentful Paint');
      }

      if (domContentLoaded < 2000) {
        results.passed.push('Good DOM Content Loaded');
      } else {
        results.warnings.push('Slow DOM Content Loaded');
      }

      if (loadTime < 3000) {
        results.passed.push('Good Load Time');
      } else {
        results.warnings.push('Slow Load Time');
      }
    }
  }

  // Check for lazy loading
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if (lazyImages.length > 0) {
    results.passed.push(`${lazyImages.length} images using lazy loading`);
  }

  // Check for service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) {
        results.passed.push('Service Worker registered');
      } else {
        results.warnings.push('Service Worker not registered');
      }
    });
  }

  return results;
};

export const validateMobileOptimization = () => {
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  // Check viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && viewport.content.includes('width=device-width')) {
    results.passed.push('Proper viewport meta tag');
  } else {
    results.failed.push('Missing or improper viewport meta tag');
  }

  // Check for touch-friendly button sizes
  const buttons = document.querySelectorAll('button, .btn');
  let smallButtons = 0;
  buttons.forEach(button => {
    const rect = button.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      smallButtons++;
    }
  });
  
  if (smallButtons === 0) {
    results.passed.push('All buttons meet minimum touch target size');
  } else {
    results.warnings.push(`${smallButtons} buttons below recommended touch target size`);
  }

  // Check for responsive images
  const responsiveImages = document.querySelectorAll('img[srcset], img[sizes]');
  const totalImages = document.querySelectorAll('img').length;
  
  if (responsiveImages.length > 0) {
    results.passed.push(`${responsiveImages.length}/${totalImages} images are responsive`);
  }

  // Check for mobile-friendly navigation
  const mobileMenu = document.querySelector('.navbar-mobile, .mobile-menu');
  if (mobileMenu) {
    results.passed.push('Mobile navigation present');
  } else {
    results.warnings.push('Mobile navigation not detected');
  }

  return results;
};

export const validateDarkMode = () => {
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  // Check for dark mode classes
  const darkModeElements = document.querySelectorAll('.dark, [data-theme="dark"]');
  if (darkModeElements.length > 0 || document.documentElement.classList.contains('dark')) {
    results.passed.push('Dark mode implementation detected');
  } else {
    results.warnings.push('Dark mode not currently active');
  }

  // Check for theme toggle
  const themeToggle = document.querySelector('.theme-toggle, [aria-label*="theme"]');
  if (themeToggle) {
    results.passed.push('Theme toggle present');
  } else {
    results.failed.push('Theme toggle not found');
  }

  // Check for CSS custom properties (for theming)
  const computedStyle = getComputedStyle(document.documentElement);
  const hasCustomProps = computedStyle.getPropertyValue('--terracotta') !== '';
  
  if (hasCustomProps) {
    results.passed.push('CSS custom properties for theming');
  } else {
    results.warnings.push('CSS custom properties not detected');
  }

  return results;
};

export const runAllValidations = () => {
  console.log('🧪 Running Zunafa Website Validation Tests...\n');
  
  const accessibility = validateAccessibility();
  const performance = validatePerformance();
  const mobile = validateMobileOptimization();
  const darkMode = validateDarkMode();
  
  console.log('♿ Accessibility Results:');
  console.log('✅ Passed:', accessibility.passed);
  console.log('❌ Failed:', accessibility.failed);
  console.log('⚠️ Warnings:', accessibility.warnings);
  console.log('');
  
  console.log('⚡ Performance Results:');
  console.log('✅ Passed:', performance.passed);
  console.log('❌ Failed:', performance.failed);
  console.log('⚠️ Warnings:', performance.warnings);
  console.log('📊 Metrics:', performance.metrics);
  console.log('');
  
  console.log('📱 Mobile Optimization Results:');
  console.log('✅ Passed:', mobile.passed);
  console.log('❌ Failed:', mobile.failed);
  console.log('⚠️ Warnings:', mobile.warnings);
  console.log('');
  
  console.log('🌙 Dark Mode Results:');
  console.log('✅ Passed:', darkMode.passed);
  console.log('❌ Failed:', darkMode.failed);
  console.log('⚠️ Warnings:', darkMode.warnings);
  console.log('');
  
  const totalPassed = accessibility.passed.length + performance.passed.length + 
                     mobile.passed.length + darkMode.passed.length;
  const totalFailed = accessibility.failed.length + performance.failed.length + 
                     mobile.failed.length + darkMode.failed.length;
  
  console.log(`🎯 Overall Score: ${totalPassed}/${totalPassed + totalFailed} tests passed`);
  
  return {
    accessibility,
    performance,
    mobile,
    darkMode,
    summary: {
      totalPassed,
      totalFailed,
      score: Math.round((totalPassed / (totalPassed + totalFailed)) * 100)
    }
  };
};
