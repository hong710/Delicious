import React from 'react';
import {Box, Container, Grid} from '@mui/material';
import { useParams } from 'react-router-dom';
// import appetizer from '../../assets/appetizer.jpg';
import {FoodCard, Hero} from '../components';
import useFetch from '../hooks/useFetch';
import {localStorageData} from '../helper';

function ListPage() {


	const params = useParams();
	const query = `recipes/complexSearch?type=${params.type}&addRecipeNutrition=true&number=20`;
	const title = params.type;
	const{data, isLoading, error} = useFetch({query,title});	
	

	const jsonData =  localStorageData(params.type, data);
	const leftItemJSON = jsonData.slice(-1);	//return either localStorage or fetch json data	
	

  return (
    <Container >
		<Box>
			<Grid container spacing={2}>	
				{
					data?.map((item) => {
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