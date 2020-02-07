import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';
import logo from '../../../assets/images/logo.png';

class Login extends Component {
  state = {
    uid: '',
    password: '',
  };

  render() {
    return (
      <Container>
        <Form onSubmit={() => this.handleLogin}>
          <img src={logo} alt="Intregra" />

          <input type="email" required="required" placeholder="Seu email" />
          <input name="password" required="required" placeholder="Sua senha" />

          <button type="submit">Log In</button>

          <Link to="/register">Criar conta</Link>
          <Link to="/forgotPassword">Esqueceu sua senha?</Link>
        </Form>
      </Container>
    );
  }
}

export default connect()(Login);
