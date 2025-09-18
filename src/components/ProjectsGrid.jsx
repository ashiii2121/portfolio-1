import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MoodboardSection from "./MoodboardSection";
import ProjectImageGallery from "./ProjectImageGallery";
import ExpandedGallery from "./ExpandedGallery";
import projectsData from "../data/projects.json";

const ProjectsGrid = ({
  filter = "all",
  showHeader = true,
  showViewAll = true,
}) => {
  // Create refs for each section to enable navigation
  const sectionRefs = useRef({});

  // Function to scroll to a specific section
  const scrollToSection = (sectionIndex) => {
    const targetRef = sectionRefs.current[sectionIndex];
    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // Filter projects based on category
  const getFilteredProjects = () => {
    switch (filter) {
      case "interior":
        return projectsData.filter(
          (project) => project.category === "interior"
        );
      case "exterior":
        return projectsData.filter(
          (project) => project.category === "exterior"
        );
      case "all":
      default:
        return projectsData;
    }
  };

  const filteredProjects = getFilteredProjects();

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
        "/bd1-1.jpg",
        "/bd1-2.jpg",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop&q=80",
      ],
      palette: ["#41232F", "#9D8873", "#605956", "#DDDEE9", "#A69E9B"],
      projectImages: [
        "/bd1-1.jpg",
        "/bd1-2.jpg",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=80",
      ],
    },
    {
      index: "04",
      title: "OFFICE",
      images: ["/OF1-1.jpg", "/OF1-2.jpg", "/OF1-3.jpg", "/OF1-4.jpg"],
      palette: ["#E8F4F8", "#B8D4DA", "#7FB3D3", "#4A90A4", "#2E5266"],
      projectImages: ["/OF1-1.jpg", "/OF1-2.jpg", "/OF1-3.jpg", "/OF1-4.jpg"],
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
      projectImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&q=80",
      ],
    },
  ];

  // Filter moodboard data based on the filter prop
  const getFilteredData = () => {
    switch (filter) {
      case "interior":
        // Return projects 1-4 (indices 01-04) - all interior projects
        return moodboardData.filter((item) =>
          ["01", "02", "03", "04"].includes(item.index)
        );
      case "exterior":
        // Return only exterior project (index 05)
        return moodboardData.filter((item) => item.index === "05");
      case "all":
      default:
        // Return all projects
        return moodboardData;
    }
  };

  const filteredMoodboardData = getFilteredData();

  return (
    <section
      id="projects"
      className="projects-section"
      role="main"
      aria-label="Interior design projects showcase"
    >
      <div className="container">
        {/* Section Header */}
        {showHeader && (
          <div className="projects-header">
            <h2 className="projects-title" id="projects-heading">
              PROJECTS
            </h2>
            <p
              className="projects-description"
              aria-describedby="projects-heading"
            >
              Explore our carefully curated design moodboards showcasing color
              palettes, textures, and inspirational elements for different
              spaces.
            </p>
          </div>
        )}

        {/* Projects Display - Using actual project data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  {project.location} • {project.year}
                </p>
                <p className="text-charcoal/80 mb-4">
                  {project.brief.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-terracotta font-medium">
                    {project.style}
                  </span>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-terracotta hover:underline font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Moodboard Sections */}
        <div className="moodboard-container">
          {filteredMoodboardData.map((moodboard, index) => (
            <React.Fragment key={moodboard.index}>
              <div
                className="moodboard-section-wrapper"
                ref={(el) => (sectionRefs.current[moodboard.index] = el)}
              >
                <div>
                  <MoodboardSection
                    index={moodboard.index}
                    title={moodboard.title}
                    images={moodboard.images}
                    palette={moodboard.palette}
                    onImageClick={() => {
                      // Navigate to interior sections when exterior images are clicked
                      if (moodboard.title === "EXTERIOR") {
                        scrollToSection("01"); // Navigate to first interior section
                      } else {
                        // Navigate to exterior when interior images are clicked
                        scrollToSection("05"); // Navigate to exterior section
                      }
                    }}
                  />
                </div>

                {/* Project Image Space */}
                <div
                  className={`project-image-space ${
                    moodboard.title === "EXTERIOR" ? "exterior" : ""
                  } ${moodboard.title === "BEDROOM" ? "bedroom" : ""}`}
                  style={{
                    background: "#2a1d14", // Same as moodboard background
                    color: "#d1c2b2", // Same as moodboard text color
                  }}
                >
                  <ProjectImageGallery
                    images={moodboard.projectImages}
                    title={moodboard.title}
                    palette={moodboard.palette}
                    onImageClick={() => {
                      // Navigate to interior sections when exterior images are clicked
                      if (moodboard.title === "EXTERIOR") {
                        scrollToSection("01"); // Navigate to first interior section
                      } else {
                        // Navigate to exterior when interior images are clicked
                        scrollToSection("05"); // Navigate to exterior section
                      }
                    }}
                  />
                </div>
              </div>

              {/* Color Separator between projects */}
              {index < filteredMoodboardData.length - 1 && (
                <div
                  className="project-separator"
                  style={{
                    background: `linear-gradient(90deg,
                      ${moodboard.palette[0]}40,
                      ${moodboard.palette[1]}30,
                      ${filteredMoodboardData[index + 1]?.palette[0]}30,
                      ${filteredMoodboardData[index + 1]?.palette[1]}40
                    )`,
                  }}
                >
                  <div className="separator-pattern">
                    {moodboard.palette.slice(0, 3).map((color, i) => (
                      <div
                        key={i}
                        className="separator-dot"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Transition Separator before Complete Works - Only show for all or exterior */}
        {(filter === "all" || filter === "exterior") && (
          <div className="complete-works-separator">
            <div className="separator-line" />
            <div className="separator-content">
              <div className="separator-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="separator-title">EXTERIOR</h3>
              <p className="separator-description">
                Explore our complete collection of interior design projects
              </p>
            </div>
          </div>
        )}

        {/* Expanded Gallery Section - After Exterior - Only show for all or exterior */}
        {(filter === "all" || filter === "exterior") && (
          <div className="complete-works-section">
            <ExpandedGallery
              title="COMPLETE WORKS"
              palette={["#2C3E50", "#34495E", "#7F8C8D", "#BDC3C7", "#ECF0F1"]}
            />
          </div>
        )}

        {/* View All Projects Button */}
        {showViewAll && (
          <div className="projects-view-all">
            <Link to="/projects">
              <button className="btn btn-outline">View All Projects</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
