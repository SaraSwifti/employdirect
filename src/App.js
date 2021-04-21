
//importing components
import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavSearch";
import Employlist from "./components/EmployList";
import api from "./util/api";



 function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(function(){
    api.getEmployees().then(function(res){
      setEmployees(res.data.results);

    });

  },[])
console.log(employees);
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        
          {/* <Route exact path="/" component={Employlist} /> */}
        
        </div>
    </Router>
  );
}

export default App;
