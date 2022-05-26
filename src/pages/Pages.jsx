import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//Components
import Home from './Home';
import Nav from "../components/reusables/Nav";
import ListPage from './ListPage';
import NotFound from './NotFound';

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