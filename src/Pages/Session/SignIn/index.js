import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';

import { Container, StyledForm } from './styles';
import logo from '../../../assets/images/logo.png';

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data.email);
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <img src={logo} alt="Intregra" />

        <Input
          name="email"
          type="email"
          required="required"
          placeholder="Seu email"
        />
        <Input
          name="password"
          type="password"
          required="required"
          placeholder="Sua senha"
        />

        <button type="submit">Log In</button>

        <Link to="/register">Criar conta</Link>
        <Link to="/forgotPassword">Esqueceu sua senha?</Link>
      </StyledForm>
    </Container>
  );
}

export default connect()(SignIn);
