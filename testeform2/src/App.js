import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      localizacao: {
        endereco: "",
        cep: "",
        bairro: ""
      },
      erro: ""
    };
    this.cadastrar = this.cadastrar.bind(this);
    this.mudaForms = this.mudaForms.bind(this);
  }

  cadastrar(e){
    const {nome, email, senha} = this.state;
    if(nome != "" && email != "" && senha != ""){
      alert(`Enviando os dados ${nome} e ${email} e ${senha}`);
    }else{
      this.setState({erro: "Está faltando algum campo!"});
    }

    e.preventDefault();
  }

  mudaForms(e){
    let localizacao = this.state.localizacao;
    localizacao[e.target.name] = e.target.value;
    this.setState({localizacao: localizacao});
  }

  render(){
    return(
      <div>
        {this.state.erro && <p>{this.state.erro}</p>}
        <form onSubmit={this.cadastrar}>
          <p>Nome: </p>
          <input type="text" name="nome" value={this.state.nome} onChange={ (e)=>this.setState({nome: e.target.value}) } />
          <p>E-mail: </p>
          <input type="email" name="email" value={this.state.email} onChange={ (e)=>this.setState({ email: e.target.value }) } />
          <p>Password: </p>
          <input type="password" name="senha" value={this.state.senha} onChange={ (e) => this.setState({ senha: e.target.value }) } />
          <p>Endereço: </p>
          <input type="text" name="endereco" value={this.state.localizacao.endereco} onChange={ this.mudaForms } />
          <p>CEP: </p>
          <input type="text" name="cep" value={this.state.localizacao.cep} onChange={ this.mudaForms } />
          <p>Bairro: </p>
          <input type="text" name="bairro" value={this.state.localizacao.bairro} onChange={ this.mudaForms } />

          <button type="submit">Cadastrar</button>
        </form>
        <p>{ this.state.nome }</p>
        <p>{ this.state.email }</p>
        <p>{ this.state.senha }</p>
        <p>{ this.state.localizacao.endereco }</p>
        <p>{ this.state.localizacao.cep }</p>
        <p>{ this.state.localizacao.bairro }</p>
      </div>

    );
  }
}

export default App;