import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Mainproduto from './pages/produto/main';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/produtos" component={Mainproduto} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;