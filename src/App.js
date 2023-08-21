import React, { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users').then((result)=>{
      result.json().then((resp)=>{
        // console.log(resp);
        setData(resp);
      })
  })
 })
  return (
    <div className="App">
      <h1>Get Api Call</h1>
      <Table striped variant="dark">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {
             data.map((item)=>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
              </tr>
             )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
