import React from 'react'
import { Container, Box, Grid} from '@mui/material';
import CategoryList from './CategoryList';
import {CategoryItems} from '../../helper';

function Category() {
	return (
		<Container sx={{marginTop:'3rem'}}>
			<Box>
				<Grid container spacing={3} >

					{CategoryItems?.map((item)=>{
						return(
							<Grid item xs={3} key={item.name}>
								<CategoryList image={item.img} title={item.name}/>
							</Grid>
						)
					})}					
				</Grid>
			</Box>
		</Container>
	)
}

export default Category