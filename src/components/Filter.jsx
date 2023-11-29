import React from "react";

const Filter = ({ filter, setFilter }) => {

  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={setFilter}
    />
  );
};

export default Filter;
