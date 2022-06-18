import React, { useState } from 'react'

import './AdicionarUsuario.css'

const AdicionarUsuario = (props) => {

const [nome, setNome] = useState('')
const [sobreNome, setSobreNome] = useState('')
const [email, setEmail] = useState('')

  const onSubmitHandler = async event => { 
    event.preventDefault()

    const usuario = {nome, sobreNome, email}

    const data = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usuario)
    }

    await fetch('https://reqres.in/api/users', data)
    .then( resp => resp.json())
    .then( data => {
      setNome('')
      setEmail('')
      setSobreNome('')
      
      props.adicionarUsuario(data)
    })

  }

    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={sobreNome}
                onChange={(e)=> setSobreNome(e.target.value)}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }


export default AdicionarUsuario