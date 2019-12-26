import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import ProductForm from './Pages/ProductForm';
import Cart from './Pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/form" component={ProductForm} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
