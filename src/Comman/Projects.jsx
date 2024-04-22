import React from 'react'
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (

  <section id='Project'>
    <div className='project'>
      <img src="./Images/Project.png" alt="" />
      <div className='Contain'>
        <h1>Projects</h1>
        <h3>E-Commerce :-</h3>
        <p>• Implemented robust backend functionality using Node.js <br /> and MongoDB, allowing service providers to register, showcase their services, and users to hire them within specified timeframes. <br />
           • Created an efficient admin panel with Node.Js and MongoDB, <br />
            enabling report generation and comprehensive order status tracking for streamlined management and decision-making.</p>
        <h3>Grocery Website :-</h3>
          <p>• Developed a futuristic and user-friendly UI/UX for <br /> the end-to-end project, utilizing custom CSS to create a visually appealing and modern interface. <br />
           </p>
           <Button href="https://github.com/ManojWagh07" target='blank' variant="outline-warning">View Projects</Button>{' '}
      </div>
    </div>
  </section>
  )
}

export default Projects
