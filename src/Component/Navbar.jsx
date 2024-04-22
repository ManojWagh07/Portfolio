import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Model from '../Comman/Model';
const Navbar = () => {
  return (
    <div className='Container'>
        <ul>
          <img src="./Images/Logo.png" alt="" />
            <li><Link className='link' to='/'>Home</Link></li>
            <li><a className='link' href="#About">About</a></li>
            <li><a className='link' href='#Project'>Project</a></li>
            <li><Model/></li>
        </ul>
    </div>
  )
}

export default Navbar