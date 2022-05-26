import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import FoodCard from '../reusables/FoodCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useFetch from '../../hooks/useFetch';
import {localStorageData} from '../../helper';


function SplideCard({query, loading, name}) {
    const{data, isLoading, error} = useFetch({query,title:name})
    const jsonData =  localStorageData(name, data);	//return either localStorage or fetch json data	

    return (
        
        <Box sx={{marginTop:'1rem'}}>
            {/* send isLoading back to RecipesTab */}
            {loading(isLoading)}

            <Splide options={{
                perPage:4,
                arrows: false,
                pagination: false,
                drag:'free',
                gap: '2rem',
                type   : 'loop',
            }}>
            {jsonData&&
                jsonData?.map((recipe) => {
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