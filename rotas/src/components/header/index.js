import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        Header do meu projeto<br />
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      </div>
    )
  }
}

export default Header;
