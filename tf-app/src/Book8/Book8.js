// src/Book8/Book8.js
import React from 'react';
import './Book8.css';

const Book8 = ({ addToCart }) => {
    const book8 = {
        id: 1,
        title: "Oh, Vida, sê bela! Alberto de Lacerda (1928-2007)",
        authors: "Luís Amorim de Sousa; Mary Porter de Sousa",
        year: 2020,
        description: "Alberto de Lacerda (1928-2007) viveu quase sempre no estrangeiro e foi esquecido em Portugal. Mas nunca se esqueceu do seu país e levou as letras e a cultura portuguesa sobretudo para o Reino Unido e os Estados Unidos onde viveu a maior parte da sua vida. Nascido na Ilha de Moçambique, em 1928, parte para Lisboa em 1946 com o projeto de estudar Francês e Inglês e publicar um livro de poesia, que Luís de Montalvor se comprometeu a editar. Em 1951, tendo-se relacionado com o melhor do meio literário da época, e publicado nas revistas literárias mais destacadas, parte para Londres para trabalhar como locutor da Secção Portuguesa da BBC. Findo o contrato de três anos, foi-se mantendo precariamente em Londres a depender de trabalhos de ocasião como jornalista, tradutor e intérprete. Aí viveu a maior parte da sua vida. O meio cultural londrino acolheu-o sem reservas. Colaborou no Times Literary Supplement e noutras revistas literárias: The Listener, The Spectator, Encounter, Botteghe Oscure, Cahiers des Saisons. Ensinou depois na Universidade do Texas, em Austin, e posteriormente na Universidade de Boston, onde se manteve até à reforma, tendo também lecionado esporadicamente na Universidade de Columbia, em Nova Iorque. Ao longo da vida privou e foi amigo de poetas, escritores, tradutores, pintores, artistas, que lhe dedicaram poemas, livros, lhe ofereceram desenhos e pinturas, lhe pintaram o retrato. Entre muitos outros, em Portugal, referem-se: Almada Negreiros, Lopes-Graça, Jorge de Sena, Eugénio de Andrade, Sophia de Mello Breyner, Herberto Helder, Mário de Cesariny, Júlio Pomar, Cruzeiro Seixas, Paula Rego, Vieira da Silva, Arpad Szenes. No Brasil, Manuel Bandeira, Carlos Drummond de Andrade e Oscar Niemeyer. Em Londres e nos Estados Unidos, Edith Sitwell, Stephen Spender, John Ashbery, Roger Shattuck, Elizabeth Bishop, Marianne Moore, Anne Sexton, Louis Zukofsky, Robert Duncan, Jorge Guillén, Octavio Paz ou Jhumpa Lahi Foi ainda um colecionador obsessivo, construindo à sua volta um vasto e multirramificado mundo feito de livros, discos, fotografias, manuscritos, obras de arte. Na exposição Oh, Vida, sê bela! Alberto de Lacerda (1928-2007), que decorreu na Biblioteca Nacional de Portugal, entre 2 de outubro de 2017 e 13 de janeiro de 2018.",
        image: './livro8.png'
    };

    return (
        <div className="book-container">
            <h2>{book8.title}</h2>
            <img src="./livro8.png" alt={book8.title} />
            <p><strong>Authors:</strong> {book8.authors}</p>
            <p><strong>Year:</strong> {book8.year}</p>
            <p><strong>Description:</strong> {book8.description}</p>
            <p><strong>Collection:</strong> {book8.collection}</p>
            <div className="cart">
          <a href="/cart">Adicionar ao carrinho</a>
          </div>
        </div>
    );
};

export default Book8;