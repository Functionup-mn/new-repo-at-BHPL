import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
         <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path ="/contact" element = {<Contact/>}></Route>
          <Route path ="*" element= {<PageNotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
