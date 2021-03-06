import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import px2vw from '../utils/px2vw';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
}

#root {
    margin: 0 auto;
    padding: 0 0px 50px;
  }

:root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

body {
    background: linear-gradient(-90deg, #0F2027,#203A43,#2C5364 );
    background-size: 100% 100%;
  /* Para melhor definição das letras na página*/
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color:#222;
  font: 14px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

form {
  min-height: 100%;
}
`;
