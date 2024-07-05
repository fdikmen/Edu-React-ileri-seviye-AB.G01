import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "core/Header";
import DataGrid from "core/DataGrid";

const mockData = [
  { id: 1, firstName: 'Alice', lastName: 'Johnson', age: 32, email: 'alice@example.com' },
  { id: 2, firstName: 'Bob', lastName: 'Smith', age: 28, email: 'bob@example.com' },
  { id: 3, firstName: 'Eve', lastName: 'Williams', age: 41, email: 'eve@example.com' },
  { id: 4, firstName: 'Michael', lastName: 'Brown', age: 39, email: 'michael@example.com' },
  { id: 5, firstName: 'Sarah', lastName: 'Davis', age: 36, email: 'sarah@example.com' },
];


const App = () => (
  <>
  <Header />
  <div className="container">
    <div>Name: projectA</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <DataGrid data={mockData}/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
