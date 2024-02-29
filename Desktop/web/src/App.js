import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Login from "./Components/login";
import Home from "./Components/home"; // Rename your component and file to 'Home'
import ProductDetails from "./Components/ProductDetails"; // Rename your component and file to 'Card'
import { AppBar, Stack, Button,Box} from '@mui/material'; // Import Button for styling links
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import logo from './Components/img/logo.jpg'

function App() {

  const showAlert = () => {
    alert('Page still Developed');
  };

  return (
    <Router>
      <AppBar position="fixed" sx={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

    {/* Left content with new button */}
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}> {/* Adjust justifyContent to 'flex-start' */}
    <img src={logo} alt="our Flag" className="logo" />
    </Box>

    <Stack direction="row" spacing={2} alignItems="center">
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>Promotions</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>Returns</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>Rates</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>About</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>Contact </Button>
     

      {/* Search Bar with custom corner radius */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          width: 600, // Adjust the width as needed
          bgcolor: 'background.paper', // Use theme's paper background for white or set to '#fff' for pure white
          '& .MuiOutlinedInput-root': { // Target the input outline specifically
            borderRadius: '1px', // Set the corner radius. Adjust as needed.
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>

    {/* Right content */}
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', padding: 0.5 }}>
    <Button color="inherit" /*component={Link} to="@"*/ onClick={showAlert}>தமிழ்</Button>
      <Button color="inherit" /*component={Link} to="@" */ onClick={showAlert}>සිංහල</Button>
    </Box>
  </Box>
</AppBar>


      {/* Add some top padding to the main content to avoid overlap with the fixed AppBar */}
      <div style={{ paddingTop: 60 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
