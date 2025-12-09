import React from 'react';
import './NavBar.css';
import '../LoginSignUp/LoginSignUp.js';
import '../Catalogo/Catalogo.js';
import '../Book1/Book1.js';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="logo">
          <img src="./biblio.png"/>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="O que está à procura?" />
          <button ><i className="fa fa-search"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iD8hY5nzRun16k4fxX6sya1K6S1l5izglQ&s' width={35} ></img></i></button>
        </div>
        <div className="user-actions">
          <a href="/acount">A minha Conta</a>
          <a href="/cart">Carrinho</a>
        </div>
      </div>
      <div className="bottom-bar">
       <ul>      
        <li>
            <a href="/Catalogo">Catálogo</a>
         </li>
         <li>
            <a href="/Biblioteca">Sobre a biblioteca</a>
         </li>
       </ul>
      </div>
    </div>
  );
};

export default NavBar;