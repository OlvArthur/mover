import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import ProductForm from './Pages/ProductForm';
import Cart from './Pages/Cart';
import Login from './Pages/Session/Login';
import Register from './Pages/Session/Register';
import SearchResults from './Pages/SearchResults';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/search" exact component={SearchResults} />
      <Route path="/register" exact component={Register} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/form" component={ProductForm} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
