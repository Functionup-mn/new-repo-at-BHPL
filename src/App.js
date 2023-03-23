import React from 'react';
import './App.css';
import Header from './Component/Header';
import ComA from './Component/ComA';
import { useState, createContext } from 'react';

const AppState = createContext();

function App() {
  const [data, setData] = useState("Web3Mantra")
  const [name, setName] = useState({MyName: "Nadeem", age: 24})
  return (
    <div>
       <AppState.Provider value={{data,name}}>   {/* we are passing here an object to send multiple data */}
        <Header/>
        <ComA />
      </AppState.Provider>
    </div>
  );
}

export default App;
export {AppState}
