import React, { useState } from "react";
import list from "../../data";
import Cards from "../card";
import "../../styles/amazon.css";

const Acessorios = ({ handleClick }) => {
  return (
    <section>
      {list.filter(item => item.categories.includes('acessories')).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Acessorios;