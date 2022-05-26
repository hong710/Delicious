import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//Components
import Home from './home/Home';
import Nav from "../components/Nav";
import ListPage from './Listpage/ListPage';
import NotFound from './home/NotFound';

function Pages() {
  return (

      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list/:type' element={<ListPage />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
           

      </Router>
     
  )
}

export default Pages