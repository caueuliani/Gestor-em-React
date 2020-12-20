import './App.css'
import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/Comparametro'
import Comfilhos from './components/basicos/Comfilhos';
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComif from './components/basicos/CondicionalComif'
import CorFundo from './components/basicos/MudaCor'
//import {TrocaCorFundo} from './components/layout/Card'

export default (props) => (
    <div className="App">
        
        <Card titulo="#Meu - Mudar Cor de fundo do card" >            
        </Card>
        <Card titulo="#Meu - Mudar Cor de fundo" >
            <button className="button" onClick={CorFundo}>Vamos mudar a cor?</button>
        </Card>
        <Card titulo = "#06- Condicional v2">
            <CondicionalComif numero= {11}></CondicionalComif>
        </Card> 
        <Card titulo = "#05- Condicional v1" >
            <Condicional numero= {10}></Condicional>
        </Card> 
        <Card titulo = "#04- Repetição">
            <Repeticao></Repeticao>
        </Card> 
        <Card titulo = "#03- Componente com filho">
            <Comfilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </Comfilhos>
        </Card>        
        <Card titulo = "#02- Componente com parametros">
            <ComParametro titulo = "Este é o título" subtitulo = "esse é o subtitulo" />
        </Card>
        <Card titulo ="#01- Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
);