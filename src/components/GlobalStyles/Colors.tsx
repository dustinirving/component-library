import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-active: #3A90C5;
    --color-text: #808080;
    --color-bg-primary: #fff;

    @media (prefers-color-scheme: dark) {
      --color-active: #3AC5B4;
      --color-text: #ffffff;
      --color-bg-primary: #2d2d2d;
    }
  }
`;

export default Colors;
