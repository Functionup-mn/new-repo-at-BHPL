import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Routing Basics</h1>
      <Router>
        <NavLink to="/">Home Page</NavLink>
        <br />
        <NavLink to="/about">About Page</NavLink>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is Home Page of my website</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About Page of my website</p>
    </div>
  );
}

export default App;
