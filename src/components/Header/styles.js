import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  img {
    width: 180px;
    height: 45px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  padding: 0.5%;
  border-radius: 4px;
  width: 200px;

  &:hover {
    opacity: 0.7;
  }

  div {
    width: 50%;
    margin: 0 auto;
    text-align: right;

    strong {
      display: flex;
      color: white;
    }

    span {
      font-size: 12px;
      color: white;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  background: #3349;
  padding: 0.5%;
  border-radius: 4px;

  strong {
    margin-right: 5px;
    text-decoration: none;
  }
`;
