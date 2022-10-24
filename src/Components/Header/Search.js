import React, { useState } from "react";
const Search = () => {
  const [search,setsearch]=useState('');
  return (
    <div className="search-container">
      <a className="search-btn" href={search}>
        <i className="fas fa-search search"></i>
      </a>
      <input type="text" className="input" name="searchBox" placeholder="Pesquisar Produtos" onChange={e=> setsearch(e.target.value)} value={search}/>
    </div>
  );
}

export default Search;
