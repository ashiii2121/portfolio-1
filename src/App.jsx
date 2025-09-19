import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProjects from "./pages/admin/Projects";
import AdminSettings from "./pages/admin/Settings";
import ProjectForm from "./components/admin/ProjectForm";

// Import the admin CSS
import "./admin.css";

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
      <AdminAuthProvider>
        <ErrorBoundary>
          <Router>
            <div className="app-container">
              <React.Suspense fallback={<LoadingFallback />}>
                <Routes>
                  
                  {/* Public routes */}
                  <Route
                    path="/"
                    element={
                      <>
                        <Navbar />
                        <Home />
                        <Footer />
                        <ScrollToTop />
                        <FloatingCTA />
                      </>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <>
                        <Navbar />
                        <About />
                        <Footer />
                        <ScrollToTop />
                        <FloatingCTA />
                      </>
                    }
                  />
                  <Route
                    path="/projects"
                    element={
                      <>
                        <Navbar />
                        <Projects />
                        <Footer />
                        <ScrollToTop />
                        <FloatingCTA />
                      </>
                    }
                  />
                  <Route
                    path="/projects/:id"
                    element={
                      <>
                        <Navbar />
                        <Project />
                        <Footer />
                        <ScrollToTop />
                        <FloatingCTA />
                      </>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <>
                        <Navbar />
                        <Contact />
                        <Footer />
                        <ScrollToTop />
                        <FloatingCTA />
                      </>
                    }
                  />

                  {/* Admin routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<AdminDashboard />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="projects" element={<AdminProjects />} />
                    <Route path="projects/new" element={<ProjectForm />} />
                    <Route path="projects/edit/:id" element={<ProjectForm />} />
                    <Route path="settings" element={<AdminSettings />} />
                  </Route>
                </Routes>
              </React.Suspense>
            </div>
          </Router>
        </ErrorBoundary>
      </AdminAuthProvider>
    </ThemeProvider>
  );
}

export default App;
