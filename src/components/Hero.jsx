import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";
import { usePreloadResources } from "../hooks/usePerformance";

const Hero = () => {
  const navigate = useNavigate();
  // Preload critical resources
  usePreloadResources([
    { href: "/zunu.jpg", as: "image" },
    { href: "/zunu1.jpg", as: "image" }, // Alternative hero image
  ]);

  return (
    <section
      className="hero"
      id="main-content"
      role="banner"
      aria-label="Hero section showcasing Zunafa Interior Design"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10" role="img" aria-label="Interior design showcase background">
        <OptimizedImage
          src="/zunu.jpg"
          alt="Interior Design Hero - Beautiful modern living space showcasing Zunafa's design expertise"
          className="hero-image"
          effect="blur"
          threshold={50}
          sizes="100vw"
          placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkFGOUY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRThERUQxIi8+Cjx0ZXh0IHg9IjUwIiB5PSIzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI4IiBmaWxsPSIjQzM2RjRCIj5Mb2FkaW5nLi4uPC90ZXh0Pgo8L3N2Zz4="
        />
        {/* Overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-main-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Interior Design
            <br />
            Portfolio
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-subtitle"
          >
            Creating beautiful, functional spaces that reflect your unique style
            and enhance your daily life.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
              className="btn btn-primary"
              aria-label="View our interior design projects"
              type="button"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className="btn btn-secondary"
              aria-label="Learn more about Zunafa Interior Design"
              type="button"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Featured Complete Work */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-featured-work"
        >
          <Link to="/projects" className="hero-work-card-link">
            <div className="hero-work-card">
            <div className="hero-work-image">
              <OptimizedImage
                src="/pr-1.jpg"
                alt="Featured completed interior design project - Beauty Parlour"
                className="hero-work-img"
                effect="blur"
                threshold={50}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="hero-work-info">
              <span className="hero-work-label">Latest Project</span>
              <h3 className="hero-work-title">Beauty Parlour Design</h3>
              <p className="hero-work-description">Complete interior transformation</p>
            </div>
          </div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hero-scroll"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="block mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <p className="text-sm font-inter mt-2">Scroll</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
