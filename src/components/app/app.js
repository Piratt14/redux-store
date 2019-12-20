import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from "../pages";
import {connect} from "react-redux";

const App = ({ items, total }) => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={items.length} total={total}/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage}/>
            </Switch>
        </main>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal,
    };
};

export default connect(mapStateToProps)(App);
