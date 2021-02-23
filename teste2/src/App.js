import React, { Component } from 'react';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: 0,
      status2: false,
      nomeBotao: "Entrar"
    };
    this.entrar = this.entrar.bind(this);
  }


  entrar(){
    this.setState({status2:!this.state.status});
    console.log(this.state.status2);
    if(this.state.status==0){
      this.setState({status:1});
      this.setState({nomeBotao:"Sair"});
    }else{
      this.setState({nomeBotao:"Entrar"});
      this.setState({status:0});
    }
  }

  render(){
    return(
      <div>
        { this.state.status == 1 &&
          <h1>Bem vindo ao Sistema!</h1>
        }
        <div>
          <h2>Curso ReactJS</h2>
        </div>

        { this.state.status2 ? 
          <div>Está Logado</div> :
          <div>Deslogado</div>
        }

        <button onClick={this.entrar}>{this.state.nomeBotao}</button>

      </div>
    );
  }
}

export default App;
