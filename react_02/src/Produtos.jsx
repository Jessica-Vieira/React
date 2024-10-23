import { Titulo } from "./Titulo";

const produtos = [
    {id: 1,nome: 'Notebook', propriedades: ['16gb ram', '512gb']},{id:2, nome: 'Smartphone', propriedades: ['8gb ram', '256gb']},
];

export function Produtos(){
    return(
        <>
                {produtos.map(({id,nome,propriedades})=>(
                    <fieldset style={{margin:'0.5 rem'}} key={id}>
                        <Titulo texto={nome}/>
                        <ul>
                        {propriedades.map((propriedade)=><li key={propriedade}>{propriedade}</li>)}
                        </ul>
                    </fieldset>
                    
                ))}
        </>
        
    )
}