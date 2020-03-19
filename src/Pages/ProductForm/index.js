import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { ProductList, Pagination } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';

class ProductForm extends Component {
  state = {
    products: [],
    page: 1,
  };

  static propTypes = {
    addToCart: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { page } = this.state;
    const { data } = await api.get('/products', {
      params: {
        page,
      },
    });

    const products = data.map(product => ({
      ...product,
      stores: product.stores.map(store => ({
        ...store,
        price: formatPrice(store.pivot.price),
      })),
    }));

    this.setState({
      products,
    });
  }

  handleAddProduct = (product, store) => {
    const { addToCart } = this.props;
    addToCart(product, store);
  };

  handlePage = async action => {
    const { page } = this.state;

    await this.setState({
      page: action === 'previous' ? page - 1 : page + 1,
    });

    this.loadProducts();
  };

  loadProducts = async () => {
    const { page } = this.state;

    const { data } = await api.get('/products', {
      params: {
        page,
      },
    });

    const products = data.map(product => ({
      ...product,
      stores: product.stores.map(store => ({
        ...store,
        price: formatPrice(store.pivot.price),
      })),
    }));

    this.setState({
      products,
    });
  };

  render() {
    const { products, page } = this.state;

    return (
      <>
        <ProductList>
          {products.map(product => (
            <ul key={product.id}>
              {product.stores.map(store => (
                <li key={store.id}>
                  <strong>
                    {product.description.toUpperCase()}{' '}
                    {product.brand.toUpperCase()}
                  </strong>
                  <span>
                    {store.name}: {store.price}
                  </span>

                  <button
                    type="button"
                    onClick={() => this.handleAddProduct(product, store)}
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
        <Pagination>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('previous')}
          >
            Anterior
          </button>
          <span>Página {page}</span>
          <button type="button" onClick={() => this.handlePage('foward')}>
            Próxima
          </button>
        </Pagination>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductForm);
