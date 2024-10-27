import { useState } from 'react';
import './Header.module.css';

export function Header(){
    const [tema,setTema] = useState('Claro')
    const mudarTema = ()=>{
        setTema(tema==='Claro'?'Escuro':'Claro');
    }
    return(
        <header>
            <h2>Logo</h2>
            <button onClick={mudarTema}>Tema:{tema}</button>
        </header>
    )
}