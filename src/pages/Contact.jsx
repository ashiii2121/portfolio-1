import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
            Let's Work Together
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl font-inter font-light text-sand max-w-2xl mx-auto"
          >
            Ready to transform your space? I'd love to hear about your project 
            and discuss how we can bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Additional Info Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3">
                Initial Consultation
              </h3>
              <p className="text-charcoal/80 font-inter">
                We'll discuss your vision, needs, and budget to understand your project goals.
              </p>
            </motion.div>

            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3">
                Design Development
              </h3>
              <p className="text-charcoal/80 font-inter">
                I'll create detailed plans, mood boards, and 3D visualizations of your space.
              </p>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3">
                Project Implementation
              </h3>
              <p className="text-charcoal/80 font-inter">
                I'll oversee the entire process to ensure your vision comes to life perfectly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
