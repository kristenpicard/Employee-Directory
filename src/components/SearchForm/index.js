import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Search by Employee Name: </label>
        <input
          onChange={(event) => props.startSort(event)}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Search Employee"
        />
      </div>
    </form>
  );
}

export default SearchForm;
