import React from 'react';

import { formatPrice } from '../../utils/format';
import { Container, ProductList } from './styles';

export default function SearchResults({ location }) {
  const { data } = location;

  return (
    <Container>
      <ProductList>
        {data.data.map(product => (
          <li key={product.id}>
            <strong>
              {product.description} {product.brand}
            </strong>
            <span>Jurunense: {formatPrice(product.Jurunense)}</span>
            <span>Lojão do Pedreiro: {formatPrice(product.LP)}</span>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}
