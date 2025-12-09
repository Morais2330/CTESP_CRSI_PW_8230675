// src/Book3/Book3.js
import React from 'react';
import './Book3.css';

const Book3 = ({ addToCart }) => {
    const book3 = {
        id: 1,
        title: "Rui de Pina: 500 anos depois",
        authors: "Filipe Alves Moreira e Jorge Araújo",
        year: 2023,
        description: "Este catálogo tem como pretexto a mostra bibliográfica Rui de Pina: 500 anos depois, que esteve patente ao público na sala de referência da Biblioteca Nacional de Portugal, em Lisboa, entre 25 de janeiro e 20 de abril de 2022. Destinada a assinalar o meio milénio da morte do cronista Rui de Pina, mas evitando, ao mesmo tempo, limitar‑se a um comemorativismo estéril, esta mostra teve três objetivos principais: tornar visível a presença contínua da obra desse cronista na história e na cultura portuguesa; chamar a atenção para uma série de lacunas ainda existentes no estudo e na edição dessas obras; e, por último, publicitar e valorizar os acervos da Biblioteca Nacional de Portugal. Faremos, em seguida, um breve estudo sobre a figura e a obra de Rui de Pina e respetiva receção ao longo do tempo. Antes do catálogo, propriamente dito, haverá ainda lugar a uma pequena descrição da lógica expositiva aqui mantida e das opções documentais e bibliográficas em presença.",
        collection: "Catálogos",
        image: './livro3.png'
    };

    return (
        <div className="book-container">
            <h2>{book3.title}</h2>
            <img src="./livro3.png" alt={book3.title} />
            <p><strong>Authors:</strong> {book3.authors}</p>
            <p><strong>Year:</strong> {book3.year}</p>
            <p><strong>Description:</strong> {book3.description}</p>
            <p><strong>Collection:</strong> {book3.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book3;
