import React, { useEffect, useState } from 'react';
import NavBarItem from './NavBarItem';

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem('user'));
    if (usuarioLogado) {
      setUser(usuarioLogado);
    }
  }, []);

  return (
    <div>
      <NavBarItem />
      <div className="container mt-5 shadow-lg p-5 mb-3 bg-dark blue rounded" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)' }}>
        <div className="jumbotron">
          <h1 className="display-3">
            <strong>Library Web</strong>
          </h1>
          <p className="lead">
            <strong>Seja bem-vindo, {user.name_user}</strong>
          </p>
          <hr className="my-4" />
          <p>Utilize nossa aplicação para maior comodidade</p>
        </div>
      </div>

    </div>
  );
};

export default Home;