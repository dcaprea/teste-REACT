import React, { Component } from 'react';
import './estilo.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: "Esperando a frase"
    };
    this.frases = ['Sigam-me os bons', 'Meu nome é José', 'Sou cabra da peste', 'Mais uma frase não faz mal', 'Meu filho é meu super heroi.', 'Na TV passam programas de TV', 'Círculo, quadrado e retângulo são formas geométricas'];
    this.quebrabiscoito = this.quebrabiscoito.bind(this);
  }

  quebrabiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.frase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img className="img" src={require('./assets/biscoito.png')} />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebrabiscoito} />
        <h3 className="texto">{ this.state.frase }</h3>
      </div>
    );
  }


}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={ this.props.acaoBtn } >{ this.props.nome }</button>
      </div>
    )
  }



}


export default App;