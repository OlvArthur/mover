import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes/index';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
          </Router>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
