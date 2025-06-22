import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Page from '../pages/Page'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/page' element={<Page/>} />
    </Routes>
  )
}

export default MainRoutes