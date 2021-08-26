import React, {useState} from 'react';

export default props => {
    const [curso, setCurso] = useState('Desenvolvimento de Sistemas')
    const [serie, setSerie] = useState('3ºDS-A')

    return(
        <div>
            <h3>Curso: {curso}</h3>
            <h3>Serie: {serie}</h3>

        </div>
        
    )
}