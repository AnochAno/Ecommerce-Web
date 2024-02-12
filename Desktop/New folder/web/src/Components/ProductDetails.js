import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Grid, Card, CardContent, Typography, IconButton, Container } from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
import './home.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { InputAdornment } from '@mui/material';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const [totalPrice, setTotalPrice] = useState(0); // State to manage total price
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
        setTotalPrice(response.data.price); // Initialize total price with product price
      })
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    // Update total price whenever quantity or product changes
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
    alert('Payment information and order details submitted. Implement actual payment processing and order handling here.');
  };

  const incrementQuantity = () => setQuantity(prevQty => prevQty + 1);
  const decrementQuantity = () => setQuantity(prevQty => prevQty > 1 ? prevQty - 1 : 1);

  return (
    <Container><br/><br/>
    <Grid container spacing={4}>
      {product && (
        <Grid item xs={12} md={6}  spacing={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ textAlign: 'center' }}>{product.title}</Typography>
              <img src={product.image} alt={product.title} style={{ maxWidth: '30%', marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
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
        </Grid>
      )}

      <Grid item xs={12} md={6}>
      <Card>
      <form onSubmit={handleSubmit}>
  <TextField
    label="Card Number"
    name="cardNumber"
    type="tel" 
    fullWidth
    variant="outlined"
    margin="normal"
    maxWidth ="10px"
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
    type="tel" // Suggested for numeric inputs like expiry dates
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
    type="tel" 
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
    type="text"
    fullWidth
    variant="outlined"
    margin="normal"
    value={paymentInfo.nameOnCard}
    onChange={handleChange}
  />

  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
    Submit Payment
  </Button>
</form>

        </Card>
      </Grid>
    </Grid>

    </Container> 
  );
}

export default ProductDetails;
