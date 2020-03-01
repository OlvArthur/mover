import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LandingPage from '../Pages/LandingPage';
import ProductForm from '../Pages/ProductForm';
import Cart from '../Pages/Cart';
import SignIn from '../Pages/Session/SignIn';
import SignUp from '../Pages/Session/SignUp';
import SearchResults from '../Pages/SearchResults';
import Profile from '../Pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/search" component={SearchResults} isPrivate />
      <Route path="/landingpage" component={LandingPage} isPrivate />
      <Route path="/form" component={ProductForm} isPrivate />
      <Route path="/cart" component={Cart} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}
