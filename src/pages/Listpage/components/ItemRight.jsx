import React from 'react'
import {Box, Card, CardMedia, CardContent, Typography} from '@mui/material';
import { grey } from '@mui/material/colors';

import appetizer from '../../../assets/appetizer.jpg';
function ItemRight({data}) {
  return (
    <Card  elevation={0} sx={{ 
        maxWidth: 300, 
        height: 300,
        border:`2px solid ${grey[300]}`,
    }}>
        <CardMedia
            component="img"
            image={appetizer}
            alt="Live from space album cover"
        />
        <CardContent>
            <Typography variant="body1" align='center' sx={{fontWeight:'bold'}}>
              dwdwdwdwdwdwdwdwdwdwdw                 
            </Typography>                
        </CardContent>
    </Card>
  )
}

export default ItemRight