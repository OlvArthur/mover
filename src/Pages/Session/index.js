import React from 'react';

import {
  Container,
  Header,
  FlexGrid,
  ForgotLink,
  Form,
  Half,
  Divider,
  RegisterLink,
} from './styles';

export default function Session() {
  return (
    <Container>
      <Header>
        <h1>Intregra Login</h1>
        <h2>Log In!</h2>
      </Header>

      <FlexGrid>
        <Half>
          <div>
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
                <button type="button">
                  <span>Log In</span>
                </button>

                <ForgotLink to="/forgotPassword">Forgot Password?</ForgotLink>
              </div>
            </Form>
          </div>
        </Half>
        <Divider>
          <div name="top-bar" />
          <span>OR</span>
          <div name="bottom-bar" />
        </Divider>

        <Half>
          <div>
            <label>Email</label>
            <input type="text" name="email" />
          </div>

          <div>
            <label>Nome da Empresa</label>
            <input type="text" />
          </div>

          <div>
            <label>Senha</label>
            <input type="password" name="password" />
          </div>
        </Half>

        <RegisterLink to="/Register" />
      </FlexGrid>
    </Container>
  );
}
