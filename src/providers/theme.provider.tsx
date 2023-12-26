import { ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
export const GlobalTheme = ({ children }: { children: ReactNode }) => {
  const theme = {};
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export const FixedGlobalStyle = createGlobalStyle`
    html.has-scroll-smooth {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
    }
    html{position: relative; height: 100%; }
    html,
    body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
        >iframe{
          z-index: -1 !important;
        }
    }
    *{
        cursor: none;
        box-sizing: border-box;
    }
    #custom-cursor{
        width: 32px;
        height: 32px;
        img{
            width: 100%;
            height: 100%;
        }
    }
`;
