import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: auto;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: block;
  float: none;
  margin: 50px 0 20px 0;

  h1 {
    margin: 0 0 0 0 -6px;
    font: 0/0 a;
  }
`;

export const FlexGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  float: none;
  line-height: 22.5px;
  position: static;
  z-index: auto;
  margin: 50px 0px 20px;
  border: none;

  div {
  }
`;
