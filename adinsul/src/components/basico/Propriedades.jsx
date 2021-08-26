import React from 'react';

export default function Propriedades(props) {
    return(
        <div>
            <h3>Nome: {props.nome}{props.sobrenome}</h3>
            <h3>Curso: {props.curso}</h3>
        </div>
    )
}