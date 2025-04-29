import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/planets-fact-site/dist">
      <App />
    </HashRouter>
  </StrictMode>,
);
