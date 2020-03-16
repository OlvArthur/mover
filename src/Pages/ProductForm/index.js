import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

class ProductForm extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCart: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const products = await api.get('/products');

    const data = products.data.map(product => ({
      ...product,
      priceLP: formatPrice(product.lp),
      priceJurunense: formatPrice(product.jurunense),
      priceBeltubos: formatPrice(product.beltubos),
    }));

    console.tron.log(data[0]);
    this.setState({
      products: data,
    });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <ul>
            {product.stores.map(store => (
              <li key={product.id}>
                <strong>
                  {product.description.toUpperCase()}{' '}
                  {product.brand.toUpperCase()}
                </strong>
                <span>
                  {store.name}: {product.priceJurunense}
                </span>

                <button
                  type="button"
                  onClick={() => this.handleAddProduct(product)}
                >
                  <div>
                    <MdAddShoppingCart size={20} color="#FFF" />
                  </div>

                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </li>
            ))}
          </ul>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductForm);
