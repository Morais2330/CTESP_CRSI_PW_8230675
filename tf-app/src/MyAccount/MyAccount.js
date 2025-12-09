import React from 'react';
import './MyAccount.css';

const MyAccount = ({ user, purchaseHistory }) => {
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="my-account-container">
      <h1>Minha Conta</h1>
      <div className="user-data">
        <h2>Meus Dados</h2>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="purchase-history">
        <h2>Histórico de Compras</h2>
        {purchaseHistory.length === 0 ? (
          <p>Você não tem compras anteriores.</p>
        ) : (
          purchaseHistory.map(purchase => (
            <div key={purchase.id} className="purchase-item">
              <h3>Compra em {purchase.date}</h3>
              <ul>
                {purchase.items.map((item, index) => (
                  <li key={index}>
                    {item.quantity} x {item.name} - {item.price.toFixed(2)} €
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> {calculateTotal(purchase.items)} €</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyAccount;


