import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show CTA when user has scrolled past hero section but not at the bottom
      const showThreshold = windowHeight * 0.8;
      const hideThreshold = documentHeight - windowHeight - 200;
      
      if (currentScrollY > showThreshold && currentScrollY < hideThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  // Don't show on contact page
  if (location.pathname === '/contact') {
    return null;
  }

  const handleCTAClick = () => {
    if (location.pathname === '/') {
      // On home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to contact page
      window.location.href = '/contact';
    }
  };

  const getCtaText = () => {
    switch (location.pathname) {
      case '/':
        return 'Get Started';
      case '/about':
        return 'Work With Us';
      case '/projects':
        return 'Start Your Project';
      default:
        return 'Contact Us';
    }
  };

  const getCtaIcon = () => (
    <svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
      />
    </svg>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="floating-cta"
        >
          <motion.button
            onClick={handleCTAClick}
            className="floating-cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`${getCtaText()} - Contact Zunafa Interior Design`}
            type="button"
          >
            <span className="floating-cta-icon">
              {getCtaIcon()}
            </span>
            <span className="floating-cta-text">
              {getCtaText()}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
