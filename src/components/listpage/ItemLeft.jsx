import React from 'react'
import {Box, Card, CardMedia, CardContent, Typography} from '@mui/material';
import { grey } from '@mui/material/colors';

import appetizer from '../../assets/appetizer.jpg';
function ItemLeft({recipe}) {
  return (
    <Card  elevation={0} sx={{ 
        maxWidth: 600, 
        minHeight:616, 
        border:`2px solid ${grey[300]}`,
    }}>
        <CardMedia
            component="img"
            height="350"
            image={appetizer}
            alt="green iguana"
        />
        <CardContent>
            <Typography variant="h5" align='center' sx={{fontWeight:'bold'}}>
              {recipe[0]?.title}   
              {console.log(recipe)}     
            </Typography> 
            <Typography variant="body1"  mt={3} 
            >
              {recipe[0]?.summary.replace(/(<([^>]+)>)/gi, "")}   
    
            </Typography>                
        </CardContent>
    </Card>
  )
}

export default ItemLeft