import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import ForgotPassword from './ForgotPassword'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/register' element={<Signup /> }/>
            <Route path='/login' element={<Login /> }/>
            <Route path='/forgot_password' element={<ForgotPassword/> }/>
        </Routes>
    </div>
  )
}

export default MainRoutes