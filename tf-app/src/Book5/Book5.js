// src/Book5/Book5.js
import React from 'react';
import './Book5.css';

const Book5 = ({ addToCart }) => {
    const book5 = {
        id: 1,
        title: "24 de Agosto de 1820: a revolução em imagens",
        authors: "Luís Costa Dias; Paulo Jorge Fernandes (coords.)",
        year: 2022,
        description: "A revolução Liberal de 1820, os acontecimentos, os lugares, as personagens e as representações visuais, incluindo os seus antecedentes e consequências, são os temas do levantamento iconográfico – que integrou a exposição 24 de Agosto de 1820: a Revolução em imagens – agora reunido nesta obra coordenada pelos investigadores Luís Costa Dias (BNP – IHC) e Paulo Jorge Fernandes (IHC – NOVA FCSH).",
        image: './livro5.png'
    };

    return (
        <div className="book-container">
            <h2>{book5.title}</h2>
            <img src="./livro5.png" alt={book5.title} />
            <p><strong>Authors:</strong> {book5.authors}</p>
            <p><strong>Year:</strong> {book5.year}</p>
            <p><strong>Description:</strong> {book5.description}</p>
            <p><strong>Collection:</strong> {book5.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book5;