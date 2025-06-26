import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TechnicalSkills from "../components/TechnicalSkills";
import ProjectsGrid from "../components/ProjectsGrid";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <main>
      <Hero />

      <section id="about">
        <AboutSection />
      </section>

      {/* Featured Projects Section */}
      <section id="projects">
        <ProjectsGrid showHeader={true} showViewAll={true} filter="all" />
      </section>

      {/* Technical Skills Section */}
      <section id="skills">
        <TechnicalSkills />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </main>
  );
};

export default Home;
