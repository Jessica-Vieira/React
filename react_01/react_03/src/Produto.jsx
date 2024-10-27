export function Produto(...{dados}){
    return(
        <div>
            <h2>{dados.nome}</h2>
            <p>R${dados.preco}</p>
            <img src=
            {
                dados.fotos[0].src
            }
            alt={
                dados.fotos[0].titulo
            }
        />
        </div>
    )
}