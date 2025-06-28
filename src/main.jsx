import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { register, setupNetworkMonitoring, setupPerformanceMonitoring } from './utils/serviceWorker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register service worker for performance and offline functionality
register({
  onSuccess: (registration) => {
    console.log('Service Worker registered successfully for offline functionality');
  },
  onUpdate: (registration) => {
    console.log('New content available, please refresh the page');
    // You could show a notification to the user here
  }
});

// Setup performance and network monitoring
setupNetworkMonitoring();
setupPerformanceMonitoring();
