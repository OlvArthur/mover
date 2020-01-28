import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  padding-left: 25%;
  padding-right: 25%;

  color: white;
`;

export const Header = styled.header`
  margin: 50px 0 20px 0;
  box-sizing: border-box;
  display: block;
  float: none;
  color: white;

  h1 {
    margin: 0 0 0 0 -6px;
    font: 0/0 a;
  }

  h2 {
    font-size: 4.5rem;
    font-weight: normal;
  }
`;

export const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  flex-wrap: wrap;
  line-height: 22.5px;
  margin: 50px 0px 20px;
  border: none;

  div {
    padding-right: 10%;
    box-sizing: border-box;
  }
`;

export const ForgotLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
`;

export const Half = styled.div``;

export const Divider = styled.div``;

export const RegisterLink = styled(Link)``;

export const Form = styled.form`
  width: 55%;
  display: block;

  div {
  }
`;
