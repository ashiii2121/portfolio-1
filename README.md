<div align="center">
  <img src="/public/logos/README.md" alt="Zunafa Logo" width="120" />
  <h1>✨ Zunafa Interior Design Portfolio ✨</h1>
  <p><em>A modern, scroll-driven portfolio website for interior designers</em></p>
  
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![Three.js](https://img.shields.io/badge/Three.js-0.177-black?style=for-the-badge&logo=threedotjs)](https://threejs.org/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-pink?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  
  <br/>
  
  [**Live Demo**](#-live-demo) • 
  [**Features**](#-features) • 
  [**Tech Stack**](#-tech-stack) • 
  [**Quick Start**](#-quick-start) • 
  [**Screenshots**](#-screenshots)
  
  <img src="https://user-images.githubusercontent.com/54733225/147942241-9b5c6a0d-9c4f-4f7d-9c6d-8d8b3e9c9b5a.png" alt="Zunafa Interior Design" width="100%" />
</div>

## 🌟 About

**Zunafa** is a stunning interior design portfolio website built with modern web technologies. It features elegant animations, responsive design, and a clean aesthetic inspired by high-end design portfolios. The site showcases interior design projects with immersive 3D elements and interactive galleries.

## 🚀 Live Demo

Check out the live demo: [Zunafa Portfolio](https://zunafa.com)

## ✨ Features

### 🎨 Design & UI

- **Modern Aesthetic**: Clean, minimalist design with elegant typography
- **Responsive Layout**: Mobile-first approach (320px to 1440px+)
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Smooth Animations**: Framer Motion for page transitions and scroll-triggered reveals
- **3D Graphics**: Interactive 3D elements using Three.js and React Three Fiber

### 🖼 Gallery & Media

- **Interactive Gallery**: Swiper.js carousels with lightbox functionality
- **Image Optimization**: Lazy loading with blur placeholders
- **Moodboards**: Curated design moodboards with color palettes
- **Project Showcase**: Detailed project pages with before/after views

### ⚡ Performance

- **Fast Loading**: Optimized assets and code splitting
- **SEO Friendly**: Meta tags and semantic HTML
- **PWA Support**: Installable as a Progressive Web App
- **Accessibility**: Keyboard navigation and ARIA labels

## 🛠 Tech Stack

### Core Technologies

| Technology                                  | Purpose                   |
| ------------------------------------------- | ------------------------- |
| [React 19](https://reactjs.org/)            | UI Library with hooks     |
| [Vite 6](https://vitejs.dev/)               | Build tool and dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing       |
| [Three.js](https://threejs.org/)            | 3D graphics library       |
| [GSAP](https://greensock.com/gsap/)         | Advanced animations       |

### UI & Styling

| Technology                                                                          | Purpose                     |
| ----------------------------------------------------------------------------------- | --------------------------- |
| [Framer Motion](https://www.framer.com/motion/)                                     | Animation library           |
| [Tailwind CSS](https://tailwindcss.com/)                                            | Utility-first CSS framework |
| [Swiper.js](https://swiperjs.com/)                                                  | Touch slider component      |
| [React Lazy Load Image](https://github.com/Aljullu/react-lazy-load-image-component) | Image lazy loading          |

### Development Tools

| Tool                             | Purpose             |
| -------------------------------- | ------------------- | --------------- |
| [ESLint](https://eslint.org/)    | Code linting        |
| [Prettier](https://prettier.io/) | Code formatting/)   | Code formatting |
| [Vercel](https://vercel.com/)    | Deployment platform |

## 🎨 Design System

### Color Palette

```css
:root {
  --sand: #e8ded1; /* Primary background */
  --ivory: #faf9f6; /* Secondary background */
  --terracotta: #c36f4b; /* Accent color */
  --charcoal: #222222; /* Text color */
}
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/zunafa.git
cd zunafa
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start development server**

```bash
npm run dev
# or
yarn dev
```

4. **Build for production**

```bash
npm run build
# or
yarn build
```

5. **Preview production build**

```bash
npm run preview
# or
yarn preview
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Fixed navigation with backdrop blur
│   ├── Footer.jsx      # Footer with social links
│   ├── Hero.jsx        # Full-viewport hero section
│   ├── ProjectsGrid.jsx # Masonry-style project grid
│   ├── AboutSection.jsx # About me with portrait
│   └── ContactForm.jsx  # Contact form with validation
├── pages/              # Page components
│   ├── Home.jsx        # Main landing page
│   ├── Project.jsx     # Individual project details
│   └── Contact.jsx     # Contact page
├── data/               # Static data
│   └── projects.json   # Project information
└── assets/             # Images and static assets
```

## 📱 Responsive Breakpoints

| Device        | Screen Width    |
| ------------- | --------------- |
| Mobile        | 320px - 767px   |
| Tablet        | 768px - 1023px  |
| Desktop       | 1024px - 1439px |
| Large Desktop | 1440px+         |

## 📸 Screenshots

### Home Page

![Home Page](https://user-images.githubusercontent.com/54733225/147942241-9b5c6a0d-9c4f-4f7d-9c6d-8d8b3e9c9b5a.png)

### Project Gallery

![Project Gallery](https://user-images.githubusercontent.com/54733225/147942241-9b5c6a0d-9c4f-4f7d-9c6d-8d8b3e9c9b5a.png)

### 3D Contact Section

![3D Contact](https://user-images.githubusercontent.com/54733225/147942241-9b5c6a0d-9c4f-4f7d-9c6d-8d8b3e9c9b5a.png)

### Dark Mode

![Dark Mode](https://user-images.githubusercontent.com/54733225/147942241-9b5c6a0d-9c4f-4f7d-9c6d-8d8b3e9c9b5a.png)

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [React](https://reactjs.org/) for the UI library
- [Three.js](https://threejs.org/) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vite](https://vitejs.dev/) for the build tool
- All the open source libraries and tools that made this project possible

## 📞 Contact

For any inquiries, please reach out to:

**Zunafa Interior Design**

- Website: [zunafa.com](https://zunafa.com)
- Email: hello@zunafa.com
- Instagram: [@zunafa_design](https://instagram.com/zunafa_design)

---

<div align="center">
  <sub>Built with ❤️ for interior designers who want to showcase their work beautifully.</sub>
</div>
