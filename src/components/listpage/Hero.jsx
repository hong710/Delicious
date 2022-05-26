import React from 'react'
import ItemRight from './ItemRight';
import ItemLeft from './ItemLeft';
import { Container,Grid } from '@mui/material';

function Hero({data}) {
  return (
    
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<ItemLeft recipe={data}/>
			</Grid>

			<Grid item xs={6}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ItemRight recipe={data}/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
  )
}

export default Hero