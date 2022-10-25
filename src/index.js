import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/utils/theme'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </ThemeProvider>
);
