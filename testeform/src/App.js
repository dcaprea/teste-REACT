import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: 'teste@teste.com',
      senha: '',
      sexo: 'masculino'
    }
    this.alteraemail = this.alteraemail.bind(this);
    this.alterasenha = this.alterasenha.bind(this);
    this.alterasexo = this.alterasexo.bind(this);
  }

  alteraemail(e){
    let valordigitado = e.target.value;
    this.setState({email: valordigitado});
  }

  alterasenha(e){
    let valordigitado = e.target.value;
    this.setState({senha: valordigitado});
  }

  alterasexo(e){
    let valordigitado = e.target.value;
    this.setState({sexo: valordigitado});
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        <p>E-mail</p>
        <input type="email" name="email" value={ this.state.email } onChange={ this.alteraemail } />
        <p>Password</p>
        <input type="password" name="senha" value={ this.state.senha } onChange={ this.alterasenha }/>
        <p>Sexo</p>
        <select name="sexo" value={this.state.sexo} onChange={this.alterasexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <div>
          <p>E-mail: {this.state.email}</p>
          <p>Senha: {this.state.senha}</p>
          <p>Sexo: {this.state.sexo}</p>
        </div>
      </div>
    );
  }
}


export default App;