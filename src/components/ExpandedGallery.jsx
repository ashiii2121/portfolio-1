import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const ExpandedGallery = ({ title = "COMPLETE WORKS", palette = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // 30 gallery images ex-1 to ex-30
  const galleryImages = [
    // "/ex-1.jpg",
    "/ex-2.jpg",
    "/ex-3.jpg",
    // "/ex-4.jpg",
    "/ex-5.jpg",
    "/ex-6.jpg",
    "/ex-7.jpg",
    "/ex-8.jpg",
    "/ex-9.jpg",
    "/ex-10.jpg",
    "/ex-11.jpg",
    "/ex-12.jpg",
    "/ex-13.jpg",
    "/ex-14.jpg",
    "/ex-15.jpg",
    "/ex-16.jpg",
    "/ex-17.jpg",
    "/ex-18.jpg",
    "/ex-19.jpg",
    "/ex-20.jpg",
    "/ex-21.jpg",
    "/ex-22.jpg",
    "/ex-23.jpg",
    "/ex-24.jpg",
    "/ex-25.jpg",
    "/ex-26.jpg",
    "/ex-27.jpg",
    "/ex-28.jpg",
    "/ex-29.jpg",
    "/ex-30.jpg",
  ];

  const openMedia = (index) => {
    setSelectedMedia(index);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  // Navigation functions
  const nextMedia = () => {
    setSelectedMedia((prev) => (prev + 1) % galleryImages.length);
  };

  const prevMedia = () => {
    setSelectedMedia(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedMedia !== null) {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            prevMedia();
            break;
          case "ArrowRight":
            e.preventDefault();
            nextMedia();
            break;
          case "Escape":
            e.preventDefault();
            closeMedia();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedMedia]);

  // Get primary colors from palette for styling
  const primaryColor = palette[0] || "#C36F4B";
  const secondaryColor = palette[1] || "#E8DED1";

  return (
    <>
      <div
        className="expanded-gallery"
        style={{
          "--primary-color": primaryColor,
          "--secondary-color": secondaryColor,
        }}
      >
        {/* Section Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">{title}</h2>
          <p className="gallery-description">
            Explore our complete portfolio of 30 curated interior design
            projects showcasing diverse styles and spaces
          </p>
        </div>

        {/* Images Grid */}
        <div className="images-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openMedia(index)}
            >
              <OptimizedImage
                src={image}
                alt={`Zunafa Interior Design Project ${
                  index + 1
                } - Professional interior design showcase`}
                className="gallery-image"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                threshold={200}
                effect="opacity"
                onLoad={() => handleImageLoad(index)}
              />
              {!loadedImages.has(index) && (
                <div className="gallery-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <div className="gallery-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia !== null && (
          <div className="media-modal" onClick={closeMedia}>
            <div className="media-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-btn"
                onClick={closeMedia}
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    className="nav-btn prev-btn"
                    onClick={prevMedia}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>

                  <button
                    className="nav-btn next-btn"
                    onClick={nextMedia}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {selectedMedia !== null && (
                <div className="media-counter">
                  {selectedMedia + 1} / {galleryImages.length}
                </div>
              )}

              <img
                src={galleryImages[selectedMedia]}
                alt={`Zunafa Interior Design Project ${
                  selectedMedia + 1
                } - Detailed view of professional interior design work`}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandedGallery;
