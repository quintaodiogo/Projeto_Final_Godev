import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bottom_header from "../Header/bottom-header";
import "../Menu/navbar_mobile.css";
const Menu = ({ setShow, size }) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };


  return (
    <div className="note">
      <nav>
        <div className="nav_box_menu">
        <Link to='/'><span className="my_shop_menu" onClick={() => setShow(true)}>
            GoDevShop
          </span></Link>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
      </nav>
      <div
        className={menu_class}>
        <ul className="listItems">
          <li className="list">
            <Link to='/roupas'><a>Roupas</a></Link>
          </li>
          <li className="list">
          <Link to='/acessorios'><a>Acessórios</a></Link>
          </li>
          <li className="list">
            <a onClick={() => setShow(false)}>Carrinho</a>
          </li>
          <li className="list">
            <Link to='/login'><a>Entrar</a></Link>
          </li>
          <li className="list">
          <Link to='/cadastro'><a>Cadastrar</a></Link>
          </li>
        </ul>
      </div>
      <Bottom_header />
    </div>
  );
};

export default Menu;
