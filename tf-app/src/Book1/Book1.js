// src/Book1/Book1.js
import React from 'react';
import './Book1.css';

const Book1 = ({ addToCart }) => {
    const book1 = {
        id: 1,
        title: "Livros de Coro Iluminados do século XVI. Catálogo da coleção da Biblioteca Nacional de Portugal",
        authors: "Isabel Cepeda com a colaboração científica e técnica de Teresa Duarte Ferreira",
        year: 2024,
        description: "O presente catálogo Livros de Coro Iluminados do século XVI. Catálogo da coleção da Biblioteca Nacional de Portugal, de Isabel Cepeda e com a colaboração científica e técnica de Teresa Duarte Ferreira, é uma contribuição inestimável para o conhecimento de um fundo bibliográfico rico em valor histórico, artístico e codicológico. A este valor, acresce o vínculo patrimonial que advém da sua ligação, não só a ordens religiosas, por vezes de raiz portuguesa (Lóios), como a mosteiros ou conventos específicos, sobretudo femininos, disseminados por grande parte do território nacional (de sul para norte: Beja, Évora, Setúbal, Lisboa, Odivelas, Alenquer, Almeirim, Portalegre, Coimbra, Lorvão, Porto, Guimarães, Braga e Viana do Castelo). Centrado no século XVI, este catálogo contempla livros que passaram pelas melhores oficinas de iluminura de então (António Fernandes, António de Holanda), a par de outros volumes de execução gráfica mais modesta; grande parte deles conserva as encadernações originais, cuja robustez era importante para o desempenho da sua missão primordial.",
        collection: "Catálogos",
        image: './livro1.jpg'
    };

    return (
        <div className="book-container">
            <h2>{book1.title}</h2>
            <img src="./livro1.png" alt={book1.title}/>
            <p><strong>Authors:</strong> {book1.authors}</p>
            <p><strong>Year:</strong> {book1.year}</p>
            <p><strong>Description:</strong> {book1.description}</p>
            <p><strong>Collection:</strong> {book1.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book1;

