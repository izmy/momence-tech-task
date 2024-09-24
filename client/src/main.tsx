import React from 'react';
import { createRoot } from 'react-dom/client';

export const SETTINGS = {
  environment: import.meta.env.VITE_ENVIRONMENT ?? 'development',
  backendApiUrl: import.meta.env.VITE_BACKEND_API_URL ?? 'http://localhost:3000',
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<h1>Hello, world!</h1>
  </React.StrictMode>
);
