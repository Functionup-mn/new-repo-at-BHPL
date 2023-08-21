import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import User from "./Components/User"
import "./App.css";

function App() {
  let Users = [
    {id: 1, name: "John", email: "john@gmail.com", password: "123"},
    {id: 2, name: "Peter", email: "peter@gmail.com", password: "103"},
    {id: 3, name: "Adam", email: "adam@gmail.com", password: "128"},
    {id: 4, name: "Michale", email: "michale@gmail.com", password: "183"},
    {id: 5, name: "Henry", email: "henry@gmail.com", password: "675"},
    {id: 14, name: "Julie", email: "julie@gmail.com", password: "163"},
  ]
  return (
    <div className="App">
      <Router>
        
        <h1>Dynamic Routing</h1>
         {
          Users.map((item,i)=>
             <div key={i}>
              <Link to= {"/user/"+item.id +'/'+item.name}><h1>{item.name}</h1></Link>
             </div>
          )
         }
         <Routes>
         <Route path="/user/:id/:name"><User/></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
