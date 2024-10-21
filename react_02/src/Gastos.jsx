const luana = {
  cliente: 'luana',
  idade: 27,
  compras:[
    {produto: 'notebook', preco: 'R$ 2500'},
    {produto: 'geladeira', preco: 'R$ 3000'},
    {produto: 'smartphone', preco: 'R$ 1500'},
  ],
  ativa: true,
};

const mario = {
  cliente: 'mario',
  idade: 31,
  compras:[
    {produto: 'notebook', preco: 'R$ 2500'},
    {produto: 'geladeira', preco: 'R$ 3000'},
    {produto: 'smartphone', preco: 'R$ 1500'},
    {produto: 'guitarra', preco: 'R$ 3500'},
  ],
  ativa: false,
};

export function Gastos() {
    const dados = mario;
  
    let soma = dados.compras.map((item)=> Number(item.preco.replace("R$", ""))).reduce((a,b)=>a+b);
  
      return (
        <>
          <p>Nome: {dados.cliente}</p>
          <p>Idade: {dados.idade}</p>
          <p>Situação: <span style={{color: dados.ativa?'green':'red'}}>{dados.ativa? "Ativa":"Inativa"}</span></p>
          <p>Total gasto: R$ {soma}</p>
          {soma>10000 && <p>Gastou muito</p>}
        </>
      )
  }
  