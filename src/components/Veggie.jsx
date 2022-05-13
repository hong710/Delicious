import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FoodCard from './FoodCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();

    }, [])

    const getVeggie = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setVeggie(data.recipes)
    };
    console.log(veggie);


    return (
        <Box sx={{marginTop:'2rem'}}>
            <Container>
            <Typography variant='h4'>Veggie Dishes</Typography>
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