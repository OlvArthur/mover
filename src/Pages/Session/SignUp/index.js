import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { connect } from 'react-redux';
import { Container, StyledForm } from './styles';
import logo from '../../../assets/images/logo.png';

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <img src={logo} alt="Intregra" />

        <Input name="CNPJ" required="required" placeholder="CNPJ" />
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
