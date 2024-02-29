import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, Typography, Container } from '@mui/material';
import './home.css'; 
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import GirlIcon from '@mui/icons-material/Girl';
import EvStationIcon from '@mui/icons-material/EvStation';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PetsIcon from '@mui/icons-material/Pets';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard'; // For generic card payments
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For bank transfers
import PaypalIcon from '@mui/icons-material/Payments';
import Avatar from '@mui/material/Avatar';




import flagTamil from './img/ltte.png';
import flag1 from './img/india.png';
import flag3 from './img/sl.jpg';
import flag4 from './img/london.jpg';
import flag5 from './img/france.jpg';
import flag6 from './img/qtr.png';
import fb from './img/Fb.jpg';
import twi from './img/Twi.png';
import lin from './img/lnk.png';
import mail from './img/em.png';
import per2 from './img/per2.jpg'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home() {
  const paymentMethods = [
    { name: 'Credit Card', Icon: CreditCardIcon, color: '#1565c0' }, // Blue color for Credit Card
    { name: 'Bank Transfer', Icon: AccountBalanceIcon, color: '#2e7d32' }, // Green color for Bank Transfer
    { name: 'PayPal', Icon: PaypalIcon, color: '#00457c' }, // PayPal's brand color
  ];
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <container><br/>
    <Grid container spacing={4}>
        <Grid item xs={12} >
          <Item style={{backgroundColor:'black'}}><Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={per2} />
          
      
    </Stack></Item>
        </Grid>
    </Grid><br/>

    <Box sx={{ flexGrow: 1 }} spacing={2}>
      <Grid container spacing={2} >
        <Grid item xs={6} md={8} >
          <Item className="box"><div className="home-container">


{isLoading ? (
  <p>Loading...</p>
) : (
  products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image"/>
      <div className="product-info">
        <h5>{product.title}</h5>
        <p>${product.price}</p>
        <Link to={`/product/${product.id}`}>
  <button className='orderbtn'>Purchase</button>
</Link>
      </div>
    </div>
  ))
)}
</div></Item>
        </Grid >
        <Grid item xs={6} md={4} >
          <Item className="other"><Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} >
        <Grid item xs={6} >
          <Item ><h3>Customer Care</h3><hr/>
                <div style={{textAlign:'left'}}>
                <ol>
               <Link><li>Help Center</li></Link> 
               <Link><li>How to Buy</li></Link> 
                <Link><li>Bulk Purchasing</li></Link>
                <Link><li>Returns & Refunds</li></Link>
                <Link><li>Corporate</li></Link>
                </ol>
                </div>
          
          </Item>
        </Grid>
        <Grid item xs={6}>
          
          <Item><h3>Our International</h3><hr/><br/>
          <img src={flagTamil} alt="our Flag" className="flag-icon" />
          <img src={flag1} alt="in Flag" className="flag-icon" />
          <img src={flag3} alt="sl Flag" className="flag-icon" />
          <img src={flag4} alt="london Flag" className="flag-icon" />
          <img src={flag5} alt="france Flag" className="flag-icon" />
          <img src={flag6} alt="quter Flag" className="flag-icon" /><br/><br/><br/><br/>
          </Item>
          
        </Grid>
       
      </Grid>
    </Box></Item><br/><br/>
    <Grid container spacing={2}>
  <Grid item xs={10} style={{alignItems:'center'}}>
    <Item >
        <h2 style={{color:"#7d0620"}}>Category</h2><hr/>
        <div>
        <Stack direction="row" spacing={1}>
                   <Link><Chip icon={<FaceIcon />} label="Baby's Items" /></Link> 
                   <Link><Chip icon={<AccessibilityIcon />} label="Men's Item" /></Link> 
                   <Link><Chip icon={<GirlIcon />} label="Girl's Item" /></Link> 
        </Stack><br/>
        <Stack direction="row" spacing={1}>
                   <Link><Chip icon={<EvStationIcon />} label="Electronics" /></Link> 
                   <Link><Chip icon={<NextWeekIcon />} label="Bags Items" /></Link> 
                   <Link><Chip icon={<SportsEsportsIcon />} label="Sports Items" /></Link> 
                 
    </Stack>
      <br/>
    <Stack direction="row" spacing={1}>
                   <Link><Chip icon={<LiveTvIcon />} label="TV & Home Appliances" /></Link> 
                   <Link><Chip icon={<PetsIcon />} label="Groceries & Pets" /></Link> 
                   
                 
    </Stack>

          
        </div>
        
    </Item>
  </Grid>
  </Grid><br/><br/>

  <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>
      <h1 style={{color:'Red'}}>Payment Methods</h1>
      <List>
      {paymentMethods.map((method, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <method.Icon sx={{ color: method.color }} />
          </ListItemIcon>
          <ListItemText primary={method.name} />
        </ListItem>
      ))}
    </List>
    </Item>
  </Grid>
  </Grid><br/>

  <Grid container spacing={2}>
  <Grid item xs={12}>
    <Item><h1>Follow Us</h1>
    <div>
    <img src={fb} alt="our Flag" class="flag-image3" />
    <img src={twi} alt="in Flag" class="flag-image2" />
    <img src={lin} alt="sl Flag" class="flag-image2" />
    <img src={mail} alt="london Flag" class="flag-image2" />
</div>
          
    
    </Item>
  </Grid>
  </Grid>

        </Grid>
      </Grid>  
</Box>


    
    </container>
    </>
  );
}

export default Home;
