import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Service = () => {
  return (
    <div className='Flex'>
      <h1>Service</h1>

      <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Service1.png" />
      <Card.Body>
        <Card.Title className='Title' style={{ color: 'orange' }}>Web Developer</Card.Title>
        <Card.Text className='Text'>
         We Have a Proper Team For Web Developer
        </Card.Text>
        <Button variant="warning">Hire Me</Button>
      </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Service2.png" />
      <Card.Body>
        <Card.Title className='Title' style={{ color: 'orange' }}>App Clone</Card.Title>
        <Card.Text className='Text'>
         We Have a Proper Team For App Clone
        </Card.Text>
        <Button variant="warning">Hire Me</Button>
      </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Service3.png" />
      <Card.Body>
        <Card.Title className='Title' style={{ color: 'orange' }}>Hosting</Card.Title>
        <Card.Text className='Text'>
         We Have a Proper Team For Hosting
        </Card.Text>
        <Button className='hire' variant="warning">Hire Me</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Service
