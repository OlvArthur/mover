import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { ProductList } from './styles';
import api from '../../services/api';
import jsonApi from '../../services/jsonApi';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

class ProductForm extends Component {
  state = {
    products: [],
    images: [],
  };

  static propTypes = {
    addToCart: PropTypes.func.isRequired,
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

  handleAddProduct = (product, image) => {
    const { addToCart } = this.props;

    addToCart(product, image);
  };

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

            <button
              type="button"
              onClick={() =>
                this.handleAddProduct(product, images[product.id].url)
              }
            >
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductForm);
