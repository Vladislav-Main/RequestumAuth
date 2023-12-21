import {ThemeProvider} from 'styled-components';
import React from 'react';
import {ThemeProps} from './types';

const theme = {
  colors: {
    main: '#EB0057',
    grey: '#262727',
    lightGrey: '#818181',
    text: '#FFFFFF',
  },
  fonts: ['Montserrat'],
  fontSizes: {
    xs: '11px',
    s: '12px',
    m: '16px',
    l: '18px',
  },
};

const Theme = ({children}: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
