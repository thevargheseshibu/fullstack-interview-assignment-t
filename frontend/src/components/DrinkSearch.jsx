import { useState } from "react";
import { apiClient } from "../api/apiClient";
import Dashboard from "./Dashboard";
import URL from "../api/url";

export default function DrinkSearch() {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const searchDrinks = async () => {
    const result = await apiClient(
      "POST",
      BASE_URL+URL.search,
      { search: query }
    );

    if (result) setDrinks(result);
  };

  return (
    <div className="displaySearch">
      <input
        type="text"
        placeholder="Search drinks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchDrinks}>Search</button>

  
      <Dashboard drinks={drinks} />
    </div>
  );
}
