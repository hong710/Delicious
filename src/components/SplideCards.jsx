import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FoodCard from './FoodCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useFetch from '../hooks/useFetch';


function SplideCard({query, Loading}) {
    

    const{data, isLoading, error} = useFetch({query})


    return (
        
        <Box sx={{marginTop:'1rem'}}>

            {/* send isLoading back to RecipesTab */}
            {Loading(isLoading)}

            <Splide options={{
                perPage:4,
                arrows: false,
                pagination: false,
                drag:'free',
                gap: '2rem'
            }}>
            {data&&
                data?.map((recipe) => {
                    if(recipe.image){
                        return (
                            <SplideSlide key={recipe.id}>
                                <Box >
                                    <FoodCard recipe ={recipe} />
                                </Box>
                            </SplideSlide>
                        )
                    }
                    
                })
            }
            </Splide>
            
        </Box>
    )
}

export default SplideCard