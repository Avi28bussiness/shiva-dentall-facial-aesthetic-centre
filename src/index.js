import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom'; 
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
