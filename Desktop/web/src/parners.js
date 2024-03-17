import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';

function parners(){
  return (
    <Container> <br/><br/>
    <Card sx={{ maxWidth: 1200 }}>
      <CardMedia
        sx={{ height: 400}}
        image="https://www.sellerapp.com/blog/wp-content/uploads/2021/05/Essential-Ecommerce-Priceing-Strategies.jpg"
        title="green iguana"
      />
    </Card>
    </Container>
  )
}

export default parners