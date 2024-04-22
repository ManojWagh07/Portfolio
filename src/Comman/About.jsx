import React from 'react'
import Button from 'react-bootstrap/Button';
const Skill = () => {
  return (
<section id='About'> 
    <div className='Skill'>
      <img src="./Images/About.png" alt="" />
      <div className='container-flex'>
        <h1>About</h1>
        <h3>A Story Of HardWork And Proffesion</h3>
        <p>To Learn a Skill Like Web Developer Is Not Easy for Me, <br />
          but continues hard work bring my skill to a expert levels <br /> in Web Devloper for both website and Mobile Application</p>
        <h3>Contact</h3>
        <p>There are several platforms on which <br /> I'am available like Facebook,WhatsApp, <br /> Telegram and Email</p>
        <Button href="https://drive.google.com/file/d/1DDbQ8xqjVcL5joEN4GTW9LQAdNATP9Y3/view" target='blank' variant="outline-warning">Download CV</Button>{' '}
      </div>
    </div>
</section>   
  )
}

export default Skill
