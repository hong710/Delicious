import React from 'react'
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import Nav from "../components/Nav";

function Home() {
  return (
    <> 
      <Nav />
        <Popular />
        <Veggie />
    </> 
  )
}

export default Home