import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nutri: []
    };
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
      .then((r) => r.json())
      .then((json)=>{
        let state = this.state;
        state.nutri = json;
        this.setState(state);
      })
  }

  render() {
    return (
      <div>
        {this.state.nutri.map((item) => {
          return(
            <div key={item.id}>
              <strong> {item.titulo} </strong>
              <img src={item.capa} />
              <p>{item.subtitulo}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
