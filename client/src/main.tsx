import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { routeTree } from './routeTree.gen';
import { GlobalStyle } from './styles/GlobalStyle';

export const SETTINGS = {
  environment: import.meta.env.VITE_ENVIRONMENT ?? 'development',
  backendApiUrl: import.meta.env.VITE_BACKEND_API_URL ?? 'http://localhost:3000',
};

// Create a query client
const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({ routeTree, context: { queryClient } });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

let container: HTMLElement | null = null;

document.addEventListener('DOMContentLoaded', () => {
  if (!container) {
    container = document.getElementById('root') as HTMLElement;
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  }
});
