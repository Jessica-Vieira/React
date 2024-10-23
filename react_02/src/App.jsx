import { Cores } from "./Cores";
import { Gastos } from "./Gastos";
import { Home } from "./Home";
import { Produtos } from "./Produtos";
import { Header } from "./Header";
import { Contar } from "./Contar";

export function App() {

  let Pagina = Home;
  const { pathname } = window.location;

  if(pathname == '/'){
    Pagina = Home
  }else if(pathname == '/produtos'){
    Pagina = Produtos
  }

  

    return (
      <>
        <Header/>
        <Contar/>
        <Pagina/>
        <Cores/>
        <Gastos/>
      </>
    )
}
