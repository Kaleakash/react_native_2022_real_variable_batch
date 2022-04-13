import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './component/Employee';

function App() {
  return (
    <div className="App">
     <h2>React Js with Typescript</h2>
     <Employee id={100} name='Ravi'></Employee>
     <Employee id={101} name='Ramesh' age={23}></Employee>
     <Employee id={100} name='Ravi'></Employee>
    </div>
  );
}

export default App;
