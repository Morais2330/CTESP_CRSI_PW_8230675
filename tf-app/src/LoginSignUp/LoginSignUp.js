import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Simulando criação de conta
      const newUser = { name, email, password };
      console.log('New User:', newUser);
      // Redireciona para outra página após o cadastro
      window.location.href = '/MyAccount';
    } else {
      alert('Por favor, insira nome, email e senha.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulando login
      const loggedUser = { name: 'Francisco Morais', email, password };
      console.log('Logged User:', loggedUser);
      // Redireciona para outra página após o login
      window.location.href = '/MyAccount';
    } else {
      alert('Por favor, insira email e senha.');
    }
  };

  return (
    <div className="login-signup-container">
      {isLogin ? (
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="entrar">
                <a href="/MyAccount">Entrar</a>
              </div>
            </form>
            <div className="bottom-bar">
              <p>
                Não tem uma conta?{' '}
                <button type="button" onClick={() => setIsLogin(false)}>Cadastre-se</button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="signup">
              <a href="/MyAccount">Sign Up</a>
            </div>
          </form>
          <div className="bottom-bar">
            <p>
              Já tem uma conta?{' '}
              <button type="button" onClick={() => setIsLogin(true)}>Entre</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignUp;
