
//importing components
import React from "react";
import {browserRouter as Router, Route } from "react-router-dom";
import Card from "./components/Card/index";
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";


function App() {
  return (
    <Router>
    <Wrapper className="container">
      <NavBar />
      <Card />
    </Wrapper>
    </Router>
  );
}

export default App;
