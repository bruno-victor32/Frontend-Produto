import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Mainproduto from './pages/produto/main';
import Detalhesproduto from './pages/produto/detalhes';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/produtos" component={Mainproduto} />
            <Route path="/produtos/:id" component={Detalhesproduto} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;