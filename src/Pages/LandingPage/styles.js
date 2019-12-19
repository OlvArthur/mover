import styled from 'styled-components';

import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  flex: 1;
  flex-wrap: wrap;

  justify-content: center;
  margin: ${px2vw(16)} ${px2vw(128)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Description = styled.text`
  width: 100%;
  height: 100%;

  h1 {
    margin: ${px2vw(10)} ${px2vw(100)};
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
  }

  p {
    color: #fff;
    padding: ${px2vw(0)} ${px2vw(70)};
    font-size: 1.3rem;
    line-height: 25px;
  }

  ul {
    color: #fff;
    padding: ${px2vw(30)} ${px2vw(80)};
    font-size: 1.3rem;
    line-height: ${px2vw(30)};
    font-weight: bold;

    li {
      & + li {
        padding-top: ${px2vw(15)};
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
    padding: ${px2vw(20)} 0px ${px2vw(30)} 0;
    font-size: 2rem;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 1.8rem;
    }

    > strong {
      color: #0a87eb;
    }
  }

  input,
  button {
    padding: ${px2vw(10)};
    margin: ${px2vw(4)} ${px2vw(40)};
    margin-top: ${px2vw(20)};

    border: 1px solid #eee;
    border-radius: 5px;
    color: #fff;
  }

  button {
    background: #d02b08;
    margin-top: 15px;
    margin-bottom: 10px;

    padding: ${px2vw(18)};
    > strong {
      text-transform: uppercase;
      font-size: ${px2vw(23)};
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
