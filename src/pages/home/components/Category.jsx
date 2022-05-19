import React from 'react'
import { Container, Box, Grid} from '@mui/material';
import appetizer from '../../../assets/appetizer.jpg';
import breakfast from '../../../assets/breakfast.jpg';
import dinner from '../../../assets/dinner.jpg';
import lunch from '../../../assets/lunch.jpg';
import CategoryList from './CategoryList';

function Category() {
	return (
		<Container sx={{marginTop:'4rem'}}>
			<Box>
				<Grid container spacing={3} >
					<Grid item xs={3}>
						<CategoryList image={appetizer} title={'Appetizer'}/>
					</Grid>
					<Grid item xs={3}>
						 
						<CategoryList image={breakfast} title={'Breakfast'}/>
					</Grid>
						<Grid item xs={3}>
					<CategoryList image={lunch} title={'Lunch'}/>

					</Grid>
					<Grid item xs={3}>
						<CategoryList image={dinner}  title={'Dinner'}/>
						

					</Grid>
				</Grid>

			</Box>


		</Container>
	)
}

export default Category