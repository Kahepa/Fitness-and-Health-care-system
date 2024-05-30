import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar' 
import NavBar from '../components/NavBar'


const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout