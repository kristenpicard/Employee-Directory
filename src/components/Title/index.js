import React from "react";
import "./style.css";

function Title(props) {
  return <div><h1 className="title">{props.children}</h1>
  <div>
    Sort and find employees by typing in the search bar.  Employees can be found and/or sorted by first name, last name, email, city or state.
  </div>
  <br></br>
  </div>;
}

export default Title;
