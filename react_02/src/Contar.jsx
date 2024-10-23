import React from "react";

export function Contar(){
    const [numero, setNumero] = React.useState(0);

    return(
        <button onClick={()=>setNumero(numero+1)}>{numero}</button>
    )
}