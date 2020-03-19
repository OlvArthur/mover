import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { addToCart } from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import { Container, ProductList } from './styles';

export default function SearchResults() {
  const dispatch = useDispatch();
  const cartState = useSelector(state => ({
    products: state.search.products.map(product => ({
      ...product,
      description: product.description.toUpperCase(),
      brand: product.brand.toUpperCase(),
      stores: product.stores.map(store => ({
        ...store,
        price: formatPrice(store.pivot.price),
      })),
    })),
  }));

  function handleAddProduct(product, store) {
    dispatch(addToCart(product, store));
  }

  return (
    <Container>
      <ProductList>
        {cartState.products.map(product => (
          <ul key={product.id}>
            {product.stores.map(store => (
              <li key={store.id}>
                <strong>
                  {product.description} {product.brand}
                </strong>
                <span>
                  {store.name}: {store.price}
                </span>

                <button
                  type="button"
                  onClick={() => handleAddProduct(product, store)}
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
    </Container>
  );
}
