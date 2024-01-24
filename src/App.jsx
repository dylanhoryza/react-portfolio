import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import './reset.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className='app-container'>
      <Header />
      <Outlet />

    </div>
      
    
  )
}

export default App
