import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  margin: 20px;
  min-height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: initial;
`;

export const Description = styled.div`
  width: 70%;
  height: 100%;

  h1 {
    margin: 20px 100px;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    margin: 0 70px;
    font-size: 22px;
  }

  ul {
    padding: 20px 80px;
    font-size: 22px;
    font-weight: bold;

    li {
      & + li {
        padding-top: 5px;
      }
    }
  }
`;

export const FormBox = styled.form`
  flex: 1;

  margin-bottom: 15px;

  background: #c1d0dc;
  margin-top: 20px;
  margin-right: 50px;
  justify-items: center;
  border-radius: 9px;

  h1 {
    padding: 20px 20px;
    font-size: 20px;
    text-align: center;

    > strong {
      color: #0a87eb;
    }
  }

  input,
  button {
    padding: 10px;
    margin: 4px 40px;
    border: 1px solid #eee;
    border-radius: 5px;
    color: #333;
    width: 80%;
  }

  button {
    background: #e25552;
    margin-top: 15px;
    margin-bottom: 20px;

    padding: 18px;
    > strong {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: black;
    }
  }
`;
