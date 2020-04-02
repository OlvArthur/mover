import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  background: #3349;
  border-radius: 10px;
  margin: 10% 20%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;

    width: 100px;
    height: 79px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  font-size: 1.7rem;

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #f64c75;
    align-self: flex-start;
    margin: 0 0 10px;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    background: #ab59c1;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#ab59c1')};
    }
  }

  a {
    text-decoration: none;
    text-align: center;
    display: block;

    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
