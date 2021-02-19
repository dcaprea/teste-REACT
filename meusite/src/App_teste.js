import { render } from '@testing-library/react';
import React, { Component } from 'react';

//Entendendo Component
class Equipe extends Component{
    render(){
        return(
            <div>
                <h2>Eu sou o: { this.props.nome }</h2>
                <p>{ this.props.cargo }</p>
                <p>{ this.props.idade }</p>
                <Social facebook={ this.props.facebook } linkedin={ this.props.linkedin } />
                <DadosTecnicos velocidade={ this.props.velocidade } forca={ this.props.forca } inteligencia={ this.props.inteligencia } />
                <hr />
            </div> 
        );
    }
}

class Social extends Component{
    render(){
        return(
            <div>
                <p>{ this.props.facebook }</p>
                <p>{ this.props.linkedin }</p>
            </div> 
        );
    } 
}

const DadosTecnicos = (props) => {
    return(
        <div>
            <p>Velocidade: { props.velocidade }</p>
            <p>Força: { props.forca }</p>
            <p>Inteligência: { props.inteligencia }</p>
        </div>
    );
}

/* const Bemvindo = (props) => {
    return (<div>
        <h2>Bem Vindo { props.nome }</h2>
        <p>Eu tenho { props.idade } anos.</p>
    </div>)
}

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social facebook={props.facebook} linkedin={props.linkedin} />
            <hr />
        </div>
    )
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o(a): {props.nome}</h2>
            <h3>Cargo:</h3> {props.cargo}
            <h3>Idade:</h3> {props.idade}
        </div>
    )
}

const Social = (props) => {
    return (
        <div>
            <a href={props.facebook}>Facebook</a> | <a href={props.linkedin}>Linkedin</a>
        </div>
    )
}*/

function App(){
    
    return (
        <div>
            <h1>Nossa Equipe</h1>
            
            <Equipe nome="Lucas" cargo="Programador" idade="29" facebook="http://uol.com.br" linkedin="http://terra.com.br" velocidade="8" forca="6" inteligencia="9" />
            <Equipe nome="Daniel" cargo="Analista" idade="36" facebook="http://espm.br" linkedin="http://ig.com.br" velocidade="3" forca="9" inteligencia="6" />
        </div>
    );
}

export default App;