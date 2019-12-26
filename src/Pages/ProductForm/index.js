import React, { Component } from 'react';

import { Container, Form } from './styles';
import api from '../../services/api';

export default class ProductForm extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const { products } = this.state;

    this.setState({ products: [...products, response.data] });
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <Container>
        <Form />
      </Container>
    );
  }
}
