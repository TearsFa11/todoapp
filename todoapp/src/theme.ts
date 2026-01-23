// src/theme.ts
import type { DefaultTheme } from 'styled-components';

export interface ThemeProps {
  $darkTheme?: boolean;
}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#313131',
    secondary: '#b545c9',
    background: '#7253af',
    accent: '#522C67',
    text: '#B05FDC',
    // другие цвета
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#d6aadf',
    secondary: '#b545c9',
    background: '#c892dd',
    accent: 'orchid',
    text: '#782aa1cb',
    // другие цвета
  },
};
