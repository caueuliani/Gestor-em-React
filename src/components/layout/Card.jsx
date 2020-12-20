import React from 'react'
import './Card.css'

export default props => { 
    const TrocaCorFundo = () =>{
        document.getElementById('card').backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    } 
       return(
    <div id="card" className="Card" style= {{
        borderColor: '#000000'
    }}>
        <div className="Content">
            <button className="button" onClick={()=>TrocaCorFundo()}>Vamos mudar a cor do fundo do card?</button>
            {props.children}
        </div>
        <div className="Footer" style= {{
                backgroundColor: '#000000'
            }}>
            {props.titulo}
        </div>
    </div>
       )
}