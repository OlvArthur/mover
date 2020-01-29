import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #3349;
  padding: 0 20%;
  border-radius: 20px;

  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 70px;

  color: white;
`;

export const Header = styled.header`
  margin: 50px 0 20px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  float: none;
  color: white;

  h1 {
    margin: 0 0 0 0 -6px;
    font: 0/0 a;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: normal;
  }
`;

export const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10%;
  flex-wrap: wrap;
  line-height: 20px;
  margin: 0px 0px 20px;
  justify-content: center;
  border: none;
`;

export const ForgotLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
`;

export const Half = styled.div`
  div {
    padding-right: 10%;
    box-sizing: border-box;
    font-size: 1.7rem;

    & + div {
      padding-top: 20px;
    }
  }
`;

export const Divider = styled.div`
  width: 0%;
  position: relative;

  span {
    position: absolute;
    width: 46px;
    height: 18%;
    left: -23px;
    border: 2px solid #fff;
    top: 41%;
    text-align: center;
    display: flex;
    border-radius: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.2rem;
    line-height: 30px;
    color: #b7bbc8;
  }
`;

export const RegisterLink = styled(Link)``;

export const Form = styled.form`
  width: 55%;
  display: block;

  button {
    display: block;
    padding: 0.5em 5em;
    margin-bottom: 7px;
    background: #7159c1;
    border: none;
    border-radius: 4px;
  }
`;
