import React from 'react';
import "./style.css";

 function Employlist (props) {
  return (
    <div className="container">
    <div className="card"> 
    <img alt={props.name} src={props.image} />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name:{props.name}</li>
        <li className="list-group-item">Name:{props.location}</li>
        <li className="list-group-item">Name:{props.email}</li>
        <li className="list-group-item">Name:{props.phone}</li>
      </ul>
    </div>
  </div>
);
}
export default Employlist;