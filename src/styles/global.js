import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import px2vw from '../utils/px2vw';

// import background from '../assets/images/background.jpg';
import background from '../assets/images/b6.jpg';

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
    padding: 0 20px 50px;
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
   /* background: #f5d558;*/
    background: url(${background}) no-repeat center fixed ;
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
