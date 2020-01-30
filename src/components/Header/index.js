import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png';
import { Container, Cart, Links } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/form">
        <img src={logo} alt="Logo Intregra" />
      </Link>

      <Links>
        <Link to="/register">
          <strong>Sign Up</strong>
        </Link>
        <Link to="/">
          <strong>Login</strong>
        </Link>
        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Links>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
