import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <tr className="tr">
      <td className="img-container">
        <img className="img" alt={props.firstName} src={props.picture} />
      </td>

      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>
        {props.city}, {props.state}
      </td>
    </tr>
  );
}

export default EmployeeCard;
