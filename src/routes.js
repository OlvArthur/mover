import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import ProductForm from './Pages/ProductForm';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/form" component={ProductForm} />
      </Switch>
    </BrowserRouter>
  );
}
