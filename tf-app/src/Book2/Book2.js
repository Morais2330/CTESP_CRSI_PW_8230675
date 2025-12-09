// src/Book2/Book2.js
import React from 'react';
import './Book2.css';

const Book2 = ({ addToCart }) => {
    const book2 = {
        id: 1,
        title: "A China vista da Europa. Séculos XVI-XIX",
        authors: "Alexandra Curvelo, Angelo Cattaneo e Rui Lourido",
        year: 2023,
        description: "Este catálogo resulta de uma exposição com o mesmo nome organizada, pelo Observatório da China e a Biblioteca Nacional de Portugal, com o apoio de universidades de Portugal, de Itália e da China e teve como objetivos contribuir para um melhor conhecimento da história e das relações longas e pacificas entre Portugal e a China e refletir sobre a importância dos laços culturais e civilizacionais no aprofundamento de pontes, sinergias e amizade existentes entre Portugal/Europa e a China. A exposição, que decorre entre 29 de novembro de 2023 e 2 de março de 2024, apresenta momentos relevantes da construção da imagem da China a partir da Europa dos séculos XVI a XIX, através da cartografia de origem portuguesa, roteiros, obras literárias, objetos de chinoiserie e outras peças das coleções da Biblioteca Nacional de Portugal, das Bibliotecas da Ajuda e Biblioteca Pública de Évora, do Museu Nacional de Arte Antiga, do Museu do Centro Científico e Cultural de Macau, das Fundações Oriente, Medeiros e Almeida e Jorge Álvares e de instituições internacionais, designadamente o Museu Galileo, em Florença, a Biblioteca da Hong Kong University of Science e Technology, a Biblioteca da Universidade do Minnesota e a James Ford Bell Library.",
        collection: "Catálogos",
        image: './livro2.png'
    };

    return (
        <div className="book-container">
            <h2>{book2.title}</h2>
            <img src="./livro2.png" alt={book2.title} />
            <p><strong>Authors:</strong> {book2.authors}</p>
            <p><strong>Year:</strong> {book2.year}</p>
            <p><strong>Description:</strong> {book2.description}</p>
            <p><strong>Collection:</strong> {book2.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book2;