import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FoodCard from './FoodCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();

    }, [])

    const getPopular = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setPopular(data.recipes)
    };
    console.log(popular);


    return (
        <Box sx={{marginTop:'2rem'}}>
            <Container>
            <Typography variant='h4'>Popular Dishes</Typography>
                <Splide options={{
                    perPage:4,
                    arrows: false,
                    pagination: false,
                    drag:'free',
                    gap: '2rem'
                }}>
                {
                    popular?.map((recipe) => {
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

export default Popular