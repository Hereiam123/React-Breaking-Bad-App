import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <SearchBar
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
