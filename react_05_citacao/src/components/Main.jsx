import { useState} from "react";

export function Main(){

    const [agente, setAgente] = useState(null);
    const [fundo, setFundo] = useState(false);
    const [paleta, setPaleta] = useState(null);

    async function sortearAgente() {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const json = await response.json();
        const agentes = json.data;
      
        const indiceAleatorio = Math.floor(Math.random() * agentes.length);
        const agenteAleatorio = agentes[indiceAleatorio];
        setAgente(agenteAleatorio.displayName);
        setFundo(agenteAleatorio.background);
        setPaleta(agenteAleatorio.backgroundGradientColors);
        return agenteAleatorio.displayName;
      }


      const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '10px',
        justifyItems: 'center',
        alignItems: 'stretch',
      };
      
      const beforeStyle = {
        content: '',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        width: '100%',
        height: '3rem',
        zIndex: 1
      };
      
      const spanStyle = {
        position: 'relative',
        zIndex: 2,
        margin: '0.9rem', 
      };
      
      const mediaQuery = `@media (max-width: 600px) {
        .grid-container {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, 1fr);
        }
      }`;
    return(
        <main style={{
            width:'100%',
            height:'90vh',
            backgroundImage: `url(${fundo})`,
            backgroundSize: "contain",
            top: '3rem',
            backgroundPosition: 'center',
            backgroundColor:'#bd3944',
            backgroundRepeat: 'no-repeat',
            
            }}>
            <div style={{
                    display:'grid', 
                    gridTemplateRows: '1fr 1fr',
                }}>
                    <h1 style={{width:'100%',textAlign:'center'}}>Paleta de agentes</h1>
                    <div style={
                        {margin: '0 auto'}
                    }>
                        <button style={{
                          backgroundColor: '#000000',
                          borderRadius: '9px',
                          display: 'inline-block',
                          cursor: 'pointer',
                          color: '#bd3944',
                          fontFamily: 'Arial',
                          fontSize: '17px',
                          padding: '9px 57px',
                          textDecoration: 'none',
                          textShadow: '0px 0px 0px #2f6627'
                        }}  onClick={sortearAgente}>Sortear</button>
                    </div>
                </div>
                
            
            
            <div style={containerStyle}>
            {fundo && 
                    paleta.map((cor,index) => (
                        <div key={index} className="paletaCor" style={{
                            position: 'relative',
                            backgroundColor: `#${cor}`,
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            textAlign:'center',
                            width: '200px',
                            height: '200px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            borderRadius:'0.5rem',
                            overflow: 'hidden'
                        }}><div style={beforeStyle}></div><span style={spanStyle}>#{cor}</span></div>
                    ))
            }
            </div>
        </main>
    )
    
}