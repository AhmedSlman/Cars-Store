import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CarsProvider } from './context/CarsContext';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <CarsProvider>
        <HomePage />
      </CarsProvider>
    </ThemeProvider>
  );
}

export default App;