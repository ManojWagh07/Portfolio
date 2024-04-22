import React from 'react'
// import Skill from './Skill';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import {Link} from 'react-router-dom';
import { Link } from '@mui/material';

// import { Carousel } from 'react-responsive-carousel';

const Carousels = () => {
  return (
    <>
        <div className='Carousel'>
          <img src="./Images/Bg.jpg" alt="" />
        
          <div className='Icons'>
              <p><FacebookIcon/></p>
              <p><InstagramIcon/></p>
              <p><TwitterIcon/></p>
              <p><YouTubeIcon/></p>
          </div>

          <div className='Text'>
              <h3>HELLO I'M A</h3>
              <h1>Full Stack Web <br /><span> Developer</span> </h1>
              <p>Hello I'M Manoj Wagh A Proffesional Web <br /> Developer Having Expetise in ReactJs</p>
          </div>
          <div className='Pic'>
            {/* <img className='Svg' src="./Images/blob.svg" alt="" /> */}
            <img src="./Images/Pic.png" alt="" />
            
          </div>
        </div>

       
        {/* <Skill/> */}
  </>
  )
}

export default Carousels
