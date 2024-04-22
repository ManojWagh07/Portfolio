import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Course from './Component/Course';
import Contact from './Comman/Contact';
import Navbar from './Component/Navbar';
import { useState } from 'react';


  
function App() {
  return (
    <>
  <div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/About' element={<About/>}/> */}
        <Route path='/Course' element={<Course/>}/>
        {/* <Route path='/Contact' element={<Contact/>}/>        */}
      </Routes>
    </BrowserRouter>
    
  </div>
  </>
  );
}

export default App;
