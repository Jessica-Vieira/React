const produtos = [
{
    id: 1,
    nome: 'Smartphone',
    preco: 2000,
    cores: ['#29d8d5', '#459b87', '#352c76']
},
{
    id: 2,
    nome: 'Notebook',
    preco: 3000,
    cores: ['#ffd456', '#fd9552', '#fa6856']
},
{
    id: 3,
    nome: 'Tablet',
    preco: 1500,
    cores: ['#89d456', '#769552', '#796856']
},
];

export function Cores(){
    return(
        <>
            {produtos.filter(({preco})=>preco>1500)
            .map(({id,nome,preco,cores})=>(
                    <>
                        <h1 key={id}>{nome}</h1>
                        <p>Preço: R${preco}</p>
                        <ul>{cores.map((cor)=>(
                            <li key={id} style={{backgroundColor:cor, color:'#fff'}}>{cor}</li>
                        ))}</ul>
                    </>
                ))}
        </>
    )
}