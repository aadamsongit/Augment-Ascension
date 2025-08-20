import type { Preview } from '@storybook/nextjs-vite'
import { themes } from 'storybook/internal/theming';

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true, // Ensures preview uses dark mode styles
      darkClass: 'dark', // Tailwind's dark mode class
      lightClass: 'light',
      current: 'dark', // Set initial theme to dark
      // Use prefers-color-scheme for auto detection
      classTarget: 'html',
    },
  },
};

export default preview;