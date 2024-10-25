import { useContext } from "react";
import { TemaContexto } from "./ContextProvider";

export function TemaPagina(){
    const {tema} = useContext(TemaContexto)

    return(
        <div style={{backgroundColor:tema.background, color: tema.color}}>
            <p style={{backgroundColor:tema.background, color: tema.color}}>clique no botao para trocar o tema!</p>
        </div>
    )
}