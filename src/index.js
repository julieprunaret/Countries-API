import { ColorModeScript, Grid, GridItem } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.500">
          <GridItem
            as="aside"
            colSpan={{ base: 6, lg: 2, xl: 1 }}
            bg="purple.400"
            minHeight={{ lg: '100vh' }}
            p={{ base: '20px', lg: '30px' }}
          >
            <Sidebar />
          </GridItem>
          <GridItem
            as="main"
            colSpan={{ base: 6, lg: 4, xl: 5 }}
            bg="gray.50"
            p="40px"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </GridItem>
        </Grid>
      </ChakraProvider>
    </Router>
    <ColorModeScript />
  </React.StrictMode>
);
