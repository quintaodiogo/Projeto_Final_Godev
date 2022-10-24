import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
const Amazon = ({handleClick}) => {
  const categorie ="men";
  return (
    <>
      <section>
        {list.filter(item => item.categories.includes(categorie)).map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section></>
  );
};

export default Amazon;
