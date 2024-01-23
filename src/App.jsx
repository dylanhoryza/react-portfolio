import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className='app-container'>
      <Nav />
      <Outlet />

    </div>
      
    
  )
}

export default App
