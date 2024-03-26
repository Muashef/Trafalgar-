import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Health from './components/Health';
import Download from './components/Download';
import Testimonial from './components/Testimonial';
import Article from './components/Article';
import Footer from './components/Footer';

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
      <Footer />
    </>
  )
}

export default App
