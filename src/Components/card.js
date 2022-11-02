import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ item, handleClick }) => {
  const { title, author, price, img, id } = item;
  return (
    // <Link key={id} to={`/Product/${id}`}>
      <div className="cards">
        <div className="image_box">
          <img src={img} />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Preço -R$ {price.toFixed(2)}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    // </Link>
  );
};

export default Cards;

// id, title, autor, price, img