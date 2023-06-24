import React, { useEffect, useState } from 'react'
import { Table,Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

function List() {
  const [data,setData] = useState([]);

  const fetchUser = async()=>{
    let response = await axios.get("http://localhost:8000/users");
    setData(response.data);
  }

  useEffect(()=>{
    fetchUser()
 },[])

 const deleteUser = async(user)=>{
  // alert(user.name)
   await axios.delete(
    "http://localhost:8000/users"+user.id,
     alert(user.name+"Deleted"),
     fetchUser()
   )

 }
  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((user,index)=>
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={"/users/"+user.id}>
                  <Button variant="success">View</Button>{' '}
                </Link>
              <Link to={`/users/${user.id}/edit`}>
                <Button variant="info">Edit</Button>{' '}
              </Link>
              <Link to={""}>
                <Button variant="danger" onClick={()=>{deleteUser(user)}}>Delete</Button>{' '}
              </Link>
              
              </td>
              
            </tr>

          )
        }
        
      
      </tbody>
    </Table>
    </div>
  )
}

export default List