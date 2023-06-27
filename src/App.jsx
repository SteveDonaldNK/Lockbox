import React from 'react'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import { Route, Routes } from 'react-router-dom'
import './styles.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<User />} />
      </Routes>
    </>
  )
}

export default App
