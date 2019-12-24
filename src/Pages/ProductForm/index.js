import React, { Component } from 'react';

import { Container, Form } from './styles';
import api from '../../services/api';

export default class ProductForm extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Form>
          <strong>Intregra Produtos</strong>
          {products.map(product => (
            <li key={product.id}>
              <ul>{product.title}</ul>
              <ul>{product.type}</ul>
            </li>
          ))}
        </Form>
      </Container>
    );
  }
}
