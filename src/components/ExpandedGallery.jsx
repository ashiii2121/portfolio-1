import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const ExpandedGallery = ({ title = "COMPLETE WORKS", palette = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'
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
    "/ex-30.jpg"
  ];

  // Sample videos (placeholder URLs - replace with actual video URLs)
  const galleryVideos = [
    {
      id: 1,
      title: "Interior Design Process",
      thumbnail: "/pr-1.jpg",
      videoUrl: ""
    },
    {
      id: 2, 
      title: "3D Visualization Tour",
      thumbnail: "/pr2-1.jpg",
      videoUrl: ""
    },
    {
      id: 3,
      title: "Before & After Transformation", 
      thumbnail: "/OF1-1.jpg",
      videoUrl: ""
    }
  ];

  const openMedia = (index, type) => {
    setSelectedMedia(index);
    setMediaType(type);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setMediaType(null);
  };

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  // Navigation functions
  const nextMedia = () => {
    if (mediaType === 'image') {
      setSelectedMedia((prev) => (prev + 1) % galleryImages.length);
    } else if (mediaType === 'video') {
      setSelectedMedia((prev) => (prev + 1) % videoSources.length);
    }
  };

  const prevMedia = () => {
    if (mediaType === 'image') {
      setSelectedMedia((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    } else if (mediaType === 'video') {
      setSelectedMedia((prev) => (prev - 1 + videoSources.length) % videoSources.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedMedia !== null) {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            prevMedia();
            break;
          case 'ArrowRight':
            e.preventDefault();
            nextMedia();
            break;
          case 'Escape':
            e.preventDefault();
            closeMedia();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia, mediaType]);

  // Touch/Swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextMedia();
    } else if (isRightSwipe) {
      prevMedia();
    }
  };

  // Get primary colors from palette for styling
  const primaryColor = palette[0] || '#C36F4B';
  const secondaryColor = palette[1] || '#E8DED1';

  return (
    <>
      <div 
        className="expanded-gallery"
        style={{
          '--primary-color': primaryColor,
          '--secondary-color': secondaryColor,
        }}
      >
        {/* Section Header */}
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gallery-title">{title}</h2>
          <p className="gallery-description">
            Explore our complete portfolio of 30 curated interior design projects showcasing diverse styles and spaces
          </p>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          className="images-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openMedia(index, 'image')}
            >
              <OptimizedImage
                src={image}
                alt={`Zunafa Interior Design Project ${index + 1} - Professional interior design showcase`}
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
            </motion.div>
          ))}
        </motion.div>

        Videos Section
        <motion.div
          className="videos-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="videos-title">Project Videos</h3>
          <div className="videos-grid">
            {galleryVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="video-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openMedia(index, 'video')}
              >
                <div className="video-thumbnail">
                  <OptimizedImage
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumb-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="video-play-overlay">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="video-info">
                  <h4 className="video-title">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            className="media-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <motion.div
              className="media-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeMedia} aria-label="Close modal">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>

              {/* Navigation Buttons */}
              {((mediaType === 'image' && galleryImages.length > 1) ||
                (mediaType === 'video' && galleryVideos.length > 1)) && (
                <>
                  <button
                    className="nav-btn prev-btn"
                    onClick={prevMedia}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>

                  <button
                    className="nav-btn next-btn"
                    onClick={nextMedia}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                </>
              )}

              {/* Image/Video Counter */}
              {selectedMedia !== null && (
                <div className="media-counter">
                  {selectedMedia + 1} / {mediaType === 'image' ? galleryImages.length : galleryVideos.length}
                </div>
              )}

              {mediaType === 'image' ? (
                <img
                  src={galleryImages[selectedMedia]}
                  alt={`Zunafa Interior Design Project ${selectedMedia + 1} - Detailed view of professional interior design work`}
                  className="modal-image"
                />
              ) : (
                <video
                  src={galleryVideos[selectedMedia]?.videoUrl}
                  controls
                  autoPlay
                  className="modal-video"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandedGallery;
