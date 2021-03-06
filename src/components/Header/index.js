import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';

import logo from '../../assets/images/Logo.svg';
import { SearchRequest } from '../../store/modules/search/actions';
import { Container, Cart, Box, Profile } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.productsAmount);
  const dispatch = useDispatch();

  async function apiRequest({ query }) {
    dispatch(SearchRequest(query));
  }

  return (
    <Container>
      <Link to="/form">
        <img src={logo} alt="Logo Intregra" />
      </Link>

      <Box>
        <div>
          <Form onSubmit={apiRequest}>
            <Input name="query" placeholder="Search for..." />

            <button type="submit">
              <MdSearch />
            </button>
          </Form>
        </div>
      </Box>

      <div>
        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#333" />
        </Cart>
        <Profile>
          <Link to="/profile">
            <strong>Perfil</strong>
          </Link>
        </Profile>
      </div>
    </Container>
  );
}
