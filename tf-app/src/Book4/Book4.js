// src/Book4/Book4.js
import React from 'react';
import './Book4.css';

const Book4 = ({ addToCart }) => {
    const book4 = {
        id: 1,
        title: "Obras proibidas e censuradas no Estado Novo: Biblioteca dos Serviços de Censura  e «Obras Proibidas» na Biblioteca Nacional",
        authors: "Coord. Álvaro Seiça, Luís Sá e Manuela Rego. Estudos de Álvaro Seiça e José Pedro Castanheira",
        year: 2022,
        description: "Que livros não se podiam ler durante o Estado Novo? Entre 1934 e 1974, os censores redigiram mais de 10 000 relatórios de leitura a livros de autores portugueses e estrangeiros. Acusados de serem «imorais, pornográficos, comunistas, irreligiosos, subversivos, maus, antissociais, anarquistas ou revolucionários», os livros censurados abrangem todas as áreas do saber. O presente catálogo testemunha o modo como a ditadura amputou e desfigurou a vida cultural, o desenvolvimento das mentalidades e afetou as gerações vindouras. O catálogo compila, pela primeira vez, os livros resgatados da Biblioteca dos Serviços de Censura e as «Obras Proibidas» de ir à leitura na Biblioteca Nacional. É complementado por imagens de capas e de páginas com cortes, pela transcrição de relatórios de leitura e por ensaios introdutórios de Álvaro Seiça e José Pedro Castanheira.",
        image: './livro4.png'
    };

    return (
        <div className="book-container">
            <h2>{book4.title}</h2>
            <img src="./livro4.png" alt={book4.title} />
            <p><strong>Authors:</strong> {book4.authors}</p>
            <p><strong>Year:</strong> {book4.year}</p>
            <p><strong>Description:</strong> {book4.description}</p>
            <p><strong>Collection:</strong> {book4.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book4;
