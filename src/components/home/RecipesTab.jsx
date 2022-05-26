import React, { useState } from 'react';
import { Box, Container, CircularProgress } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SplideCard from './SplideCards';


export default function RecipesTab() {

	const numberOfItems = 4;

	const recipes = [
		{
			name:"popular",
			query: `recipes/complexSearch?diet=Paleo&number=${numberOfItems}&addRecipeNutrition=true`

		},
		{
			name:"veggie",
			query:`recipes/complexSearch?diet=vegetarian&number=${numberOfItems}&addRecipeNutrition=true`

		},
		{
			name:"keto",
			query: `recipes/complexSearch?diet=keto&number=${numberOfItems}&addRecipeNutrition=true`

		},
		{
			name:"thirtyMin",
			query: `recipes/complexSearch?maxReadyTime=30&number=${numberOfItems}&addRecipeNutrition=true`

		},
	]

	const [value, setValue] = useState('1');
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container sx={{ width: '100%', marginTop: '3rem' }}>
			<TabContext value={value} >
				<Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
						variant="fullWidth"
						indicatorColor="secondary"
						textColor="inherit"

					>
						<Tab label="Popular Recipes" value="1" sx={{ fontSize: '1.1rem' }} />
						<Tab label="Vegetarian Picks" value="2" sx={{ fontSize: '1.1rem' }} />
						<Tab label="Keto Recipes" value="3" sx={{ fontSize: '1.1rem' }} />
						<Tab label="30 Minutes Meal" value="4" sx={{ fontSize: '1.1rem' }} />
					</TabList>
				</Box>
				
				{
				recipes.map((item, index) => {
						return (
							<TabPanel value={(index+1).toString()} key={index}>
								{
									isLoading ?
										<Box sx={{ display: 'flex', justifyContent: 'center' }}>
											<CircularProgress color="secondary" sx={{ alignContent: 'center' }} />
										</Box>
										: null
								}

								<SplideCard query={item.query} name={item.name} loading={setIsLoading} />
							</TabPanel>

						)
					})
				}

			</TabContext>
		</Container>
	);
}

