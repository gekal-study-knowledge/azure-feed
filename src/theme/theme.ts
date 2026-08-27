'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#243A5E', // Azure Deep Navy
        },
        secondary: {
          main: '#0078D4', // Azure Blue
        },
        background: {
          default: '#f3f2f1', // Fluent の中立グレー（Azure Portal 系の淡い背景）
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#ecf0f1', // Light text for dark mode
        },
        secondary: {
          main: '#50E6FF', // Azure Light Blue（暗背景でのアクセント）
        },
        background: {
          default: '#0b1a2b', // Azure 寄りの濃紺
          paper: '#152a42',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.markdown-body': {
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
        },
        '& table': {
          display: 'block',
          width: '100% !important',
          maxWidth: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderCollapse: 'collapse',
          whiteSpace: 'nowrap',
        },
        '& th, & td': {
          padding: '8px 16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Disable MUI v5 dark mode elevation overlay
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
