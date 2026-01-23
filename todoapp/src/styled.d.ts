// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      // добавь здесь все цвета, которые используешь
      background?: string;
      text?: string;
      accent?: string;
    };
    // можно добавить другие разделы
    // spacing?: { [key: string]: string };
    // fonts?: { [key: string]: string };
  }
}
