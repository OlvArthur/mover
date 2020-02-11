import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, StyledForm } from './styles';
import logo from '../../../assets/images/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data.email);
  }

  return (
    <Container>
      <StyledForm schema={schema} onSubmit={handleSubmit}>
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
