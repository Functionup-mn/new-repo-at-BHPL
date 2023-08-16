import './App.css';
import {Table} from 'react-bootstrap'

function App() {

  const users = [
    {name: 'John', email: 'john@gmail.com', contact: 1231},
    {name: "Adam", email: 'adam@gmail.com', contact: 3141},
    {name: 'peter', email: 'peter@gmail.com', contact: 1616}
  ]
  return (
    <div className='App'>
      <h1>List with Bootsrtap Table</h1>

      <Table striped hover bordered variant='dark'>
        <tbody>
          <tr>
          <td>S.No.</td>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
          
          </tr>
          {
             users.map((item,i) =>
                 <tr key={i}>
                  <td>{++i}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                 </tr>
             )
          }
        </tbody>
      </Table>

    </div>
  )
}

export default App;
