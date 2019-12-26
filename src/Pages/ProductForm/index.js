import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import api from '../../services/api';
import jsonApi from '../../services/jsonApi';
import { formatPrice } from '../../utils/format';

export default class ProductForm extends Component {
  state = {
    products: [],
    images: [],
  };

  async componentDidMount() {
    const [produtos, productImage] = await Promise.all([
      api.get('products'),
      jsonApi.get('/images'),
    ]);

    const data = produtos.data.map(product => ({
      ...product,
      priceLP: formatPrice(product.LP),
      priceJurunense: formatPrice(product.Jurunense),
    }));

    this.setState({
      products: data,
      images: productImage.data,
    });
  }

  render() {
    const { products, images } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={images[product.id].url} alt={product.description} />
            <strong>
              {product.description} {product.brand}
            </strong>
            <span>Jurunense: {product.priceJurunense}</span>
            <span>Lojão do Pedreiro: {product.priceLP}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={20} color="#FFF" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
