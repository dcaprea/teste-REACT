import React, { Component } from 'react';
import Membro from './components/Membro';

class App extends Component{

    render(){
        return(
            <div>
                <h1>Meu Projeto</h1>
                <Membro nome="Visitante" />
            </div>
        );
    };


}

export default App;