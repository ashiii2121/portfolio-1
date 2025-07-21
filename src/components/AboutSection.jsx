import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = () => {
  return (
    <section id="about" className="about-section-enhanced">
      {/* Background Elements */}
      <div className="about-background-elements">
        <div className="about-bg-circle-1"></div>
        <div className="about-bg-circle-2"></div>
        <div className="about-bg-pattern"></div>
      </div>

      <div className="container">
        <div className="about-grid-enhanced">
          {/* Enhanced Portrait Section */}
          <div className="about-image-enhanced">
            <div className="about-image-wrapper">
              {/* Main Image Container */}
              <div className="about-image-container-enhanced">
                <LazyLoadImage
                  src="/zunu1.jpg"
                  alt="Interior Designer Portrait"
                  className="about-portrait-image-enhanced"
                  effect="opacity"
                  placeholderSrc=""
                />

                {/* Decorative Frame */}
                <div className="about-image-frame"></div>

                {/* Gradient Overlay */}
                <div className="about-image-gradient"></div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="about-achievement-card about-achievement-1">
                <div className="achievement-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="achievement-content">
                  <div className="achievement-number">20+</div>
                  <div className="achievement-label">Projects</div>
                </div>
              </div>

              <div className="about-achievement-card about-achievement-2">
                <div className="achievement-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="achievement-content">
                  <div className="achievement-number">1+</div>
                  <div className="achievement-label">Years</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="about-decorative-dots"></div>
              <div className="about-decorative-line"></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="about-content-enhanced">
            {/* Header with Name and Badge */}
            <div className="about-header">
              <div className="about-name-section">
                <h1 className="about-name">Ayshath Zunafa M</h1>
              </div>

              <div className="about-badge">
                <span className="about-badge-text">
                  Interior-Architectur Designer cum 3D Visualizer
                </span>
              </div>

              <h2 className="about-title-enhanced">
                Crafting Beautiful
                <span className="about-title-highlight"> Spaces</span>
              </h2>

              <div className="about-divider-enhanced">
                <div className="divider-line"></div>
                <div className="divider-dot"></div>
                <div className="divider-line"></div>
              </div>
            </div>

            {/* Enhanced Text Content */}
            <div className="about-text-content">
              <p className="about-text-enhanced about-text-intro">
                With over a decade of experience in interior design, I
                specialize in creating spaces that seamlessly blend
                functionality with aesthetic beauty. My approach centers on
                understanding each client's unique lifestyle and translating
                their vision into reality.
              </p>

              <p className="about-text-enhanced">
                From minimalist modern apartments to warm family homes, I
                believe that great design should enhance daily life while
                reflecting personal style. Every project is an opportunity to
                create something truly special.
              </p>

              {/* Quote Section */}
              <blockquote className="about-quote">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  Design is not just what it looks like and feels like. Design
                  is how it works.
                </p>
                <div className="quote-author">— My Design Philosophy</div>
              </blockquote>
            </div>

            {/* Enhanced Skills Section */}
            <div className="about-skills-enhanced">
              <h3 className="skills-title">Core Expertise</h3>
              <div className="skills-grid">
                <div className="skill-item-enhanced">
                  <div className="skill-icon">🏠</div>
                  <span className="skill-name">Space Planning</span>
                </div>
                <div className="skill-item-enhanced">
                  <div className="skill-icon">🎨</div>
                  <span className="skill-name">Color Theory</span>
                </div>
                <div className="skill-item-enhanced">
                  <div className="skill-icon">🪑</div>
                  <span className="skill-name">Furniture Selection</span>
                </div>
                <div className="skill-item-enhanced">
                  <div className="skill-icon">📋</div>
                  <span className="skill-name">Project Management</span>
                </div>
                <div className="skill-item-enhanced">
                  <div className="skill-icon">📐</div>
                  <span className="skill-name">3D Visualization</span>
                </div>
                <div className="skill-item-enhanced">
                  <div className="skill-icon">🌱</div>
                  <span className="skill-name">Sustainable Design</span>
                </div>
              </div>
            </div>

            {/* Enhanced Action Button */}
            <div className="about-actions">
              <button
                className="btn-enhanced btn-primary-enhanced"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CV.pdf";
                  link.download = "Ayshath_Zunafa_M_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <span className="btn-text">Download CV</span>
                <div className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="btn-shine"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
