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

// import { checkStock } from '../../store/modules/cart/sagas';

import { Container, ProductTable, Total, Store } from './styles';

function Cart({ stores, removeFromCart, updateAmount, checkStock }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  function updateManually(id, amount) {
    updateAmount(id, amount);
  }

  function isAvailable(products) {
    checkStock(products);
  }

  return (
    <Container>
      {stores.map(store => (
        <Store>
          <h1>{store.name}</h1>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>DISPONIBILIDADE</th>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>UNID</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            {store.products.map(product => (
              <tbody key={product.id}>
                <tr>
                  <td />
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
                    <strong>{product.measure}</strong>
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
              </tbody>
            ))}
          </ProductTable>
          <footer>
            <button
              type="button"
              onCLick={() => removeFromCart(store.products[3].id)}
            >
              VERIFICAR DISPONIBILIDADE
            </button>

            <Total>
              <span>TOTAL</span>
              <strong>{formatPrice(store.total)}</strong>
            </Total>
          </footer>
        </Store>
      ))}
    </Container>
  );
}

Cart.propTypes = {
  stores: PropType.oneOfType([PropType.array]).isRequired,
  removeFromCart: PropType.func.isRequired,
  updateAmount: PropType.func.isRequired,
};

const mapStateToProps = state => ({
  stores: [
    {
      name: 'Jurunense',
      products: state.cart.JProducts.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
      })),
      total: state.cart.JProducts.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    },
    {
      name: 'Lojão do Pedreiro',
      products: state.cart.LPProducts.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
      })),
      total: state.cart.LPProducts.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    },
  ],

  /* state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  /* Jtotal: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }), */
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
