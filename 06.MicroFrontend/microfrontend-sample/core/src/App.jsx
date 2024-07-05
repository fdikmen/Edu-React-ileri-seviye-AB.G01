import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./components/Header";
import DataGrid from "./components/DataGrid";

const mockData = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Sam Johnson', age: 45, email: 'sam@example.com' },
];


const App = () => (
  <>
  <Header />
  <div className="container">
    <div>Name: core</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <DataGrid data={mockData}/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
