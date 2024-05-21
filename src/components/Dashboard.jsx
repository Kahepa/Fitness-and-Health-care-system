import React from 'react'
import NavBar from './NavBar'
import Overview from '../pages/Overview'

const Dashboard = () => {
  return (
    <div className='flex-grow'>
        <NavBar />
        <Overview />
    </div>
  )
}

export default Dashboard