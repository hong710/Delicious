import Category from './components/Category';
import React from 'react'

import RecipesTab from './components/RecipesTab';
import FilterRecipes from './components/FilterRecipes';

function Home() {
	return (
		// https://therecipecritic.com/
		<>
			

			<Category />
			<FilterRecipes />
			<RecipesTab />
		

		</>
	)
}

export default Home