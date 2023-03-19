import './App.css';
import Header from './Components/Header';
import {useState, useEffect} from 'react';

function App() {

  const [state, setState] = useState(10)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const res = await get.json()
      setData(res)
    }
    getData()

    document.title = `(${state}) Emplyes Online`
  }, [state])  // this is called  dependencies


  return (
      <div>
        <Header/>
        <button onClick={() => setState(state+5)}>Click Me {state}</button>
        {
          data.map((element, index) => {
           return( 
            <div className='data' key={index}>
              <h5>{element.firstName}</h5>
              <h5>{element.lastName}</h5>
              <h5>{element.email}</h5>
            </div>
           )
          })
        }
      </div>
  )
}

export default App;
