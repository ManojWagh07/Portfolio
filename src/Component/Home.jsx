import React from 'react'
import Navbar from './Navbar'
import {Routes,Route} from'react';
import './HomePage.css'
import Carousels from '../Comman/Carousel';
import Skill from '../Comman/About';
import '../Comman/Skill.css'
import Service from '../Comman/Service';
import Projects from '../Comman/Projects';
import ContactForm from '../Comman/Contact';
const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <Carousels/>
        <Skill/>
        <Service/>
        <Projects/>
        <ContactForm/>
    </div>
  )
}

export default Home