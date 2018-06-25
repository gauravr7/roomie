import React, { Component } from 'preact-compat';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Book from './components/book';
import View from './components/view';


import Post from './components/posts';
import Search from './components/search';
import Account from './components/account';
import Product from './components/products';


/**
 * Global App Container Component
 * @class App
 */
class App extends Component {
    render() {
        return (
            <section className="jd-wrapper">
                <Navigation />
                <Route exact path="/" component={Post} />
                <Route path="/book" component={Book} />
                <Route path="/view" component={View} />


                <Route path="/products" component={Product} />
                <Route path="/post" component={Account} />
                <Route path="/account" component={Account} />
                <Route path="/search" component={Search} />
            </section>
        );
    }
}

export default App;
