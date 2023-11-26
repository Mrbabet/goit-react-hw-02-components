import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilter = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
  };
  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={handleFilter}
    />
  );
};

export default Filter;
