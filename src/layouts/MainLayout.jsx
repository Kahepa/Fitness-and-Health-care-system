import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar' 
import NavBar from '../components/NavBar'


const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-64 flex-1 flex flex-col">
        <NavBar />
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout