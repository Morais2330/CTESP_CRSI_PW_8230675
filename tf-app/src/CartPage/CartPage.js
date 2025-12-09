import React, { useState } from 'react';
import './CartPage.css';

const books = [
  {
    id: 1,
    name: 'Livros de Coro Iluminados do século XVI. Catálogo da coleção da Biblioteca Nacional de Portugal',
    image: './livro1.png'
  },
  {
    id: 2,
    name: 'A China vista da Europa. Séculos XVI-XIX',
    image: './livro2.png'
  },
  {
    id: 3,
    name: 'Rui de Pina: 500 anos depois',
    image: './livro3.png'
  },
  {
    id: 4,
    name: 'Obras proibidas e censuradas no Estado Novo: Biblioteca dos Serviços de Censura e «Obras Proibidas» na Biblioteca Nacional',
    image: './livro4.png'
  },
  {
    id: 5,
    name: '24 de Agosto de 1820: a revolução em imagens',
    image: './livro5.png'
  },
  {
    id: 6,
    name: 'Um arquivo, doze documentos',
    image: './livro6.png'
  },
  {
    id: 7,
    name: 'A diáspora da palavra: obras de autores portugueses impressas fora de Portugal, 1521-1550. Guia da exposição',
    image: './livro7.png'
  },
  {
    id: 8,
    name: 'Oh, Vida, sê bela! Alberto de Lacerda (1928-2007)',
    image: './livro8.png'
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addBookToCart = (book) => {
    const currentTotalBooks = cartItems.length;

    if (currentTotalBooks >= 3) {
      alert("Você só pode adicionar até 3 livros ao carrinho.");
      return;
    }

    const existingBook = cartItems.find(item => item.id === book.id);
    if (existingBook) {
      alert("Este livro já está no carrinho.");
    } else {
      setCartItems([...cartItems, { ...book }]);
    }
  };

  const removeBookFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item.id !== bookId));
  };

  const handleCheckout = () => {
    alert("Empréstimo realizado com sucesso! Os livros podem ser emprestados por um máximo de 15 dias.");
    setCartItems([]); // Limpa o carrinho
  };

  return (
    <div className="cart-page">
      <h1>Carrinho de Empréstimo</h1>
      <div className="books-container">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.name} />
            <div className="book-details">
              <h2>{book.name}</h2>
              <button onClick={() => addBookToCart(book)}>Adicionar ao Carrinho</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Itens no Carrinho</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <button className="remove-button" onClick={() => removeBookFromCart(item.id)}>🗑️</button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <button className="checkout-button" onClick={handleCheckout}>Proceder ao Empréstimo</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
