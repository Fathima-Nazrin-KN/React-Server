import React from 'react'
import { Card,Form,Button } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Edit() {
  
    const {userid }= useParams();
  
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [premiumMember,setPremiumMember] = useState(false);
  
    const fetchUser = async()=>{
     let response = await axios.get("http://localhost:8000/users/" + userid);
     const user = response.data;
     
      setName(user.name);
      setEmail(user.email);
      setAge(user.age);
      setPremiumMember(user.premiumMember);

    };
    useEffect(()=>{fetchUser()},[userid]);

   const updateUser = async (event)=>{
    event.preventDefault();
    await axios.patch(
      "http://localhost:8000/users/"+userid,
      {
        name:name,
        age:parseInt(age),
        email:email,
        premiumMember:premiumMember
      }

    )

   }
  
  return (
    <div className='row justify-content-center'>
    <div className='col-md-4'>
      <Card className='p-4'>      
          <Form onSubmit={updateUser}>
            <Form.Group className="mb-3" >
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="name" placeholder="Enter name" value={name} onChange={((event)=>setName(event.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" placeholder="Enter email" value={email} onChange={((event)=>setAge(event.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control required type="number" placeholder="Password" value={age} onChange={((event)=>setEmail(event.target.value))}/>
            </Form.Group>
            <Form.Group className="mb-3">
                  <Form.Check type='checkbox' label="Premium User" checked={premiumMember} onChange={((event)=>setPremiumMember(!premiumMember))}/>
            </Form.Group>
            <Button variant="info" type='submit'>Edit user</Button>
        </Form>
      </Card>
    </div>
    
  </div>
  )
}

export default Edit