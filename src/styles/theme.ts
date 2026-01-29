// Esri Theme - Centralized Design Tokens
// 이 파일은 esri_theme.json을 기반으로 생성되었습니다.

export const theme = {
  colors: {
    primary: {
      blue: '#007AC2',
      darkBlue: '#0079C1',
      lightBlue: '#00A9E0',
      hover: '#005A8F',
    },
    secondary: {
      green: '#6BBE4C',
      orange: '#F89927',
      purple: '#8B4C9E',
    },
    neutral: {
      black: '#000000',
      darkGray: '#323232',
      mediumGray: '#6E6E6E',
      lightGray: '#EFEFEF',
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F8F8',
      dark: '#323232',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Avenir Next', Arial, Helvetica, sans-serif",
      heading: "'Avenir Next', Arial, Helvetica, sans-serif",
      body: "'Avenir Next', Arial, Helvetica, sans-serif",
    },
    fontSize: {
      h1: '48px',
      h2: '36px',
      h3: '28px',
      h4: '24px',
      h5: '20px',
      body: '16px',
      small: '14px',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
  },
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  layout: {
    maxWidth: '1440px',
    containerPadding: '24px',
    gridGap: '24px',
    columns: 12,
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
} as const;

export type Theme = typeof theme;
