import React from 'react'
import {Box, Card, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CategoryList({image,title}) {

    const navigate = useNavigate();
    const colorOpacity = 'rgba(239, 83, 80, .8)';
  return (
    <Card sx={{maxWidth:250, position:"relative", cursor:'pointer'}} 
        elevation={0}
        onClick={()=> navigate(`list/${title.toLowerCase()}`)}

    >
        <CardMedia
            component="img"
            src={image}
            sx={{
                height:300,
            }}
            
        >
        </CardMedia>
        
        <Typography variant='h6' bgcolor={colorOpacity} color='white' p={1.5} align={'center'}
            sx={{
                width:'100%',
                position:'absolute',
                bottom:'0',
            }}
        >
            {title.toUpperCase()}</Typography>
        
        
    </Card>
  )
}

export default CategoryList