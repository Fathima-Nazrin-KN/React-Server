import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function View() {
  const {userid }= useParams();

  const [user,setUser] = useState(undefined);

  const fetchUser = async()=>{
   let response = await axios.get("http://localhost:8000/users/" + userid);
   setUser(response.data)
  };
  useEffect(()=>{fetchUser()},[userid]);

  if(user === undefined)
    return <div>Loading</div>;
  

  return (
    <div>
    <Card>
      <Table>
        <tbody>
            <tr>
                <td>ID</td>
                <td>{userid}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td>Age </td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Premium member</td>
                <td>{user.premiumMember?"yes":"No"}</td>
            </tr>

          </tbody>
        </Table>
    </Card>
    </div>
  )
}

export default View