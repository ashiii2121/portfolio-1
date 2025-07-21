import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "../components/Lightbox";
import projectsData from "../data/projects.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair text-charcoal mb-4">
            Project not found
          </h2>
          <Link
            to="/"
            className="text-terracotta hover:text-terracotta/80 font-inter underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="project-hero">
        {/* Hero Banner */}
        <section className="project-hero">
          <LazyLoadImage
            src={project.images[0]}
            alt={project.title}
            className="project-hero-image"
            effect="opacity"
          />
          <div className="project-hero-overlay">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="project-hero-content"
            >
              <h1 className="project-hero-title">{project.title}</h1>
              <p className="project-hero-location">{project.location}</p>
            </motion.div>
          </div>
        </section>

        {/* Project Facts Bar */}
        <section className="project-facts">
          <div className="container">
            <div className="project-facts-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="project-fact"
              >
                <div className="project-fact-value">{project.year}</div>
                <div className="project-fact-label">Year</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="project-fact"
              >
                <div className="project-fact-value">{project.area}</div>
                <div className="project-fact-label">Area</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="project-fact"
              >
                <div className="project-fact-value">{project.style}</div>
                <div className="project-fact-label">Style</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="project-fact"
              >
                <div className="project-fact-value">
                  {project.role.split(" ")[0]}
                </div>
                <div className="project-fact-label">Role</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="project-gallery">
          <div className="container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="swiper"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-full cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <LazyLoadImage
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      effect="opacity"
                    />
                    {/* Click indicator */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition"
                      style={{ backgroundColor: "rgba(34, 34, 34, 0)" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-terracotta text-ivory p-3 rounded-full"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Project Details */}
        <section className="project-details">
          <div className="container">
            <div className="project-details-grid">
              {/* Project Brief */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="project-brief"
              >
                <h2>Project Brief</h2>
                <p>{project.brief}</p>
              </motion.div>

              {/* Role & Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="project-role">
                  <h3>My Role</h3>
                  <p>{project.role}</p>
                </div>

                <div className="project-testimonial">
                  <blockquote>"{project.testimonial}"</blockquote>
                  <cite>— Client</cite>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="project-navigation">
          <div className="container">
            <div className="project-nav-content">
              <Link to="/" className="project-nav-back">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back to Projects</span>
              </Link>

              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Lightbox
        images={project.images}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        currentIndex={lightboxIndex}
      />
    </>
  );
};

export default Project;
