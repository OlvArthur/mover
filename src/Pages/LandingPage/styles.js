import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  margin: 10px 20px;

  img {
    width: 180px;
    height: 70px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Description = styled.text`
  width: 100%;
  height: 100%;
  margin-left: 100px;

  h1 {
    margin: 20px 100px;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
  }

  p {
    color: #fff;
    margin: 0 70px;
    font-size: 22px;
    line-height: 30px;
  }

  ul {
    color: #fff;
    padding: 20px 80px;
    font-size: 22px;
    line-height: 30px;
    font-weight: bold;

    li {
      & + li {
        padding-top: 15px;
      }
    }
  }
`;

export const FormBox = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 25px;
  margin-left: 20px;
  background: #c1d0dc;
  margin-top: 20px;
  margin-right: 400px;
  justify-items: center;
  border-radius: 9px;
  height: 800px;

  h1 {
    padding: 90px 0px 20px 0;
    font-size: 30px;
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
  }

  button {
    background: #d02b08;
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
