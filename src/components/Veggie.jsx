import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FoodCard from './FoodCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useFetch from '../hooks/useFetch';


function Veggie() {
    const{data: veggie, isLoading, error} = useFetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`)  

    return (
        <Box sx={{marginTop:'2rem'}}>
            <Container>
                <Splide options={{
                    perPage:4,
                    arrows: false,
                    pagination: false,
                    drag:'free',
                    gap: '2rem'
                }}>
                {
                    veggie?.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Box >
                                <FoodCard recipe ={recipe} />
                                </Box>
                            </SplideSlide>

                        )
                    })
                }
                </Splide>
            </Container>
        </Box>
    )
}

export default Veggie