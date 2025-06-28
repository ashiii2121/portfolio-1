import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { formatWhatsAppMessage, createWhatsAppURL } from "../config/whatsapp";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to send message directly to WhatsApp
  const sendToWhatsApp = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending to WhatsApp");
      return;
    }

    const message = formatWhatsAppMessage(formData);
    const whatsappURL = createWhatsAppURL(message);

    window.open(whatsappURL, "_blank");

    // Show success message and clear form
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const sectionRef = useRef();
  const titleRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;

    if (!section || !title || !form) return;

    // GSAP Timeline for entrance animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title
    tl.fromTo(
      title,
      {
        y: 100,
        opacity: 0,
        rotationX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Animate form elements
    const formElements = form.querySelectorAll(".form-element");
    tl.fromTo(
      formElements,
      {
        x: -100,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    );

    // Floating animation for form inputs
    gsap.to(form.querySelectorAll("input, textarea"), {
      y: "random(-5, 5)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 1,
        from: "random",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={sectionRef} className="contact-section-enhanced">
      <div className="container">
        {/* Enhanced Title with GSAP Animation */}
        <div ref={titleRef} className="contact-title-container">
          <h2 className="contact-title-3d">Get In Touch</h2>
          <div className="contact-subtitle">
            Let's create something amazing together
          </div>
        </div>

        <div className="contact-grid-enhanced">
          {/* Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>

              <div className="contact-info-item-enhanced">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>zunafa.muhammed@gmail.com</span>
              </div>

              <div className="contact-info-item-enhanced">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>+91 9746582150</span>
              </div>

              <div className="contact-info-item-enhanced">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Kasaragod, Ind</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            ref={formRef}
            className="contact-form-container-enhanced"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3 className="contact-form-title-enhanced">Send us a message</h3>
              <div className="form-decoration"></div>
            </div>

            <div className="contact-form-enhanced">
              <motion.div
                className="form-group-enhanced form-element"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input-enhanced"
                />
                <div className="input-border"></div>
              </motion.div>

              <motion.div
                className="form-group-enhanced form-element"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input-enhanced"
                />
                <div className="input-border"></div>
              </motion.div>

              <motion.div
                className="form-group-enhanced form-element"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="form-textarea-enhanced"
                ></textarea>
                <div className="input-border"></div>
              </motion.div>

              <motion.button
                type="button"
                onClick={sendToWhatsApp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="whatsapp-btn-enhanced form-element"
              >
                <span className="btn-text">
                  <svg
                    className="whatsapp-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Send via WhatsApp
                </span>
                <div className="btn-background whatsapp-bg"></div>
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "back.out(1.7)" }}
                  className="success-message-enhanced"
                >
                  <div className="success-icon">✓</div>
                  <span>Thank you! Your message has been sent.</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
