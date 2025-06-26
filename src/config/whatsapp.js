// WhatsApp Configuration
// Replace the number below with your actual WhatsApp number
// Format: Country code + phone number (no + sign, no spaces)
// Example: For +1 234 567 8900, use "12345678900"

export const WHATSAPP_CONFIG = {
  // Your WhatsApp number (replace with your actual number)
  phoneNumber: "919746582150", // Replace this with your WhatsApp number
  
  // Message template for contact form submissions
  messageTemplate: {
    header: "*New Contact Form Submission*",
    footer: "_Sent from Zunafa Website_",
    separator: "\n\n"
  },
  
  // Business information (optional)
  businessInfo: {
    name: "Zunafa",
    website: ""
  }
};

// Function to format WhatsApp message
export const formatWhatsAppMessage = (formData) => {
  const { header, footer, separator } = WHATSAPP_CONFIG.messageTemplate;
  
  return `${header}${separator}` +
    `*Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Message:* ${formData.message}${separator}` +
    `${footer}`;
};

// Function to create WhatsApp URL
export const createWhatsAppURL = (message) => {
  const { phoneNumber } = WHATSAPP_CONFIG;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
