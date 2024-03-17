import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Box, ThemeProvider } from '@mui/material';
import { AccountBox, Badge, Book, CardGiftcardOutlined, Face, KeyboardReturn, LocalShipping, LocationCity, Money, Password, Payment, SelfImprovement, TrackChanges } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const helpcenter = () => {
  return ( 
    <><br/>
    <Container>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}> 
      
        <Item>
        <h3 style={{textAlign:"center" , color:'black'}}>Self Service Tool</h3>
          <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#e9ecef',
            dark: '#daeefd',
          },
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Horizontal Boxes */}
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
          
        >
          <p><Face/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>My Profile</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
        >
          <p><LocationCity/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Address Book</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
           <p><CardGiftcardOutlined/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Return My Order</p>
        </Box> 
      </div> <br/>
    </ThemeProvider>


    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#e9ecef',
            dark: '#daeefd',
          },
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Horizontal Boxes */}
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
          
        >
          <p><Payment/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>My Payment Options</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
        >
          <p><Password/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Rest My Password</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
           <p><TrackChanges/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Track My Order</p>
        </Box> 
      </div> <br/>
    </ThemeProvider>
    
    
    
    </Item>
      </Grid>
      <Grid item xs={12}> 
      <Item>
        <h3 style={{textAlign:'center', color:'black'}}>Categories</h3>
        <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#e9ecef',
            dark: '#daeefd',
          },
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Horizontal Boxes */}
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
          
        >
          <p><SelfImprovement/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Promotions</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
        >
          <p><Badge/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Orders</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
           <p><LocalShipping/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Shipping & Delivery</p>
        </Box> 
      </div> <br/>
    </ThemeProvider>


    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#e9ecef',
            dark: '#daeefd',
          },
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Horizontal Boxes */}
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
          
        >
          <p><AccountBox/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Account Management</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            marginRight: 2, // spacing between boxes
          }}
        >
          <p><KeyboardReturn/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Returns & Refunds</p>
        </Box>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
           <p><Money/></p>
          <p style={{color:'black', fontSize:'20px', textAlign:'center'}}>Payments</p>
        </Box> 
      </div> <br/>
    </ThemeProvider>
      </Item>
      </Grid>    
    </Grid>
          <br/>
    <Grid item xs={8} style={{Item:'center'}}> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item><Card sx={{ maxWidth: 550 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn2.downdetector.com/static/uploads/logo/WhatsApp-Emblem.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chat with us
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Still looking for answers? Ask anytime, day or night, just click on "Chat Now" below. 
        Or speak to us via live chat 8AM to 11PM 7days a week
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Call</Button>
        <Button size="small">Chat Now</Button>
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
           <h2 style={{textAlign:'center' , color:'ActiveCaption'}}>Earn With Smart Collection</h2>
           <Card sx={{ maxWidth: 550 }}>
      <CardContent style={{textAlign:'left'}}>
        <h3 style={{textAlign:'center' , color:'ActiveCaption'}}>if You want jonit these program You can Contact with our Whatsapp</h3>
        <Typography  >
        Our University
        </Typography>
        <Typography >
        Sell with us
        </Typography>
        <Typography >
        Code of Conduct
        </Typography>
        <Typography >
        Join the Daraz Affiliate Program
        </Typography>
       
      </CardContent>
    </Card>

            </Item>
        </Grid>
      </Grid>
    </Box>
    </Grid>  
  </Box>

  </Container>
  </>
  )
}

export default helpcenter
