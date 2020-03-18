/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {
  updateAmount,
  removeFromCart,
  checkStockRequest,
} from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import { Container, ProductTable, Total, Store } from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  /* const cartState = useSelector(state => ({
    stores: [
      {
        name: 'Jurunense',
        products: state.cart.JProducts.map(product => ({
          id: product.id,
          amount: product.amount,
          description: product.description,
          price: formatPrice(product.price),
          measure: product.measure,
          subtotal: formatPrice(product.price * product.amount),
        })),
        total: state.cart.JProducts.reduce((total, product) => {
          return total + product.price * product.amount;
        }, 0),
      },
      {
        name: 'Lojão do Pedreiro',
        products: state.cart.LPProducts.map(product => ({
          id: product.id,
          amount: product.amount,
          description: product.description,
          price: formatPrice(product.price),
          measure: product.measure,
          subtotal: formatPrice(product.price * product.amount),
        })),
        total: state.cart.LPProducts.reduce((total, product) => {
          return total + product.price * product.amount;
        }, 0),
      },
      {
        name: 'BelTubos',
        products: state.cart.BTProducts.map(product => ({
          id: product.id,
          amount: product.amount,
          description: product.description,
          price: formatPrice(product.price),
          measure: product.measure,
          subtotal: formatPrice(product.price * product.amount),
        })),
        total: state.cart.BTProducts.reduce((total, product) => {
          return total + product.price * product.amount;
        }, 0),
      },
    ],
  })); */
  const cartState = useSelector(state => ({
    stores: state.cart.stores.map(store => ({
      ...store,
      products: store.products.map(product => ({
        ...product,
        price: formatPrice(product.price),
        subtotal: formatPrice(product.price * product.amount),
      })),

      total: store.products.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0),
    })),
  }));

  function increment(product, store) {
    dispatch(updateAmount(store.id, product.id, product.amount + 1));
  }

  function decrement(product, store) {
    dispatch(updateAmount(store.id, product.id, product.amount - 1));
  }

  function updateManually(storeId, productId, amount) {
    dispatch(updateAmount(storeId, productId, amount));
  }

  function isAvailable(products) {
    dispatch(checkStockRequest(products));
  }

  function remove(productId, storeId) {
    dispatch(removeFromCart(productId, storeId));
  }

  return (
    <Container>
      {cartState.stores.map(store => (
        <Store key={store.id}>
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
                    <span>{product.price}</span>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => decrement(product, store)}
                      >
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input
                        type="number"
                        onChange={e =>
                          updateManually(
                            store.id,
                            product.id,
                            Number(e.target.value)
                          )
                        }
                        value={product.amount}
                      />
                      <button
                        type="button"
                        onClick={() => increment(product, store)}
                      >
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
                      onClick={() => remove(product.id, store.id)}
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </ProductTable>
          <footer>
            <button type="button" onClick={() => isAvailable(store.products)}>
              <span>VERIFICAR DISPONIBILIDADE</span>
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
