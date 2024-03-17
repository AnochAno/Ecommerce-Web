import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Login from "./Components/login";
import Home from "./Components/home"; 
import ProductDetails from "./Components/ProductDetails"; 
import { AppBar, Stack, Button,Box} from '@mui/material'; 
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import logo from './Components/img/logo.jpg';
import Helpcenter from './Components/helpcenter';
import Parners from './parners'


function App() {

  const showAlert = () => {
    alert('Page still Developed');
  };

  return (
    <Router>
      <AppBar position="fixed" sx={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>


    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}> 
    <img src={logo} alt="our Flag" className="logo" />
    </Box>

    <Stack direction="row" spacing={2} alignItems="center">
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/Lp"> Logistics Partner</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>Returns</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>Rates</Button>
      <Button color="inherit" /*component={Link} to="/Home"*/>About</Button>
      
     

   
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          width: 600, 
          bgcolor: 'background.paper', 
          '& .MuiOutlinedInput-root': { 
            borderRadius: '1px', 
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

   
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', padding: 0.5 }}>
    <Button color="inherit" /*component={Link} to="@"*/ onClick={showAlert}>தமிழ்</Button>
      <Button color="inherit" /*component={Link} to="@" */ onClick={showAlert}>සිංහල</Button>
    </Box>
  </Box>
</AppBar>


      
      <div style={{ paddingTop: 60 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/HelpCenter' element={<Helpcenter/>}/>
          <Route path='/Login' element={<Login />} />
          <Route path="/Lp" element= {<Parners/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          
          
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
