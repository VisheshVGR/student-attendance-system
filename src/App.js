import React from 'react';
import './App.css';


import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from "./Page/Dashboard/Dashboard"

import Box from '@mui/material/Box';

const App = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >

        <Header />
        <Dashboard />
        <Footer />

      </Box>
    </>
  );
}

export default App;
