import React, { useState } from 'react'

import './AdicionarUsuario.css'

const AdicionarUsuario = (props) => {

const [nome, setNome] = useState('')
const [sobreNome, setSobreNome] = useState('')
const [email, setEmail] = useState('')
const [openStausMensage, setOenStausMensage] = useState(true)
const [stausMensage, setStausMensage] = useState('')

  const onSubmitHandler = async event => { 
    event.preventDefault()

    const usuario = {nome, sobreNome, email}

    const data = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usuario)
    }

    await fetch('https://reqres.in/api/users', data)
    .then( resp => {
      if(resp.ok){
        setNome('')
        setEmail('')
        setSobreNome('')
        setOenStausMensage(true)
        setTimeout(() => {
          setOenStausMensage(false)
        }, 3000)
        setStausMensage('Usuario cadastrado com sucesso!')
      }
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
        {openStausMensage && <p className='mensage-stauts-title'>{stausMensage}</p>}
      </div>
    )
  }


export default AdicionarUsuario