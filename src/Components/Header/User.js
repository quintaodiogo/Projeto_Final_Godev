import React from "react";
import { Link } from "react-router-dom";
const User = ({ setShow, size }) => {
  return (
    <div className="user-container">
      <Link to='/cadastro'><a className="userIcon cadastro">
        Cadastro
      </a></Link>
      <Link to='/login'><a className="userIcon login">
        Entrar
      </a></Link>
    </div>
  );
};

export default User;
