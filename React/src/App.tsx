import React, { useState } from "react";
import "./App.css";

function App() {
  const characterStatuslist = ["all", "dead", "uknown", "alive"];

  const [currentSelectedStatus, setCurrentSelectedStatus] = useState("");
  return (
    <div>
      <h1>Rick and Morty</h1>
      <label htmlFor="search-input">Szukajka</label>
      <input id="search-input" placeholder="search" />
      <button>Search</button>
      <select
        onChange={(e) => {
          setCurrentSelectedStatus(e.target.value);
          console.log(currentSelectedStatus);
        }}
      >
        {characterStatuslist.map((status) => (
          <option key={status} value={status === "all" ? "" : status}>
            {status}
          </option>
        ))}
        ;
      </select>
      <br />
      Aktualny status: {currentSelectedStatus}
    </div>
  );
}
export default App;
