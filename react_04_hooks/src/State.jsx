import React, { useState } from 'react';

export function Formulario(){
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');


    function handleClick(event){
        event.preventDefault();
        alert(`${email}, ${senha}`)
    }

    return(
        <form onSubmit={handleClick}>
            <input type="email" value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
            <input type="password" value={senha} onChange={(ev)=>setSenha(ev.target.value)}/>
            <button type='submit'>Enviar</button>
        </form>
    )
}