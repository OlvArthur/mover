import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '../../../components/Header';
import NavBar from '../../../components/NavBar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <NavBar />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
/*

*/
