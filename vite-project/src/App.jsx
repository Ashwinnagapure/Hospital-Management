import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Doc from './pages/Doc';             // Import Doc component
import Login from './pages/Login';         // Import Login component
import About from './pages/About';         // Import About component
import Contact from './pages/Contact';     // Import Contact component
import MyProfile from './pages/MyProfile'; // Import MyProfile component
import MyAppointment from './pages/MyAppointment'; // Import MyAppointment component
import Footer from './components/Footer';

import Appointment from './pages/Appointment'; 

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/doc' element={<Doc/>}/>
           <Route path='/doc/:speciality' element={<Doc/>}/>
           <Route path='/login' 
             element={<Login/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/my-profile' element={<MyProfile/>}/>
           <Route path='/my-appointment' element={<MyAppointment/>}/>
           <Route path='/appointment/:docId' element={<Appointment/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App