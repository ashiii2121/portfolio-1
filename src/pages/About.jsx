import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import TechnicalSkills from '../components/TechnicalSkills';

const About = () => {
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
            About Me
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl font-inter font-light text-sand max-w-2xl mx-auto"
          >
            Passionate about creating beautiful, functional spaces that reflect 
            your unique style and enhance your daily life.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />
      
      {/* Technical Skills */}
      <TechnicalSkills />

      {/* Experience Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-6">
              Experience & Education
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              My journey in interior design has been shaped by continuous learning 
              and hands-on experience in creating exceptional spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-8">
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-terracotta pl-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    Senior Interior Designer
                  </h4>
                  <p className="text-terracotta font-medium mb-2">
                    Design Studio Pro • 2020 - Present
                  </p>
                  <p className="text-charcoal/80">
                    Leading residential and commercial design projects, managing 
                    client relationships, and overseeing project implementation 
                    from concept to completion.
                  </p>
                </div>

                <div className="border-l-4 border-terracotta pl-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    Interior Designer
                  </h4>
                  <p className="text-terracotta font-medium mb-2">
                    Creative Spaces Inc. • 2018 - 2020
                  </p>
                  <p className="text-charcoal/80">
                    Developed design concepts, created detailed drawings and 
                    specifications, and collaborated with contractors and vendors.
                  </p>
                </div>

                <div className="border-l-4 border-terracotta pl-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    Junior Designer
                  </h4>
                  <p className="text-terracotta font-medium mb-2">
                    Modern Living Designs • 2016 - 2018
                  </p>
                  <p className="text-charcoal/80">
                    Assisted senior designers with space planning, material 
                    selection, and client presentations for residential projects.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-8">
                Education & Certifications
              </h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-terracotta pl-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    Bachelor of Interior Design
                  </h4>
                  <p className="text-terracotta font-medium mb-2">
                    Design Institute • 2012 - 2016
                  </p>
                  <p className="text-charcoal/80">
                    Comprehensive study of design principles, space planning, 
                    color theory, and sustainable design practices.
                  </p>
                </div>

                <div className="border-l-4 border-terracotta pl-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    NCIDQ Certification
                  </h4>
                  <p className="text-terracotta font-medium mb-2">
                    National Council for Interior Design • 2017
                  </p>
                  <p className="text-charcoal/80">
                    Professional certification demonstrating competency in 
                    interior design practice and knowledge.
                  </p>
                </div>

                <div className="border-l-4 border-terracotta pl-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-2">
                    Sustainable Design Certificate
                  </h4>
                  <p className="text-terracotta font-medium mb-2">
                    Green Building Institute • 2019
                  </p>
                  <p className="text-charcoal/80">
                    Specialized training in environmentally conscious design 
                    practices and sustainable material selection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-8">
              Design Philosophy
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              I believe that great design is not just about creating beautiful spaces, 
              but about understanding how people live, work, and interact within those 
              spaces. Every project is an opportunity to enhance someone's daily 
              experience through thoughtful design decisions.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              My approach combines functionality with aesthetics, sustainability with 
              style, and innovation with timeless design principles. I work closely 
              with each client to understand their unique needs, lifestyle, and vision, 
              ensuring that every space I design is a true reflection of who they are.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
