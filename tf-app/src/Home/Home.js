import './Home.css';
import NavBar from '../NavBar/NavBar';
import React from 'react';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <header className="Home-header">
        <div className="Home-content">
          <img src="biblioteca.png" className="Home-logo" alt="logo" />
          <div className="Home-text">
            <p>
              Veja o site da nossa Biblioteca e encomende os livros à sua disposição
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
