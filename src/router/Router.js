import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Tours from '../Pages/Tours.jsx';
import ToursDetails from '../Pages/TourDetails.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import SearchResultList from '../Pages/SearchResultList.jsx';
import ThankYou from '../Pages/ThankYou.jsx';
import About from '../Pages/About.jsx';

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/tours' element={<Tours/>} />
      <Route path='/tours/:id' element={<ToursDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/thank-you' element={<ThankYou/>} />
      <Route path='/tours/search' element={<SearchResultList/>} />
    </Routes>
    
  )
}

export default Router