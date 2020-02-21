import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchRequest } from '../../store/modules/search/actions';

import { Container, Dropdown } from './styles';

export default function NavBar() {
  const categories = useSelector(state => state.search.categories);
  const dispatch = useDispatch();

  return (
    <Container>
      {categories.map(categorie => (
        <nav key={categorie.name}>
          <Dropdown>
            <button type="button">{categorie.name}</button>
            <div>
              {categorie.objetos.map(objeto => (
                <button
                  key={objeto}
                  onClick={() => dispatch(SearchRequest(objeto.toLowerCase()))}
                  type="button"
                >
                  {objeto}
                </button>
              ))}
            </div>
          </Dropdown>
        </nav>
      ))}
    </Container>
  );
}
