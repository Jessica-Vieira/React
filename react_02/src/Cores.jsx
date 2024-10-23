const produtos = [
{
    id: 1,
    nome: 'Smartphone',
    preco: "R$ 2000",
    cores: ['#29d8d5', '#459b87', '#352c76']
},
{
    id: 2,
    nome: 'Notebook',
    preco: "R$ 3000",
    cores: ['#ffd456', '#fd9552', '#fa6856']
},
{
    id: 3,
    nome: 'Tablet',
    preco: "R$ 1500",
    cores: ['#89d456', '#769552', '#796856']
},
];

export function Cores(){
    return(
        <>
            {produtos.filter(({preco})=>Number(preco.replace("R$ ", ""))>1500)
            .map(({id,nome,preco,cores})=>(
                    <div key={id}>
                        <h1>{nome}</h1>
                        <p>Preço: {preco}</p>
                        <ul>{cores.map((cor)=>(
                            <li key={cor} style={{backgroundColor:cor, color:'#fff'}}>{cor}</li>
                        ))}</ul>
                    </div>
                ))}
        </>
    )
}