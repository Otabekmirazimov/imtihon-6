import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFetch } from '../hooks/useFetch'
function MainLayout() {    
    return (
    <div className='app flex'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout