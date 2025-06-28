import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const ExpandedGallery = ({ title = "COMPLETE WORKS", palette = [] }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'

  // 20 images using available project images and some placeholders
  const galleryImages = [
    "/pr-1.jpg",
    "/pr1-1.jpg", 
    "/pr1-2.jpg",
    "/pr1-3.jpg",
    "/pr2-1.jpg",
    "/pr2-2.jpg", 
    "/pr2-3.jpg",
    "/pr2-4.jpg",
    "/OF1-1.jpg",
    "/OF1-2.jpg",
    "/OF1-3.jpg", 
    "/OF1-4.jpg",
    "/bd1-1.jpg",
    "/bd1-2.jpg",
    "/zunu.jpg",
    "/zunu1.jpg",
    // Additional placeholder images
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80"
  ];

  // Sample videos (placeholder URLs - replace with actual video URLs)
  const galleryVideos = [
    {
      id: 1,
      title: "Interior Design Process",
      thumbnail: "/pr-1.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 2, 
      title: "3D Visualization Tour",
      thumbnail: "/pr2-1.jpg",
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      id: 3,
      title: "Before & After Transformation", 
      thumbnail: "/OF1-1.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
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
            Explore our complete portfolio of interior design projects and behind-the-scenes content
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
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                threshold={200}
              />
              <div className="gallery-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Videos Section */}
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

      {/* Media Modal */}
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
              <button className="close-btn" onClick={closeMedia}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              
              {mediaType === 'image' ? (
                <img
                  src={galleryImages[selectedMedia]}
                  alt={`Gallery image ${selectedMedia + 1}`}
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
