import React from 'react'
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu pimeiro projeto</h1>
      <Comentario nome='João' email='João@gmail.com' data={new Date(2022, 3,19)}>
        Olá tudo bem ?
      </Comentario>
      <Comentario nome='Maria' email='Maria@gmail.com' data={new Date(2022, 3, 23)}>
        Tudo e com você?
      </Comentario>
    </div>
  );
}

export default App;
