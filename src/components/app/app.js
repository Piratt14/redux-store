import React from 'react';
import './app.css';
import { Route, Link, Switch } from 'react-router-dom';
import { HomePage, CartPage } from "../pages";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage}/>
            </Switch>
        </div>
    );
};

export default App;
