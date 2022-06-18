import React, { useEffect, useState } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

const Usuarios = () => {
 const [usuarios, setUsuarios] = useState ([])

  const adicionarUsuario = usuario => {
    setUsuarios(usuariosAtual => [...usuariosAtual, usuario])
  }

  const removerUsuario = async (usuario) => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      
      const data = {
        method: 'DELETE'
      }

      await  fetch(`https://reqres.in/api/users/${usuario.id}`, data)
      .then(resp => {
        if(resp.ok) {
          let usuariosFil = usuarios.filter(x => x.id !== usuario.id)
          setUsuarios(usuariosFil)
        }
      })

    }
  }

  const getUsuarios = async () => {
    const resp = await fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(data => {
        const usuarios = data.data.map(usuario => {
          return {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email,
          }
        })

        setUsuarios(usuarios)
      })
  }

  useEffect(() => {
    getUsuarios()
  },[])
  
    return (
      <>
        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={()=> removerUsuario(usuario)}
          />
        ))}
      </>
    )
  }

export default Usuarios