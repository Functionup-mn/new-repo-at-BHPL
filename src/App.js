import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";
import Insta from "./Components/Insta";
import Mail from "./Components/Mail";
import UserDetails from "./Components/UserDetails";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home */}
          <Route index element={<Home/>}/>

          <Route path="/app" element={<Home/>}>
          </Route>
          {/* dyamic routes */}
            <Route path="/app/:userId" element={<UserDetails/>} />
          {/* About */}
          <Route path="/About" element={<About/>}></Route>
          {/* contact */}
          <Route path="/Contact" element={<Contact/>}>
            {/* nested routes */}
            <Route index element={<Insta/>}/>  {/* this is Index route */}
            <Route path="insta" element={<Insta/>} />
            <Route path="mail" element={<Mail/>}/>
          </Route>
          {/* Error */}
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </div>
      <Outlet/>
    </Router>
  );
}

export default App;
