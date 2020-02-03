import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png';
import { Container, Cart, Links } from './styles';
import api from '../../services/api';

class Header extends Component {
  state = {
    query: '',
    data: [],
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    });
    this.apiRequest();
  };

  apiRequest = async () => {
    const { query } = this.state;

    const response = await api.get('http://localhost:3333/products', {
      params: {
        query,
      },
    });
    this.setState({
      data: response,
    });
  };

  render() {
    const { cartSize } = this.props;
    const { data } = this.state;

    return (
      <Container>
        <Link to="/form">
          <img src={logo} alt="Logo Intregra" />
        </Link>

        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Link
            to={{
              pathname: '/search',
              data,
            }}
          >
            <MdSearch />
          </Link>
        </form>

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
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
