import React from 'react'
import Navbar from './components/Navbar'
import { useLocation,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import { SignIn } from '@clerk/clerk-react';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetail from './pages/RoomDetail';
import MyBooking from './pages/MyBooking';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';
import Dashboard from './pages/hotelOwner/Dashboard';

const App =() => {
   const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
    {!isOwnerPath && <Navbar/>}
    {/* { <HotelReg/>} */}
    <div className='min-h-[70vh]'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rooms' element={<AllRooms/>}/>
    <Route path='/rooms/:id' element={<RoomDetail/>}/>
    <Route path='my-bookings' element={<MyBooking/>}/>
    {/* <Route path='/sign-in' element={<SignIn routing='path' path='/sign-in'/>}/>
     */}
     <Route path='/owner' element={<Layout/>}>
     <Route index element={<Dashboard/>}/>
     <Route path='add-room' element={<AddRoom/>}/>
     <Route path='list-room' element={<ListRoom/>}/>
     </Route>
    </Routes>

    </div>
    <Footer/>
    </div>
  )
}

export default App