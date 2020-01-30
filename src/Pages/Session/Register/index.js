/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container, Header, Form, RegisterLink } from './styles';

export default function Session() {
  return (
    <Container>
      <Header>
        <h1>Intregra Login</h1>
        <h2>Registre-se</h2>
      </Header>

      <Form>
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label>Empresa</label>
          <input type="text" />
        </div>

        <div>
          <label>Senha</label>
          <input type="password" name="password" />
        </div>

        <div>
          <button type="button">Registre-se</button>
        </div>
      </Form>

      <RegisterLink to="/Register" />
    </Container>
  );
}
