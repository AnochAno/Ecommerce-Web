import React from 'react'
import { TextField, Button, Grid, Typography, InputAdornment, Container } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


export default function card() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Processing payment...');
      };
    
  return (
    <Container>
    <form onSubmit={handleSubmit}>
    <Typography variant="h6" gutterBottom>
      Card Details
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          label="Card Number"
          fullWidth
          autoComplete="cc-number"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          label="Expiration Date"
          fullWidth
          autoComplete="cc-exp"
          variant="outlined"
          placeholder="MM/YY"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EventIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          label="CVV"
          fullWidth
          autoComplete="cc-csc"
          variant="outlined"
          helperText="Last three digits on signature strip"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Cardholder Name"
          fullWidth
          autoComplete="cc-name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Pay Now
        </Button>
      </Grid>
    </Grid>
  </form>
  </Container>
  )
}
