import React from 'react';

const Bemvindo = (props) => {
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
}

function App(){
    return (
        <div>
            <h1>Teste em React</h1>
            <Bemvindo nome="Daniel" idade="36" />
            <Bemvindo nome="Camila" idade="33" />
            <Equipe nome="Lucas" cargo="Programador" idade="29" facebook="http://uol.com.br" linkedin="http://terra.com.br" />
            <Equipe nome="Daniel" cargo="Analista" idade="36" facebook="http://espm.br" linkedin="http://ig.com.br" />
        </div>
    );
}

export default App;