import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Import components with error boundaries
const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Project = React.lazy(() => import("./pages/Project"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));
const FloatingCTA = React.lazy(() => import("./components/FloatingCTA"));

// Simple fallback component
const LoadingFallback = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <p>Loading...</p>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <p>Error: {this.state.error?.message}</p>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="app-container">
            <React.Suspense fallback={<LoadingFallback />}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
              <ScrollToTop />
              <FloatingCTA />
            </React.Suspense>
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
