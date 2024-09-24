import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    :root {
      --indigo: oklch(56% 0.191 280);
      --indigo-light: oklch(64% 0.152 282);
      --pink: oklch(0.7 0.3 350);
      --pink-light: oklch(0.9 0.1 350);

      font-family: Inter, sans-serif;
    }

    body {
      background-color: var(--indigo);
    }
`;
