import {Category} from '../components/';
import {RecipesTab} from '../components/';
import {FilterRecipes} from '../components';

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