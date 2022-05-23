import Category  from './components/Category';
import React from 'react'
import Nav from "../../components/Nav";
import RecipesTab from './components/RecipesTab';
import FilterRecipes from './components/FilterRecipes';

function Home() {
  return (
    // https://therecipecritic.com/
    <> 
      <Nav />
      
      <Category />
      <FilterRecipes />
      <RecipesTab />

    </> 
  )
}

export default Home