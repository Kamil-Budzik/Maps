import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

import Homepage from 'pages/Homepage/Homepage';
import History from 'pages/History/History';
import Map from 'pages/Map/Map';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;