import './App.css'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
     <Navbar title="Blog" aboutText="About Blog"/>
     <div className="container my-3">
     <TextForm heading="Enter the text to analyze below"/>
     </div>
     {/* <Navbar/> */}
   </>
  );
}

export default App;
