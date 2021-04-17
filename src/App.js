//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div classNAme="container">
      <NavBar />;
      <Jumbotron />;
      <Card />;
    </div>
  );
}

export default App;
