import React, { Component } from 'react';
import Feed from './components/feed';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id:1, username: 'Daniel', curtidas:1, comentarios:20},
        {id:2, username: 'Camila', curtidas:100, comentarios:200},
        {id:3, username: 'Vicente', curtidas:30, comentarios:50}
      ]
    };
  }

  render(){
    return(
      <div>

        { this.state.feed.map((item) => {
          return(
            <div>
              <Feed key={item.id} username={ item.username } curtidas={item.curtidas} comentarios={item.comentarios}    />
            </div>
          )
        }) }
      </div>
    );
  }

}
export default App;
