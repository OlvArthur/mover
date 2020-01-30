import React from 'react';

import { Container, Header, ForgotLink, Form } from './styles';

export default function Login() {
  return (
    <Container>
      <Header>
        <h1>Intregra Login</h1>
        <h2>Log In!</h2>
      </Header>

      <Form>
        <div>
          <label>Email</label>
          <input type="text" name="email" required="required" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" required="required" />
        </div>

        <div>
          <button type="button">Log In</button>

          <ForgotLink to="/forgotPassword">Forgot Password?</ForgotLink>
        </div>
      </Form>
    </Container>
  );
}
