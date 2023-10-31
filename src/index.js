import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </ChakraProvider>
    </Router>
    <ColorModeScript />
  </React.StrictMode>
);
