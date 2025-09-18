import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminLogin from "./pages/admin/Login";

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

// Simple test component
const TestComponent = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h2>Test Route Working</h2>
    <p>If you can see this, routing is working correctly.</p>
  </div>
);

// Simple Home component
const Home = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h2>Home Page</h2>
    <p>Welcome to the home page.</p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <AdminAuthProvider>
        <ErrorBoundary>
          <Router>
            <div className="app-container">
              <React.Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Test routes */}
                  <Route path="/test" element={<TestComponent />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
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
