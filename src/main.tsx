import React from 'react';
import { createRoot } from 'react-dom';
import App from '../src/App';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
