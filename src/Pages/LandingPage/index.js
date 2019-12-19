import React from 'react';

import { Container, Wrapper, Description, FormBox } from './styles';

export default function LandingPage() {
  return (
    <Container>
      <Wrapper>
        <Description>
          <h1>Quanto custa os materias da sua obra?</h1>
          <p>
            É isso mesmo! <strong>Aposto com você</strong> que você nunca parou
            para calcular o custo que você tem para comprar os materias para sua
            obra ou se parou, levou em conta só o custo direto do material
          </p>

          <ul>
            <li>Você consegue, aos menos, 5 cotações por material?</li>
            <li>
              Você já comprou em uma loja apenas pela comodidade da loja de ter
              todos os itens, ainda que estivesse pagando mais caro?
            </li>
            <li>Você já atrasou sua obra por atraso do fornecedor?</li>
            <li>
              Quanto tempo você deixa a fiscalização da obra em segundo plano
              para comprar material?
            </li>
          </ul>

          <p>
            Se você respondeu e está <strong>satisfeito</strong> com todas as
            suas respostas acima
            <strong>
              , pode parar por aqui e continuar seu processo de aquisição de
              maneira tradicional
            </strong>
            . Mas, se você está <strong>insatisfeito</strong> com alguma das
            respostas anteriores,{' '}
            <strong>
              posso te mostrar como otimizar e melhorar teu processo de cotação,
              compra e entrega de material.
            </strong>
          </p>
        </Description>

        <FormBox>
          <h1>
            Cadastre-se e experimente
            <br /> o primeiro mês sem <br />
            mensalidade(<strong>É GRÁTIS</strong>).
          </h1>

          <input type="text" size={40} placeholder="NOME" />
          <input type="text" placeholder="CARGO" />
          <input type="text" placeholder="E-MAIL" />
          <input type="text" placeholder="EMPRESA" />
          <input type="text" placeholder="QTD DE FUNCIONÁRIOS" />

          <button type="submit">
            <strong>Cadastre-se</strong>
          </button>
        </FormBox>
      </Wrapper>
    </Container>
  );
}
