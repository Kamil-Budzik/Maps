import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello</h1>
    </ThemeProvider>
  );
};

export default Root;