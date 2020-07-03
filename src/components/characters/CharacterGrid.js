import React from "react";
import spinner from "../../img/spinner.gif";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <img src={spinner} />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h1 key={item.char_id}>{item.name}</h1>
      ))}
    </section>
  );
};

export default CharacterGrid;
