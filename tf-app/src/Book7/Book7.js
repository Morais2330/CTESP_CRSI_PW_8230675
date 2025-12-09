// src/Book7/Book7.js
import React from 'react';
import './Book7.css';

const Book7 = ({ addToCart }) => {
    const book7 = {
        id: 1,
        title: "A diáspora da palavra: obras de autores portugueses impressas fora de Portugal, 1521-1550. Guia da exposição",
        authors: "João José Alves Dias (coord.)",
        year: 2021,
        description: "Olhar a Exposição - fora da Exposição - é o que nos permite qualquer guia; rever e reencontrar não só o material que esteve presente, mas, também, as linhas invisíveis que estiveram na sua construção. Do muito que se produziu por portugueses e que saiu de prelos em funcionamento fora de fronteiras, entre 1521 e 1550, nessa diáspora da palavra impressa, o que se conserva no espólio à guarda da Biblioteca Nacional de Portugal e Biblioteca Pública de Évora.",
        image: './livro8.png'
    };

    return (
        <div className="book-container">
            <h2>{book7.title}</h2>
            <img src="./livro7.png" alt={book7.title} />
            <p><strong>Authors:</strong> {book7.authors}</p>
            <p><strong>Year:</strong> {book7.year}</p>
            <p><strong>Description:</strong> {book7.description}</p>
            <p><strong>Collection:</strong> {book7.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book7;