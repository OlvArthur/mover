/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import PropType from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import { Container, ProductTable, Total, Store } from './styles';

function Cart({ products, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  function updateManually(id, amount) {
    updateAmount(id, amount);
  }

  return (
    <Container>
      <Store>
        <h1>Jurunense</h1>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          {products.map(product => (
            <tbody key={product.id}>
              {product.Jurunense < product.LP && (
                <tr>
                  <td />
                  <td>
                    <strong>{product.description}</strong>
                    <span>{formatPrice(product.price)}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input
                        type="number"
                        onChange={e =>
                          updateManually(product.id, Number(e.target.value))
                        }
                        value={product.amount}
                      />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </ProductTable>
        <footer>
          <button type="button">VERIFICAR DISPONIBILIDADE</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$860,00</strong>
          </Total>
        </footer>
      </Store>

      <Store>
        <h1>Lojão do Pedreiro</h1>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          {products.map(product => (
            <tbody key={product.id}>
              {product.Jurunense > product.LP && (
                <tr>
                  <td />
                  <td>
                    <strong>{product.description}</strong>
                    <span>{formatPrice(product.price)}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input
                        type="number"
                        onChange={e =>
                          updateManually(product.id, Number(e.target.value))
                        }
                        value={product.amount}
                      />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </ProductTable>
        <footer>
          <button type="button">VERIFICAR DISPONIBILIDADE</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$580,00</strong>
          </Total>
        </footer>
      </Store>
    </Container>
  );
}

Cart.propTypes = {
  products: PropType.oneOfType([PropType.array]).isRequired,
  removeFromCart: PropType.func.isRequired,
  updateAmount: PropType.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
