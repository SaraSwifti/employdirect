
//importing components
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Card from "./components/Card/index";
import Wrapper from "./components/Wrapper/index";


function App() {
  return (
    <Router>
      <div>
        <NavBar>

        </NavBar>
        <Wrapper>
          <div>
          <Route exact path="/" component={Card} />
      </div>
      <Card />
    </Wrapper>
      </div>
    </Router>
  );
}

export default App;
