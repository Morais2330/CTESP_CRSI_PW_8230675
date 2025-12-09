// src/Book6/Book6.js
import React from 'react';
import './Book6.css';

const Book6 = ({ addToCart }) => {
    const book6 = {
        id: 1,
        title: "Um arquivo, doze documentos",
        authors: "Alice Borges Gago",
        year: 2022,
        description: "Catálogo da mostra patente na Biblioteca Nacional de Portugal (BNP), entre maio de 2021 e abril de 2022, que reúne os textos e as imagens de doze documentos pertencentes ao arquivo Almada e Lencastre Bastos (séculos XIV-XX), um dos maiores acervos de família depositados na BNP. A mostra contou com organização do Instituto de Estudos Medievais (Universidade Nova, Faculdade de Ciências Sociais e Humanas) e colaboração do Projecto Vinculum, financiado pelo European Research Council.",
        image: './livro6.png'
    };

    return (
        <div className="book-container">
            <h2>{book6.title}</h2>
            <img src="./livro6.png" alt={book6.title} />
            <p><strong>Authors:</strong> {book6.authors}</p>
            <p><strong>Year:</strong> {book6.year}</p>
            <p><strong>Description:</strong> {book6.description}</p>
            <p><strong>Collection:</strong> {book6.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book6;