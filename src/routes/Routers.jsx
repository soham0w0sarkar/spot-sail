import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import College from '../pages/College'
import Hospital from '../pages/Hospital'
import Restaurant from '../pages/Restaurant'
import CollegesList from '../pages/CollegesList'
import HospitalsList from '../pages/HospitalsList'
import RestaurantsList from '../pages/RestaurantsList'
import Home from '../pages/Home'
import HotelsList from '../pages/HotelsList'
import Booking from '../pages/Booking'
import Contact from '../pages/Contact'
import List from '../pages/List'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/log-in' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/College/:id' element={<College/>}/>
        <Route path='/hospital/:id' element={<Hospital/>}/>
        <Route path='/restaurant/:id' element={<Restaurant/>}/>
        <Route path='/colleges-list' element={<CollegesList/>}/>
        <Route path='/hospitals-list' element={<HospitalsList/>}/>
        <Route path='/restaurants-list' element={<RestaurantsList/>}/>
        <Route path='/hotels-list' element={<HotelsList/>}/>
        <Route path='/confirm/:id' element={<Booking/>}/>
        <Route path='/contact/:id' element={<Contact/>}/>
        <Route path='/list-your-industry' element={<List/>}/>
    </Routes>
  )
}

export default Routers