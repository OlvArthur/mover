import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png';
import { Container, Cart, Links, Box } from './styles';
import api from '../../services/api';

class Header extends Component {
  state = {
    query: '',
    data: [],
  };

  handleInputChange = async e => {
    await this.setState({
      query: e.target.value.toLowerCase(),
    });
    this.apiRequest();
  };

  apiRequest = async () => {
    const { query } = this.state;

    if (query.length !== 0) {
      const response = await api.get('/products', {
        params: {
          query,
        },
      });
      this.setState({
        data: response,
      });
    }
  };

  render() {
    const { cartSize } = this.props;
    const { data } = this.state;

    return (
      <Container>
        <Link to="/form">
          <img src={logo} alt="Logo Intregra" />
        </Link>

        <Box>
          <div>
            <form>
              <input
                placeholder="Search for..."
                // ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
              <Link
                to={{
                  pathname: '/search',
                  data,
                }}
              >
                <button type="button">
                  <MdSearch />
                </button>
              </Link>
            </form>
          </div>
        </Box>

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
            <MdShoppingBasket size={36} color="#333" />
          </Cart>
        </Links>
      </Container>
    );
  }
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
