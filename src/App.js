import React, { useEffect, useState } from 'react'
import './App.css';
import Comentario from './components/Comentario';

const comentar = [ {
  nome: 'João',
  email: 'joão.carlos@gmail.com',
  data: new Date(2022, 3, 19),
  mensagem: 'Olá, tuode bem?'
},
{
  nome: 'Maria',
  email: 'maria.madalena@gmail.com',
  data: new Date(2022, 3, 19),
  mensagem: 'Tudo, e com você?'
},]

function App() {
  const [comentarios, setComentarios] = useState([])
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMsn] = useState('')

  const addComentario = (e) => {
    e.preventDefault()
    const novoComent = {
      nome: nome,
      email: email,
      data: new Date(),
      mensagem: mensagem
    }

    setComentarios([...comentarios, novoComent])
    setNome('')
    setEmail('')
    setMsn('')
  }

  const remover = (comentario) => {
    const novaLista = comentarios.filter(item => item !== comentario)
    setComentarios(novaLista)
  }

  useEffect(() => {
    setComentarios(comentar)
  },[])

  return (
    <div className="App">
      <h1>Meu pimeiro projeto</h1>

      {comentarios.map((comentario, index) => (
        <Comentario key={index}
        nome={comentario.nome} 
        email={comentario.email} 
        data={comentario.data}
        remove={() => remover(comentario)}
        >
          {comentario.mensagem}
        </Comentario>
      ))}
      <form className='form' method='post' onSubmit={addComentario}>
        <h2 className='title_form'>Adicinar Comentario</h2>
        <div>
          <input onChange={(e) => setNome(e.target.value)} name='nome' placeholder='Digite seu nome' value={nome}/>
        </div>
        <div>
          <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='Digite seu email' value={email}/>
        </div>
        <div>
          <textarea className='caixa_msg' onChange={(e) => setMsn(e.target.value)} name='mensagem' rows='4' value={mensagem}/>
        </div>
        <button className='btn_submit' type='subimit'>add comentario</button>
      </form>
    </div>
  );
}

export default App;
