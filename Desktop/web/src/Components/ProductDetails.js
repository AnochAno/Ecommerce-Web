import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Grid, Card, CardContent, Typography, IconButton, Container, Box, Paper, InputAdornment } from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import './home.css';
import money from './img/money.jpg'

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: '',
  });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setTotalPrice(response.data.price);
      })
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    if (product) {
      setTotalPrice((product.price * quantity).toFixed(2));
    }
  }, [quantity, product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentInfo, `Quantity: ${quantity}`, `Total Price: ${totalPrice}`);
    alert('Processing payment...');
  };

  const incrementQuantity = () => setQuantity(prevQty => prevQty + 1);
  const decrementQuantity = () => setQuantity(prevQty => prevQty > 1 ? prevQty - 1 : 1);

  return (
    <Container>
      <br /><br />
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          {product && (
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" style={{ textAlign: 'center' }}>{product.title}</Typography>
                <img src={product.image} alt={product.title} style={{ maxWidth: '50%', marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                <Typography variant="body2" component="p" color="textSecondary" style={{ textAlign: 'left' }}>{product.description}</Typography>
                <Typography variant="h5" style={{ textAlign: 'center' }}>Price: ${product.price}</Typography>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                  <IconButton onClick={decrementQuantity}><RemoveIcon /></IconButton>
                  <Typography variant="h6" style={{ margin: '0 10px' }}>{quantity}</Typography>
                  <IconButton onClick={incrementQuantity}><AddIcon /></IconButton>
                </div>
                <Box sx={{ textAlign: 'center', marginTop: '10px', backgroundColor: '#b6f5fc', padding: '10px', borderRadius: '5px' }}>
                  <Typography variant="h6">Total: ${totalPrice}</Typography>
                </Box>
              </CardContent>
            </Card>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {product && (
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Billing Information:</Typography>
              <Typography>Product: {product.title}</Typography>
              <Typography>Quantity: {quantity}</Typography>
              <Typography>Total Price: ${totalPrice}</Typography>
              <img src={money} alt="our Flag" style={{ width: '100%', height: 'auto' }} />
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Payment</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Card Number"
                  name="cardNumber"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={paymentInfo.cardNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Expiry Date"
                  name="expiry"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={paymentInfo.expiry}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EventIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="CVV"
                  name="cvv"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Name on Card"
                  name="nameOnCard"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={paymentInfo.nameOnCard}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Pay Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
