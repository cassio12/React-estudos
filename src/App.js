import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';

import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Inicío</NavLink>
              </li>
              <li>
                <NavLink to='/usuarios'>Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to='/adicionar'>Adicionar Usuários</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
          <Route path="/adicionar" element={<AdicionarUsuario/>} />
          <Route path='*' element={<PageNotFound/>}/>
         </Routes>
        </main>
      </div>
    </Router>
  );
}

const PageNotFound = () => {
  return(
    <>
      <h1>404</h1>
      <p>Page not found</p>
    </>
  )
}

export default App;
