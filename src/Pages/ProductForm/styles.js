import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  padding: 30px 100px;

  @media (max-width: 1213px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    margin-top: 10px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      margin-bottom: 50px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        padding: 12px;
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const Pagination = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  font-size: 32px;
  margin: auto;
  width: 50%;
  padding: 10px;

  span {
    color: #fff;
  }

  button {
    margin: auto;
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
