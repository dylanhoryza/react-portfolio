import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import '../styles/homepage.css'

export default function HomePage() {
  return (
    <div className='bg-image'>
    <section className="short-bio text-center" id="home">
    <h1 className="display-1">Dylan Horyza</h1>
    <p className="display-4">Full Stack Developer</p>
  </section>
    </div>

  )
}