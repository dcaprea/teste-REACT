import React, { Component } from 'react';

class Feed extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
         <div key={this.props.key}>
             <h3>{this.props.username}</h3>
             <p>{ this.props.curtidas} { this.props.curtidas > 1 ? 'Curtidas' : 'Curtida' } </p>
             <p>{ this.props.comentarios} { this.props.comentarios > 1 ? 'Comentários' : 'Comentário' } </p>
         </div>   
        );
    }

}


export default Feed;