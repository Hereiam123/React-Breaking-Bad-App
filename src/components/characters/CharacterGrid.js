import React from "react";
import Character from "./Character";
import spinner from "../../img/spinner.gif";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <img src={spinner} />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </section>
  );
};

export default CharacterGrid;
