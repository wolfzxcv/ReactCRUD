import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import WholePage from './components/WholePage';
import AppContextProvider from './context/AppContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <WholePage />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
