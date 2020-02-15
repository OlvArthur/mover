import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { Container, StyledForm } from './styles';
import logo from '../../../assets/images/logo.png';
import api from '../../../services/api';
import { login } from '../../../services/auth';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn({ history }) {
  async function handleSubmit({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        uid: email,
        password,
      });

      await login(response.data.token);

      const user = await api.get('/sessions', {
        params: {
          email,
        },
      });
      history.push('/form');
      console.tron.log(user.data[0]);
    } catch (err) {
      return 'Favor verifique seu login';
    }

    return 'Anything';
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

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(withRouter(SignIn));
