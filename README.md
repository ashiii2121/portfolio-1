# Interior Design Portfolio

A modern, scroll-driven portfolio website for interior designers, built with React 18 + Vite. Features elegant animations, responsive design, and a clean aesthetic inspired by high-end design portfolios.

## ✨ Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for page transitions and scroll-triggered reveals
- **Responsive Design**: Mobile-first approach (320px to 1440px+)
- **Image Optimization**: Lazy loading with blur placeholders
- **Interactive Gallery**: Swiper.js carousels with lightbox functionality
- **Performance Optimized**: Fast loading with modern web practices
- **Accessibility**: Keyboard navigation and ARIA labels

## 🎨 Design System

- **Colors**:
  - Sand: `#E8DED1`
  - Ivory: `#FAF9F6`
  - Terracotta: `#C36F4B`
  - Charcoal: `#222222`
- **Typography**:
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

## 🚀 Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Fixed navigation with backdrop blur
│   ├── Footer.jsx      # Footer with social links
│   ├── Hero.jsx        # Full-viewport hero section
│   ├── ProjectCard.jsx # Individual project cards
│   ├── ProjectsGrid.jsx # Masonry-style project grid
│   ├── AboutSection.jsx # About me with portrait
│   ├── ContactForm.jsx  # Contact form with validation
│   └── ScrollToTop.jsx  # Scroll to top button
├── pages/              # Page components
│   ├── Home.jsx        # Main landing page
│   ├── Project.jsx     # Individual project details
│   └── Contact.jsx     # Contact page
├── data/               # Static data
│   └── projects.json   # Project information
└── assets/             # Images and static assets
```

## 🛠 Technologies Used

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper.js** - Touch slider component
- **React Lazy Load Image** - Image lazy loading
- **Simple React Lightbox** - Image lightbox

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🎯 Key Components

### Hero Section

- Full-viewport cover image with overlay
- Animated title with upward slide effect
- Call-to-action buttons with hover effects

### Projects Grid

- Masonry-style layout
- Hover animations (105% scale)
- Project info overlay on hover
- Smooth transitions to project pages

### Project Detail Page

- Hero banner with project title
- Facts bar (Year, Area, Style, Role)
- Full-bleed image carousel
- Two-column text layout
- Client testimonial card

### Contact Form

- Floating label inputs
- HTML5 validation
- Split-screen layout with map placeholder
- Smooth form animations

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.json` to add new projects:

```json
{
  "id": 6,
  "title": "Your Project Title",
  "location": "City, State",
  "year": "2024",
  "area": "1,500 sq ft",
  "style": "Modern",
  "thumbnail": "image-url",
  "images": ["image1-url", "image2-url"],
  "brief": "Project description...",
  "role": "Your role",
  "testimonial": "Client quote"
}
```

### Updating Colors

Modify the color palette in `tailwind.config.js`:

```js
colors: {
  sand: '#E8DED1',
  ivory: '#FAF9F6',
  terracotta: '#C36F4B',
  charcoal: '#222222',
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ for interior designers who want to showcase their work beautifully.
