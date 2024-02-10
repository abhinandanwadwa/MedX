import React from 'react'
import Home from './Components/Home'
import AppointmentPage from './Components/AppointmentPage'
import { Route, Routes } from 'react-router-dom'
import AppointmentPageDate from './Components/AppointmentPageDate'
import AppointmentDescription from './Components/AppointmentDescription'
import AppointmentFinal from './Components/AppointmentFinal'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<AppointmentPage/>}/>
        <Route path='/appointment/date' element={<AppointmentPageDate/>}/>
        <Route path='/appointment/description' element={<AppointmentDescription/>}/>
        <Route path='/appointment/route' element={<AppointmentFinal/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App

