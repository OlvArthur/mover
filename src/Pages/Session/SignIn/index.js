import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { signInRequest } from '../../../store/modules/auth/actions';

import { Container, StyledForm } from './styles';
import logo from '../../../assets/images/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

        <button type="submit">{loading ? 'Carregando...' : `Log In`}</button>

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
export default withRouter(SignIn);
