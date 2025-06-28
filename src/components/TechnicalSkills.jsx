import React, { useState } from "react";
import { motion } from "framer-motion";

const TechnicalSkills = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (skillName) => {
    setImageErrors((prev) => ({ ...prev, [skillName]: true }));
  };

  const skills = [
    {
      name: "AutoCAD",
      logo: "/autocad.png",
      alt: "AutoCAD Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 2L4 4.5v15L6.5 22h11l2.5-2.5v-15L17.5 2h-11zm10 18h-9v-16h9v16z" />
          <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" />
        </svg>
      ),
    },
    {
      name: "3ds Max",
      logo: "/3d.png",
      alt: "3ds Max Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "V-Ray",
      logo: "/vray.png",
      alt: "V-Ray Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      name: "SketchUp",
      logo: "/sketchup.png",
      alt: "SketchUp Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      name: "Lumion",
      logo: "/lumion.svg",
      alt: "Lumion Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      name: "Corona",
      logo: "/corona.png",
      alt: "Corona Renderer Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      name: "Revit",
      logo: "/revit.png",
      alt: "Revit Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
          <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
        </svg>
      ),
    },
    {
      name: "Photoshop",
      logo: "/photoshop.png",
      alt: "Adobe Photoshop Logo",
      fallbackIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 18V6h14v12H5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="technical-skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="technical-skills-title">Technical Skills</h2>
          <div className="technical-skills-divider"></div>
          <p className="technical-skills-description">
            Proficient in industry-leading software for design, visualization,
            and project delivery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="technical-skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="technical-skill-item"
            >
              <div className="technical-skill-logo">
                {imageErrors[skill.name] ? (
                  <div className="skill-fallback-icon">
                    {skill.fallbackIcon}
                  </div>
                ) : (
                  <img
                    src={skill.logo}
                    alt={skill.alt}
                    className="skill-logo-image"
                    onError={() => handleImageError(skill.name)}
                  />
                )}
              </div>
              <span className="technical-skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
