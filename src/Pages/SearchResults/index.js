import React from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import { Container, ProductList } from './styles';

function SearchResults({ location, addToCart }) {
  const { data } = location;

  function handleAddProduct(product, image) {
    addToCart(product, image);
  }

  return (
    <Container>
      <ProductList>
        {data.data.map(product => (
          <li key={product.id}>
            <strong>
              {product.description.toUpperCase()} {product.brand.toUpperCase()}
            </strong>
            <span>Jurunense: {formatPrice(product.Jurunense)}</span>
            <span>Lojão do Pedreiro: {formatPrice(product.LP)}</span>

            <button type="button" onClick={() => handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={20} color="#FFF" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(SearchResults);
