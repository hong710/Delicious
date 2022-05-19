import React from 'react'
import {Card, CardMedia, CardContent, Typography, Button,CardActions} from '@mui/material';
import { red, grey } from '@mui/material/colors';

function FoodCard({recipe}) {
    return (
        <Card  elevation={0} sx={{ 
            maxWidth: 350, 
            minHeight:300, 
            margin:'0 0 1rem 0',
            border:`2px solid ${grey[300]}` 
        }}>
            <CardMedia
                component="img"
                height="180"
                image={recipe.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="body1" align='center' >
                   <b>
                       {recipe.title}
                    </b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    )
}

export default FoodCard