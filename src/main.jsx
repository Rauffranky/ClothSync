import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import './index.css';
import AppRoutes from './routes/index.jsx';
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  </StrictMode>,
);
