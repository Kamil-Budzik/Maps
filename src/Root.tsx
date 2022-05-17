import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

import Homepage from 'pages/Homepage';
import History from 'pages/History';
import Map from 'pages/Map';

import { store } from 'store';

const Root = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/map" element={<Map />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default Root;