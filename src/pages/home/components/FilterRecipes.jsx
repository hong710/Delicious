import React from 'react'
import {Container, Box, Typography, Avatar} from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {filterLists} from'../../../data';


function Hero() {

 
  return (
    <Container>
        <Splide 
            options={{    
                perPage:6,
                arrows: false,
                pagination: false,
                drag:'free',
                gap: '0rem',
                rewind: true,
            }}         
        >
            
            {filterLists.map((item) =>{
                return (
                <SplideSlide>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center' , flexDirection:'column'}}>
                    <Avatar
                        alt="Remy Sharp"
                        src={item.img}
                        sx={{ width: 150, height: 150 }}
                    />                     
                        <Typography>{item.name} </Typography>                        
                    </Box>
                </SplideSlide>
        
                
            )
        })}
             
        </Splide>
    </Container>
  )    
}

export default Hero