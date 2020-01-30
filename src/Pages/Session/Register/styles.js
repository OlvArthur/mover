import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #3349;
  border-radius: 20px;
  margin: 0 20%;

  display: block;
  text-align: center;

  color: white;
`;

export const Header = styled.header`
  h1 {
    margin: 0 0 0 0 -6px;
    font: 0/0 a;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: normal;
  }
`;

export const Form = styled.form`
  margin-top: 5%;

  display: inline-block;
  margin-left: auto;
  margin-right: auto;

  font-size: 1.7rem;

  div {
    & + div {
      padding-top: 20px;
    }
  }

  label {
    display: flex;
    flex: 1;
  }
  button {
    text-align: center;
    margin: auto;
    display: block;
    padding: 0.5em 5em;
    margin-bottom: 7px;
    background: #7159c1;
    border: none;
    border-radius: 4px;
  }
`;

export const RegisterLink = styled(Link)``;
