/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Input, Form } from '@rocketseat/unform';

import {
  updateAmount,
  removeFromCart,
  checkStockRequest,
} from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import { Container, ProductTable, Total, Store, Footer } from './styles';

export default function Cart() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
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

  function isAvailable(adressData, stores) {
    console.tron.log(adressData);
    dispatch(
      checkStockRequest(adressData, stores, profile.email, profile.companyName)
    );
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
            <Total>
              <span>TOTAL</span>
              <strong>{formatPrice(store.total)}</strong>
            </Total>
          </footer>
        </Store>
      ))}

      <Footer>
        <Form onSubmit={data => isAvailable(data, cartState.stores)}>
          <Input
            name="Delivery Responsible"
            required="required"
            placeholder="Responsável no local"
          />
          <Input
            name="phone-number"
            required="required"
            placeholder="Telefone de contato"
          />
          <Input name="district" required="required" placeholder="Bairro" />
          <Input name="street" required="required" placeholder="Rua" />
          <Input
            name="street-number"
            required="required"
            placeholder="Número"
          />
          <Input
            name="Complement"
            required="required"
            placeholder="Complemento"
          />
          <Input
            name="Reference"
            required="required"
            placeholder="Referência"
          />
          <button type="submit">
            <span>VERIFICAR DISPONIBILIDADE</span>
          </button>
        </Form>
      </Footer>
    </Container>
  );
}
