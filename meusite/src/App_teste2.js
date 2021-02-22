import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            estado: ''
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.numero += 1;
        state.estado = 'Aumentei';
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.numero -= 1;
        if(state.numero >= 0){
        state.estado = 'Diminui';
        this.setState(state);
        }else{
            alert("Sem número negativos por aqui!");
        }
    }

    render(){
        return (
            <div>
                <h1>{ this.state.estado }</h1>
                <h2>Contador:</h2>
                <button onClick={ this.aumentar }>+</button>                
                { this.state.numero }
                <button onClick={ this.diminuir }>-</button>
            </div>
        );
    }
}


export default App;