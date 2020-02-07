import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';
import logo from '../../../assets/images/logo.png';

export default function Session() {
  return (
    <Container>
      <Form>
        <img src={logo} alt="Intregra" />

        <input required="required" placeholder="CNPJ" />
        <input type="email" required="required" placeholder="Seu email" />
        <input name="password" required="required" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </Container>
  );
}
