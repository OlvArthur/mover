import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  padding: 30px;
  border-radius: 4px;
  margin: 20px;

  > button {
    position: absolute;
    right: 0%;
    transform: translateY(80%) translateX(-30%);

    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 12px 20px;
    font-weight: bold;
    background: #7159c1;
    margin-bottom: 5px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  margin-bottom: 40px;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      width: 50px;
      color: #666;
      padding: 6px;
      border-radius: 4px;
      -webkit-appearance: none;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    input[type='number'] {
      -moz-appearance: textfield;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  position: absolute;
  right: 10%;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Store = styled.div`
  padding: 30px;
  border-radius: 4px;
  margin: 20px;
  background: #fff;

  > div {
    font-size: 30px;
  }

  footer {
    margin-top: 30px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      border-radius: 4px;
      color: #fff;
      padding: 12px 20px;
      font-weight: bold;
      background: #7159c1;
      margin-bottom: 5px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  margin: 50px auto;

  > button {
    margin: auto;

    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 22px 50px;
    font-weight: bold;
    background: #7159c1;
    font-size: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }

  form {
    width: 50%;

    margin: 50px auto;

    display: flex;
    flex: 1;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 35px 15px;
      color: #fff;
      margin: 0 0 30px;
      font-size: 1.3rem;
      max-width: 1500px;
      margin-right: 25%;
      margin-left: 25%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
        font-size: 1.3rem;
      }
    }

    > button {
      margin: auto;

      border: none;
      border-radius: 4px;
      color: #fff;
      padding: 22px 50px;
      font-weight: bold;
      background: #7159c1;
      font-size: 1rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const StyledForm = styled(Form)``;
