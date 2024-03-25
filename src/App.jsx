import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Health from './components/Health';
import Download from './components/Download';
import Testimonial from './components/Testimonial';
import Article from './components/Article';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Health />
      <Download />
      <Testimonial />
      <Article />
    </>
  )
}

export default App
