// src/Catalogo/Catalogo.js
import React from 'react';
import './Catalogo.css';

function Catalogo() {
    return (
        <div className="Catalogo">
            <header className="Catalogo-header">
                <p className="Catalogo-title">CATÁLOGO</p>
            </header>
            <div className="Catalogo-details">
                {[
                    { id: 'Book1', img: 'livro1.png', title: 'Livros de Coro Iluminados do século XVI. Catálogo da coleção da Biblioteca Nacional de Portugal' },
                    { id: 'Book2', img: 'livro2.png', title: 'A China vista da Europa. Séculos XVI-XIX' },
                    { id: 'Book3', img: 'livro3.png', title: 'Rui de Pina: 500 anos depois' },
                    { id: 'Book4', img: 'livro4.png', title: 'Obras proibidas e censuradas no Estado Novo: Biblioteca dos Serviços de Censura e «Obras Proibidas» na Biblioteca Nacional' },
                    { id: 'Book5', img: 'livro5.png', title: '24 de Agosto de 1820: a revolução em imagens' },
                    { id: 'Book6', img: 'livro6.png', title: 'Um arquivo, doze documentos' },
                    { id: 'Book7', img: 'livro7.png', title: 'A diáspora da palavra: obras de autores portugueses impressas fora de Portugal, 1521-1550. Guia da exposição' },
                    { id: 'Book8', img: 'livro8.png', title: 'Oh, Vida, sê bela! Alberto de Lacerda (1928-2007)' }
                ].map(book => (
                    <div className="book" key={book.id}>
                        <a href={`/${book.id}`} className="book-link">
                            <img src={book.img} alt={book.title} className="book-image" />
                            <p className="book-title">{book.title}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalogo;
