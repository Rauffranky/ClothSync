import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import './index.css';
import AppRoutes from './routes/index.jsx';
import './i18n';
import ThemeProvider from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <AppRoutes />
        <Toaster position="bottom-right" />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>,
);
