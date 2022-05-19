import Category  from './components/Category';
import React from 'react'
import Nav from "../../components/Nav";
import RecipesTab from './components/RecipesTab';

function Home() {
  return (
    // https://therecipecritic.com/
    <> 
      <Nav />
      <Category />
      <RecipesTab />

    </> 
  )
}

export default Home