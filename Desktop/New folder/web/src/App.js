import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/home"; // Rename your component and file to 'Home'
import ProductDetails from "./Components/ProductDetails"; // Rename your component and file to 'Card'
import { AppBar, Stack, Button } from '@mui/material'; // Import Button for styling links

function App() {
  return (
    <Router>
      <AppBar position="fixed" sx={{ height: "50px", alignItems: "center", justifyContent: "center" }}>
        <Stack direction="row" spacing={2}>
          {/* Use Button for styling. You can also use Typography or any other MUI component */}
          <Button color="inherit" component={Link} to="/">Home</Button>
          
        </Stack>
      </AppBar>

      {/* Add some top padding to the main content to avoid overlap with the fixed AppBar */}
      <div style={{ paddingTop: 60 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
