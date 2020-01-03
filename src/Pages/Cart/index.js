/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, Store } from './styles';

function Cart({ products }) {
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
            <tbody id={product.id}>
              {product.Jurunense < product.LP && (
                <tr>
                  <td>
                    <img src={product.image} alt={product.description} />
                  </td>
                  <td>
                    <strong>{product.description}</strong>
                    <span>{product.priceJurunense}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>R$180,00</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </ProductTable>
        <footer>
          <button type="button">APROVAR O PEDIDO</button>

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
            <tbody id={product.id}>
              {product.Jurunense > product.LP && (
                <tr>
                  <td>
                    <img src={product.image} alt={product.description} />
                  </td>
                  <td>
                    <strong>{product.description}</strong>
                    <span>{product.priceJurunense}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" value={product.amount} />
                      <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>R$180,00</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </ProductTable>
        <footer>
          <button type="button">APROVAR O PEDIDO</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$580,00</strong>
          </Total>
        </footer>
      </Store>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart,
});

export default connect(mapStateToProps)(Cart);
