import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const users = [
    {
      name: "John",
      email: "john@gmail.com",
      address: [
        { HN: "10", city: "Noida", country: "India" },
        { HN: "106", city: "Gurgaon", country: "India" },
        { HN: "1078", city: "Delhi", country: "India" },
        { HN: "103", city: "Gaziyabad", country: "India" },
      ],
    },
    {
      name: "Adam",
      email: "adam@gmail.com",
      address: [
        { HN: "10", city: "Noida", country: "India" },
        { HN: "106", city: "Gurgaon", country: "India" },
        { HN: "1078", city: "Delhi", country: "India" },
        { HN: "103", city: "Gaziyabad", country: "India" },
      ],
    },
    {
      name: "peter",
      email: "peter@gmail.com",
      address: [
        { HN: "10", city: "Noida", country: "India" },
        { HN: "106", city: "Gurgaon", country: "India" },
        { HN: "1078", city: "Delhi", country: "India" },
        { HN: "103", city: "Gaziyabad", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>List with Bootsrtap Table</h1>

      <Table striped hover bordered variant="dark">
        <tbody>
          <tr>
            <td>S.No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{++i}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table variant="dark" striped>
              <tbody>
                <tr>
                  <td>House No.</td>
                  <td>City</td>
                  <td>Country</td>
                </tr>
                {
                  item.address.map((data,j) =>
                 <tr key={j}>
                  <td>{data.HN}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                 </tr>
                  )
                }
                </tbody>
                </Table>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
