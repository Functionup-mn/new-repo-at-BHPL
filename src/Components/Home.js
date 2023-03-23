import { useEffect, useState } from "react";
import React  from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
    }
    getData();

    document.title = `(${state}) Emplyes Online`;
  }, [state]); // this is called  dependencies

  return (
    <div>
      <button className="btn" onClick={() => setState(state + 5)}>Click Me {state}</button>
      {data.map((element, index) => {
        return (
         <Link to={`/app/${element.id}`}><div className="data" key={index}>
            <h5>{element.firstName}</h5>
            <h5>{element.lastName}</h5>
            <h5>{element.email}</h5>
          </div></Link>
        );
      })}
    </div>
  );
};

export default Home;
