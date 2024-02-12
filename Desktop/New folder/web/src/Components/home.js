import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  Link } from "react-router-dom";
import flagTamil from './img/ltte.png'
import flag1 from './img/india.png'
import flag3 from './img/sl.jpg'
import flag4 from './img/london.jpg'
import flag5 from './img/france.jpg'
import flag6 from './img/qtr.png'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home() {
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
        <Grid item xs={12}>
          <Item>xs=8</Item>
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
    </Box></Item>
        </Grid>
      </Grid>  
</Box>


    
    </container>
    </>
  );
}

export default Home;
