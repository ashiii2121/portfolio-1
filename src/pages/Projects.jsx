import { useState } from "react";
import { motion } from "framer-motion";
import ProjectsGrid from "../components/ProjectsGrid";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "interior", name: "Interior" },
    { id: "exterior", name: "Exterior" },
  ];

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-playfair font-bold mb-6"
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl font-inter font-light text-sand max-w-2xl mx-auto"
          >
            Explore our portfolio of thoughtfully designed spaces that blend
            functionality with aesthetic excellence.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-terracotta text-ivory shadow-lg"
                    : "bg-ivory text-charcoal hover:bg-terracotta hover:text-ivory"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid
        filter={activeFilter}
        showHeader={false}
        showViewAll={false}
      />

      {/* Stats Section */}
      <section className="py-16 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-terracotta mb-2">
                20+
              </div>
              <div className="text-sand font-medium">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-terracotta mb-2">
                100%
              </div>
              <div className="text-sand font-medium">Client Satisfaction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-terracotta mb-2">
                1+
              </div>
              <div className="text-sand font-medium">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-terracotta mb-2">
                5+
              </div>
              <div className="text-sand font-medium">Design Awards</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Every project follows a carefully crafted process to ensure
              exceptional results and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your vision, needs, and lifestyle through detailed consultation.",
              },
              {
                step: "02",
                title: "Concept",
                description:
                  "Developing initial design concepts and mood boards that capture your style.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "Creating detailed plans, 3D visualizations, and material specifications.",
              },
              {
                step: "04",
                title: "Implementation",
                description:
                  "Managing the entire project execution to bring your vision to life.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-terracotta text-ivory rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a space that perfectly
              reflects your style and meets your needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-terracotta text-ivory px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-charcoal"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
