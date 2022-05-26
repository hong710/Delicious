import React from 'react'
import {Container, Box, Typography, Avatar} from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {filterLists} from'../../../helper';


function FilterRecipes() {

 
  return (
    <Container sx={{marginTop: '3rem'}}>
        <Splide 
            options={{    
                perPage:6,
                arrows: false,
                pagination: false,
                drag:'free',
                gap: '0rem',
                rewind: true,
                type   : 'loop',
            }}         
        >
            
            {filterLists?.map((item) =>{
                return (
                <SplideSlide key={item.name}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center' , flexDirection:'column'}}>
                    <Avatar
                        alt="Remy Sharp"
                        src={item.img}
                        sx={{ width: 150, height: 150 }}
                    />                     
                        <Typography variant='body1' >{item.name} </Typography>                        
                    </Box>
                </SplideSlide>
        
                
            )
        })}
             
        </Splide>
    </Container>
  )    
}

export default FilterRecipes