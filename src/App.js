
//importing components
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Card from "./components/Card/index";
import Wrapper from "./components/Wrapper/index";
import Employlist from "./components/Employlist";


export default function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <div>
          <Route exact path="/" component={Employlist} />
        </div>
        </div>
    </Router>
  );
}


