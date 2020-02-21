import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  background: #fff;

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 1.5em;
    text-decoration: none;
    box-sizing: border-box;
  }

  nav {
    display: inline-block;
    overflow: hidden;
  }

  nav a {
    float: left;
    font-size: 1.3em;
    padding: 0.6em 0.6em;
  }
`;

export const Dropdown = styled.div`
  float: left;
  overflow: hidden;
  flex: 1;

  transition: display 3.3s;

  &:hover div {
    display: block;
  }

  & > button {
    font-size: 1.3em;
    padding: 0.6em 0.8em;
    color: #333;
    font-family: sans-serif;
    text-align: center;
    background: inherit;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
      background: #d3d3d3;
    }
  }
  div {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 220px;
    z-index: 1;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);

    &:hover div {
      display: block;
    }

    div {
      display: none;
    }
    button {
      padding: 4px;
      float: none;
      color: #333;
      display: block;
      text-align: left;
      font-size: 1.6em;
      border: 0;
    }
  }
`;
