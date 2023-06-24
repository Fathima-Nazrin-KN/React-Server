import React, { useState } from 'react'
import { Button,Card,FloatingLabel,InputGroup,Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [email,setEmail] = useState("");
  const [premiumMember,setPremiumMember] = useState(false)
  const navigate = useNavigate()
 

  const submitForm =async (event)=>{
    event.preventDefault();

   const response = await axios.post (
     " http://localhost:8000/users",
     {
      name:name,
      age:parseInt(age),
      email: email,
      premiumMember:premiumMember

     }
     
    )
    const id = response.data.id;
    navigate("/users/"+id)

  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <Card className='p-4'>      
            <Form onSubmit={submitForm}>
              <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" required placeholder="Enter name"  value={name} onChange={((event)=>setName(event.target.value))} />
              </Form.Group>
              <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email"  value={email} onChange={((event)=>setEmail(event.target.value))}/>
              </Form.Group>
              <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number"required placeholder="Enter age"  value={age} onChange={((event)=>setAge(event.target.value))} />
              </Form.Group>
              <Form.Group className="mb-3">
                    <Form.Check type='checkbox' label="Premium User" checked={premiumMember} onChange={()=>setPremiumMember(!premiumMember)}/>
              </Form.Group>
              <Button variant="info" type='submit'>Add new user</Button>
          </Form>
        </Card>
      </div>
      
    </div>
  )
}

export default Add