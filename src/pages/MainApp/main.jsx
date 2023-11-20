// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Beranda from '../Beranda/main'
import BuatEvent from '../BuatEvent/main'
import Event from '../Event/main'
import Tiketku from '../Tiketku/main'
import Profile from '../Profile/main'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './mainApp.scss';


function MainApp() {
  return (
    <div className='mainApp'>
     
      <Navbar />
      
      <div className="content">
        <Routes>
          <Route path='/' element={<Beranda />}></Route>
          <Route path='/buatevent' element={<BuatEvent />}></Route>
          <Route path='/event/*' element={<Event />}>
   
          </Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/tiketku' element={<Tiketku />}></Route>
        </Routes>
        </div>
     
      <Footer />
   
    </div>
  )
}

export default MainApp