import { createContext, useState } from "react";

const themes = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#000",
    color: "#fff"
  }
};

export const TemaContexto = createContext();

export function TemaPaginaProvider({children}){
    const [tema, setTema] = useState(themes.light)

    return(
        <TemaContexto.Provider value={{tema, setTema, themes}}> 
            {children}
        </TemaContexto.Provider>
    )
}
