import React from "react";
import { IoMdClose } from 'react-icons/io'
import user from '../user.png'
import { formatRelative } from 'date-fns'
import {ptBR} from 'date-fns/locale'
import './Comentario.css'

export default function Comentario(props) {

    const estilo = {
        color: 'red',
        paddin: '10px',
        fontSize: '40px'
    }
    
    return (
        <div className="comentario">
            <img className="avatar" src={user} alt={props.nome}/>
            <div className="conteudo">
                <div>
                    <h2 className="nome" >{props.nome}:</h2>
                    <p className="email">{props.email}</p>
                    <p className="mensagem">{props.children}</p>
                </div>
                <div className="box_end">
                    <IoMdClose className="remuve" onClick={props.remove}/>
                    <p className="data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
                </div>
            </div>
        </div>
    )
}