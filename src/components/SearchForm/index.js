import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Search by Employee Name:&nbsp;</label>
       
        <input
          onChange={(event) => props.startSort(event)}
          name="employee"
          type="text"
          className="form"
          placeholder="Search Employee"
        />
      </div>
    </form>
  );
}

export default SearchForm;
