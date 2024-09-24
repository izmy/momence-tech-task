import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyle';

export const SETTINGS = {
  environment: import.meta.env.VITE_ENVIRONMENT ?? 'development',
  backendApiUrl: import.meta.env.VITE_BACKEND_API_URL ?? 'http://localhost:3000',
};

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
