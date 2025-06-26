import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Fallback images if no images provided
  const fallbackImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
  ];

  const displayImages = images && images.length > 0 ? images : fallbackImages;

  if (!displayImages || displayImages.length === 0) {
    return (
      <div className="project-image-placeholder">
        <div className="placeholder-content">
          <div className="placeholder-icon">📸</div>
          <p className="placeholder-text">Project Image Space</p>
          <p className="placeholder-subtitle">
            Add your {title?.toLowerCase()} project images here
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="project-image-gallery">
        {/* Main large image */}
        <motion.div
          className="main-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={displayImages[0]}
            alt={`${title} project main view`}
            className="main-project-image"
            onClick={() => setSelectedImage(0)}
            loading="lazy"
          />
          <div className="image-overlay">
            <motion.button
              className="view-full-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(0)}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              View Full
            </motion.button>
          </div>
        </motion.div>

        {/* Thumbnail grid */}
        <div className="thumbnail-grid">
          {displayImages.slice(1, 4).map((image, index) => (
            <motion.div
              key={index}
              className="thumbnail-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index + 1)}
            >
              <img
                src={image}
                alt={`${title} project view ${index + 2}`}
                className="thumbnail-image"
                loading="lazy"
              />
              <div className="thumbnail-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              <img
                src={displayImages[selectedImage]}
                alt={`${title} project view ${selectedImage + 1}`}
                className="lightbox-image"
              />

              <div className="lightbox-nav">
                <button
                  className="nav-btn prev"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage > 0
                        ? selectedImage - 1
                        : displayImages.length - 1
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>

                <span className="image-counter">
                  {selectedImage + 1} / {displayImages.length}
                </span>

                <button
                  className="nav-btn next"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage < displayImages.length - 1
                        ? selectedImage + 1
                        : 0
                    )
                  }
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectImageGallery;
