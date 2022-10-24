import React, { useState } from "react";
const Cards = ({ item, handleClick }) => {
  const { title, author, price, img, categorie } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Preço -R$ {price.toFixed(2)}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img