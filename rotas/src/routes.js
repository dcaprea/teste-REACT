import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';
import Erro from './pages/erro';
import Produto from './pages/produto';
import Header from './components/header';
import Footer from './components/footer';

const routes = ()=> {
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobre" component={Sobre} />
                <Route path="/produto/:id" component={Produto} />
                <Route path="*" component={Erro} />
            </Switch>
        <Footer />
        </BrowserRouter>
    );
}

export default routes;