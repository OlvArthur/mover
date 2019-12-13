import styled from 'styled-components';

import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  flex: 1;
  flex-wrap: wrap;

  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

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
    color: #333;
  }

  p {
    color: #333;
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

  background: #c1d0dc;
  border-radius: 9px;
  min-height: ${px2vw(200, 768)};
  height: 100%;
  flex-direction: column;
  width: ${px2vw(320, 320)};
  padding: ${px2vw(20)};

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }

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

/*
     flex: 1;
  margin-left: auto;
  margin-top: 20px;
  margin-right: 250px;
  justify-items: center;
  */
