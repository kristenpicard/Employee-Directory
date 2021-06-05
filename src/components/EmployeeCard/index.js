import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName}{props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.phone}
          </li>
          <li>
            <strong>Location:</strong> {props.city}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default EmployeeCard;

