
// Filter.js
import React from "react";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Rechercher un film..."
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Note minimale"
        onChange={(e) => setSearchRating(Number(e.target.value))}
        style={{ padding: "5px" }}
      />
    </div>
  );
};

export default Filter;
