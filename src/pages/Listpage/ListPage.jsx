import React from 'react';
import {Box, Container, Grid} from '@mui/material';
import { useParams } from 'react-router-dom';
// import appetizer from '../../assets/appetizer.jpg';
import ItemLeft from './components/ItemLeft';
import ItemRight from './components/ItemRight';
import FoodCard from '../../components/FoodCard';
import useFetch from '../../hooks/useFetch';
import {localStorageData} from '../../helper';

function ListPage() {


	const params = useParams();
	const query = `recipes/complexSearch?type=${params.type}&addRecipeNutrition=true&number=20`;	
	const{data, isLoading, error} = useFetch({query});	
	

	const jsonData =  localStorageData(params.type, data);
	const leftItemJSON = jsonData.slice(-1);	//return either localStorage or fetch json data	
	

  return (
    <Container >
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<ItemLeft recipe={leftItemJSON}/>
			</Grid>

			<Grid item xs={6}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<ItemRight />
					</Grid>
					<Grid item xs={6}>
						<ItemRight />
					</Grid>
					<Grid item xs={6}>
						<ItemRight />
					</Grid>
					<Grid item xs={6}>
						<ItemRight />
					</Grid>			
				</Grid>
			</Grid>
		</Grid>
		<Box>
			<Grid container spacing={2}>	
				{
					jsonData?.map((item) => {
						return(
							<Grid item xs={3} key={item.id}>
								<FoodCard recipe={item} />
							</Grid>
						)
					})
				}
			</Grid>
		</Box>
    </Container>
  )
}

export default ListPage