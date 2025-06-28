import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
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

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/", type: "route" },
    {
      name: "Projects",
      path: "/projects",
      type: "route",
      sectionPath: "projects", // For home page scrolling
    },
    {
      name: "About",
      path: "/about",
      type: "route",
      sectionPath: "about", // For home page scrolling
    },
    { name: "Contact", path: "/contact", type: "route" },
  ];

  // Function to handle navigation clicks
  const handleNavClick = (link, e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Check if we should scroll to section on home page or navigate to dedicated page
    if (link.sectionPath && location.pathname === "/") {
      // If on home page and link has section, scroll to section
      scrollToSection(link.sectionPath);
    } else {
      // Otherwise navigate to the dedicated page
      navigate(link.path);
    }
  };

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to check if link is active
  const isLinkActive = (link) => {
    // Check if current path matches the link path
    if (location.pathname === link.path) {
      return true;
    }

    // For home page sections, check if we're on home and the section is in view
    if (link.sectionPath && location.pathname === "/") {
      // You could add intersection observer logic here for more precise detection
      return location.hash === `#${link.sectionPath}`;
    }

    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isVisible ? "visible" : "hidden"}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo-link">
          <motion.div whileHover={{ scale: 1.05 }} className="navbar-logo">
            Zunafa
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.type === "route" ? link.path : `#${link.path}`}
              onClick={(e) => handleNavClick(link, e)}
              className={`navbar-link ${isLinkActive(link) ? "active" : ""}`}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`navbar-mobile ${isMobileMenuOpen ? "open" : ""}`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.type === "route" ? link.path : `#${link.path}`}
            onClick={(e) => handleNavClick(link, e)}
            className={`navbar-link ${isLinkActive(link) ? "active" : ""}`}
          >
            {link.name}
          </a>
        ))}
        <div className="flex justify-center mt-4">
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
