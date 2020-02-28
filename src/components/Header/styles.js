import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  img {
    width: 100px;
    height: 79px;
    margin: 10px 20px 0;
  }
`;

export const Box = styled.div`
  width: 80%;
  height: 58px;
  margin: 10px 10px;

  div {
    width: 55%;
    margin: 0 auto;
    line-height: 56px;
    position: relative;

    input {
      width: 89%;
      height: 33px;
      padding-left: 7px;
      color: #000;
      border: 1px solid #bebebe;
      border-radius: 2px 0 0 2px;
      z-index: 2;
    }

    input:focus {
      border: 1.1px solid #1c62b9;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    button {
      position: absolute;
      width: 11%;
      height: 33px;
      border: 1px solid #bebebe;
      border-left: 0;
      top: 12px;
      right: 0;
      border-radius: 0px 2px 2px 0;
      text-align: center;
      background-color: #f0f0f0;
      z-index: 1;
    }

    button svg {
      opacity: 0.5;
      transition: all 0.07s ease-in-out;
    }

    button:hover svg {
      opacity: 0.95;
    }

    button:hover {
      background-color: #e4e4e4;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15),
        inset 0 0 2px rgba(0, 0, 0, 0.05);
      transition: all 0.07s ease-in-out;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    width: 50%;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    span {
      font-size: 12px;
      color: #333;
      font-size: bold;
    }
  }
`;
