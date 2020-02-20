import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { addToCart } from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import { Container, ProductList } from './styles';

export default function SearchResults() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.search.products);

  function handleAddProduct(product, image) {
    dispatch(addToCart(product, image));
  }

  return (
    <Container>
      <ProductList>
        {products.map(product => (
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
