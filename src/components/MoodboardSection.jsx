import { useState } from "react";
import { motion } from "framer-motion";
import "./MoodboardSection.css";

const MoodboardSection = ({
  index = "01",
  title = "BEDROOM",
  images = [], // array of 4 image URLs
  palette = [], // array of 6 hex colours
}) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredSwatch, setHoveredSwatch] = useState(null);

  return (
    <motion.section
      className="moodboard"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* headline */}
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="index"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {index}
        </motion.span>
        <motion.span
          className="title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.span>
      </motion.div>

      {/* circled thumbnails */}
      <motion.div
        className="thumbs"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {images.slice(0, 4).map((src, i) => (
          <motion.div
            className="thumb"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            onMouseEnter={() => setHoveredImage(i)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={src}
              alt={`${title} inspiration ${i + 1}`}
              loading="lazy"
            />
            {hoveredImage === i && (
              <motion.div
                className="thumb-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="thumb-label"> {i + 1}</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* colour swatches */}
      <motion.div
        className="palette"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {palette.slice(0, 6).map((color, i) => (
          <motion.span
            className="swatch"
            key={i}
            style={{ backgroundColor: color }}
            title={color}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            onMouseEnter={() => setHoveredSwatch(i)}
            onMouseLeave={() => setHoveredSwatch(null)}
          >
            {hoveredSwatch === i && (
              <motion.div
                className="swatch-tooltip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {color}
              </motion.div>
            )}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MoodboardSection;
