
import './App.css';
import Header from './Component/Header';
import useFetch from './Component/useFetch';


function App() {
     const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
    
  return (
    <div className='myApp'>
    <Header/>
    {data.map((event, index) =>{
      return <h1 key={index}>{event.firstName}</h1>
    })}
    </div>
  )
}

export default App;

