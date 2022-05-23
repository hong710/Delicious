import React from 'react'
import {Card, CardMedia, CardContent, Typography, Chip, Box, Table, TableRow, TableCell, TableHead, TableBody} from '@mui/material';
import { grey } from '@mui/material/colors';

function FoodCard({recipe}) {

    return (
        <Card  elevation={0} sx={{ 
            maxWidth: 350, 
            minHeight:410, 
            margin:'0 0 1rem 0',
            border:`2px solid ${grey[300]}`,
            position: "relative"
        }}>
            <CardMedia
                component="img"
                height="180"
                image={recipe.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="body1" align='center' sx={{fontWeight:'bold'}}>
                    {recipe.title}                    
                </Typography>                
            </CardContent>
            <Box mb= {-.1} sx={{
                width:'100%',
                position:'absolute',
                bottom:"0"
                }}> 
                
                {/* <Chip label={`${recipe.calories} calories`}  color="warning" size="small" variant="outlined" sx={{marginTop:'.5rem'}}  /> */}

                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell> Caloric Breakdown</TableCell>
                            <TableCell align='right'> Value</TableCell>
                        </TableRow>                      
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Percent Carb %</TableCell>
                            <TableCell align='right'>{recipe.nutrition.caloricBreakdown.percentCarbs}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Percent Fat %</TableCell>
                            <TableCell align='right'>{recipe.nutrition.caloricBreakdown.percentFat}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Percent Protein %</TableCell>
                            <TableCell align='right'>{recipe.nutrition.caloricBreakdown.percentProtein}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Total Calorries (kcal)</TableCell>
                            <TableCell align='right'>{`${recipe.nutrition.nutrients[0].amount}`}</TableCell>
                        </TableRow>

                    </TableBody>

                </Table>
                </Box>   
        </Card>
    )
}

export default FoodCard