import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import NearMeIcon from '@mui/icons-material/NearMe';
import CancelIcon from '@mui/icons-material/Cancel';
import '../Comman/Model.css'
import axios from 'axios'


function Model() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [msg,setMsg]=useState("")

  let submit= async(e)=>{
    e.preventDefault()

    try{
      alert("submitted")
      await axios.post("http://localhost:8000/",{
        name,email,msg
      })
    }catch(e){
      console.log(e);
    }
  }

  return (
    <>
    <li><button className='link'  onClick={handleShow}>Contact</button></li>
    
      <Modal id='Model' show={show}  onHide={handleClose}>
      <div className='model'>
        <Modal.Header closeButton>
          <Modal.Title className='text'>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className='Model-Body'>
        <img src="./Images/Model.png" alt="" />

          <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                autoFocus
                onChange={(e)=>{setName(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                autoFocus
                onChange={(e)=>{setEmail(e.target.value)}}

              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}placeholder="Message" onChange={(e)=>{setMsg(e.target.value)}} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close <CancelIcon/>
          </Button>
          <Button variant="warning" onClick={submit}>
            Send <NearMeIcon/>
          </Button>
        </Modal.Footer>
        </div> 
      </Modal>
     
    </>
  );
}

export default Model;