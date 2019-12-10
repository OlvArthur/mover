import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background3.png';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {

  /*
  Customização padrão global sugerida
  */
  margin:0;
  padding:0;
  outline: 0;
  box-sizing: border-box;
}

html,body,#root {
  /*Permite que ocupem a pagina inteira */
  min-height:100%;
}

body {
   /* background: #f5d558;*/
    background: url(${background}) no-repeat center top ;
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
