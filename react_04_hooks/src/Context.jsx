import { useContext } from "react";
import { TemaContexto } from "./ContextProvider";

export function BotaoTrocarTema(){
    const {tema, setTema, themes} = useContext(TemaContexto)

    function mudarTema(){
        setTema(tema === themes.light? themes.dark:themes.light)
    }

    return(
        <button style={{backgroundColor:tema.background, color: tema.color}} onClick={mudarTema}>Trocar tema</button>
    )
}