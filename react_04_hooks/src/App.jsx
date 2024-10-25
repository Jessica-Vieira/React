import { BotaoTrocarTema } from "./Context";
import { TemaPagina } from "./ContextPagina";
import { TemaPaginaProvider } from "./ContextProvider";

export function App() {
  return (
    <TemaPaginaProvider>
      <TemaPagina/>
      <BotaoTrocarTema/>
    </TemaPaginaProvider>
    
  )
}
