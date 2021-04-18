import React from 'react';
import "./Card.css";

export default function card(props) {
  return (

    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Occupation:</strong> {props.occupation}
              </li>
              <li>
                <strong>Location:</strong> {props.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}