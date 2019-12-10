import { createGlobalStyle } from 'styled-components';

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
    background: #445270;


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
