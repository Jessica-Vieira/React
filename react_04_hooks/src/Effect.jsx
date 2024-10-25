import React, {useState, useEffect} from "react";

export function MudarTema(){
    const [ativo, setAtivo] = React.useState(true);
    const [cor, setCor] = React.useState('#000');
    const [corFundo, setCorFundo] = React.useState('#fff');

    useEffect(()=>{
        if(ativo){
            setCor('#000');
            setCorFundo('#fff')
        }else{
            setCor('#fff');
            setCorFundo('#000')
        }
        console.log(cor)
    }, [ativo])

    return(
        <button style={{
            backgroundColor: corFundo,
            color: cor,
            border:"none",
            width: "100px",
            padding:"1rem",
            borderRadius:"0.5rem",
        }} onClick={()=>setAtivo(!ativo)}>{ativo? 'Escuro':'Claro'}</button>
    )

}