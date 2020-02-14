import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import LandingPage from './Pages/LandingPage';
import ProductForm from './Pages/ProductForm';
import Cart from './Pages/Cart';
import SignIn from './Pages/Session/SignIn';
import SignUp from './Pages/Session/SignUp';
import SearchResults from './Pages/SearchResults';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            // state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <PrivateRoute path="/search" component={SearchResults} />
      <Route path="/register" component={SignUp} />
      <Route path="/landingpage" component={LandingPage} />
      <PrivateRoute path="/form" component={ProductForm} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}
