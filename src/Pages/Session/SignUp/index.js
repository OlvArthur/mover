import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { connect, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Container, StyledForm } from './styles';
import logo from '../../../assets/images/Logo.svg';

import { SignUpRequest } from '../../../store/modules/auth/actions';

const schema = Yup.object().shape({
  company: Yup.string().required('Nome da empresa é obrigatório'),
  cnpj: Yup.string().required('Seu CNPJ é obrigatório'),
  email: Yup.string()
    .email('insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ company, cnpj, email, password }) {
    dispatch(SignUpRequest(company, cnpj, email, password));
  }

  return (
    <Container>
      <StyledForm schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Inobras" />

        <Input
          name="company"
          required="required"
          placeholder="Nome da empresa"
        />
        <Input name="cnpj" required="required" placeholder="CNPJ" />
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

        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho login</Link>
      </StyledForm>
    </Container>
  );
}

export default connect()(SignUp);
