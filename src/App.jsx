import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//import LedController from './components/LedController';
import DataTable from './components/Datatable';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const userData = [];
  const getData = () => {
    axios
      .get('https://dummyjson.com/users')
      .then((data) => {
        this.userData = data.data;
        console.log(userData);
      })
      .catch((error) => console.log(error));
  };
  // useEffect(() => {
  //   axios
  //     .get('https://dummyjson.com/users')
  //     .then((data) => console.log(data.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <LedController></LedController> */}
      <button onClick={getData}>Get Data</button>
      <DataTable></DataTable>
    </>
  );
}

export default App;
