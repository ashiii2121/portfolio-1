import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MoodboardSection from "./MoodboardSection";
import ProjectImageGallery from "./ProjectImageGallery";
import projectsData from "../data/projects.json";

const ProjectsGrid = ({
  filter = "all",
  showHeader = true,
  showViewAll = true,
}) => {
  // Sample moodboard data for different room types
  const moodboardData = [
    {
      index: "01",
      title: "BEAUTY PARLOUR",
      images: ["/pr-1.jpg", "/pr1-1.jpg", "/pr1-2.jpg", "/pr1-3.jpg"],
      palette: ["#CFBEAC", "#A68167", "#3D2211", "#A1806F", "#5B372F"],
      projectImages: ["/pr-1.jpg", "/pr1-1.jpg", "/pr1-2.jpg", "/pr1-3.jpg"],
    },
    {
      index: "02",
      title: "BEAUTY PARLOUR",
      images: ["/pr2-1.jpg", "/pr2-2.jpg", "/pr2-3.jpg", "/pr2-4.jpg"],
      palette: ["#847f62", "#8c4147", "#98744f", "#f7e3bd", "#957e7c"],
      projectImages: ["/pr2-1.jpg", "/pr2-2.jpg", "/pr2-3.jpg", "/pr2-4.jpg"],
    },
    {
      index: "03",
      title: "BEDROOM",
      images: [
        "/public/bd1-1.jpg",
        "/public/bd1-2.jpg",
      ],
      palette: ["#41232F", "#9D8873", "#605956", "#DDDEE9", "#A69E9B"],
    },
    {
      index: "04",
      title: "OFFICE",
      images: [
        "/public/OF1-1.jpg",
        "/publIC/OF1-2.jpg",
        "/public/OF1-3.jpg",
        "/public/OF1-4.jpg",
      ],
      palette: ["#E8F4F8", "#B8D4DA", "#7FB3D3", "#4A90A4", "#2E5266"],
    },
    {
      index: "05",
      title: "EXTERIOR",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=400&fit=crop&q=80",
      ],
      palette: ["#2C3E50", "#34495E", "#7F8C8D", "#BDC3C7", "#ECF0F1"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="projects-header"
          >
            <h2 className="projects-title">PROJECTS</h2>
            <p className="projects-description">
              Explore our carefully curated design moodboards showcasing color
              palettes, textures, and inspirational elements for different
              spaces.
            </p>
          </motion.div>
        )}

        {/* Moodboard Sections */}
        <div className="moodboard-container">
          {moodboardData.map((moodboard, index) => (
            <div key={moodboard.index} className="moodboard-section-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MoodboardSection
                  index={moodboard.index}
                  title={moodboard.title}
                  images={moodboard.images}
                  palette={moodboard.palette}
                />
              </motion.div>

              {/* Project Image Space */}
              <div className="project-image-space">
                <ProjectImageGallery
                  images={moodboard.projectImages}
                  title={moodboard.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="projects-view-all"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
