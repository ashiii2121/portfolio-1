import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <LazyLoadImage
          src="/zunu.jpg"
          alt="Interior Design Hero"
          className="hero-image"
          effect="blur"
          placeholderSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=50&h=30&fit=crop&q=20"
        />
        {/* Overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
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
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="btn btn-primary"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="btn btn-secondary"
          >
            Learn More
          </motion.button>
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
