import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            hora: "00:00:00"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentDidUpdate(){
        //console.log("Atualizou");
    }

    shouldComponentUpdate(){
        return true
    }

    render(){
        return(
            <div>
                <h1>Meu Projeto</h1>
                {this.state.hora}
            </div>
        );
    }
}


export default App;