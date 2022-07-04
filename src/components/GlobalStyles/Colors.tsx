import { createGlobalStyle } from 'styled-components';

const lightModeColors = `
  --color-active: #3A90C5;
  --color-text: #808080;
  --color-bg-primary: #fff;
`;

const darkModeColors = `
  --color-active: #3AC5B4;
  --color-text: #ffffff;
  --color-bg-primary: #2d2d2d;
`;

const systemMode = `
${lightModeColors}

@media (prefers-color-scheme: dark) {
  ${darkModeColors}
}`;

const Colors = createGlobalStyle<{ mode?: 'system' | 'dark' | 'light' }>`
  :root {
    ${({ mode }) => {
      switch (mode) {
        case 'light':
          return lightModeColors;
        case 'dark':
          return darkModeColors;
        default:
          return systemMode;
      }
    }}
    
  }
`;

export default Colors;
