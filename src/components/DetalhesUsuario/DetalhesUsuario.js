import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

function DetalhesUsuario() {

    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then(resp => resp.json())
        .then(data => {
            if(data.data){
                setUser({
                    id: data.data.id,
                    name: data.data.first_name,
                    lastName: data.data.last_name,
                    email: data.data.email,
                    avatar: data.data.avatar,
                })
            }
        })
    }, [id])

    if(!user.name){
        return (
            <>
                <h1>User not found!</h1>
                <Link to='/usuarios'>Back</Link>
            </>
        )
    }
    
    return (
        <>
            <h1>{user.name} {user.lastName}</h1>
            <img src={user.avatar} alt={user.name}/>
            <p>{user.email}</p>
            <Link to='/usuarios'>Back</Link>
        </>
    )
}

export default DetalhesUsuario;