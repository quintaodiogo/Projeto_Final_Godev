import React, { useState } from "react";
import list from "../../data";
import Cards from "../card";
import "../../styles/amazon.css";

const Clothes = ({ handleClick }) => {
  return (
    <section>
      {list.filter(item => item.categories.includes('clothes')).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Clothes;