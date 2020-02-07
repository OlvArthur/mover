import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import ProductForm from './Pages/ProductForm';
import Cart from './Pages/Cart';
import SignIn from './Pages/Session/SignIn';
import SignUp from './Pages/Session/SignUp';
import SearchResults from './Pages/SearchResults';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/search" exact component={SearchResults} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/form" component={ProductForm} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
