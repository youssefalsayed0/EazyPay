import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; //
import 'bs-brain/components/navbars/navbar-3/assets/css/navbar-3.css'; // Adjust the path as necessary
import 'bs-brain/components/sidebars/sidebar-1/assets/css/sidebar-1.css'; // Adjust the path as necessary
import './index.css' 
import './media.css' 
import 'bootstrap/dist/js/bootstrap.bundle.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
