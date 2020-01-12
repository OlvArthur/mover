import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import ProductForm from './Pages/ProductForm';
import Cart from './Pages/Cart';
import Favicon from './assets/images/favicon.png';

export default function Routes() {
  return (
    <Switch>
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/form" component={ProductForm} />
      <Route path="/cart" component={Cart} />
      <Route path="/favicon.ico" component={Favicon} />
    </Switch>
  );
}
