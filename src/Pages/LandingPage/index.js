import React, { Component } from 'react';

import { Container, Wrapper, Description, FormBox } from './styles';
import api from '../../services/api';

export default class LandingPage extends Component {
  state = {
    contractor: {
      name: {
        value: '',
      },
      position: {
        value: '',
      },
      email: {
        value: '',
      },
      companyName: {
        value: '',
      },
      numberOfEmployees: {
        value: 0,
      },
    },
  };

  handleChange = event => {
    const { contractor } = this.state;

    const { name } = event.target;
    const { value } = event.target;

    this.setState({
      contractor: {
        ...contractor,
        [name]: {
          ...contractor[name],
          value,
        },
      },
    });
  };

  handleSubmit = async () => {
    const { contractor } = this.state;
    const {
      name,
      position,
      email,
      companyName,
      numberOfEmployees,
    } = contractor;

    const data = {
      name: name.value,
      position: position.value,
      email: email.value,
      companyName: companyName.value,
      numberOfEmployees: numberOfEmployees.value,
    };

    const response = await api.post('/landingpage', {
      name: name.value,
      position: position.value,
      email: email.value,
      companyName: companyName.value,
      numberOfEmployees: numberOfEmployees.value,
    });

    console.log(data, response);
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Description>
            <h1>Quanto custa os materias da sua obra?</h1>
            <p>
              É isso mesmo! <strong>Aposto com você</strong> que você nunca
              parou para calcular o custo que você tem para comprar os materias
              para sua obra ou se parou, levou em conta só o custo direto do
              material
            </p>

            <ul>
              <li>Você consegue, aos menos, 5 cotações por material?</li>
              <li>
                Você já comprou em uma loja apenas pela comodidade da loja de
                ter todos os itens, ainda que estivesse pagando mais caro?
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
                posso te mostrar como otimizar e melhorar teu processo de
                cotação, compra e entrega de material.
              </strong>
            </p>
          </Description>

          <FormBox onSubmit={this.handleSubmit}>
            <h1>
              Cadastre-se e experimente
              <br /> o primeiro mês sem <br />
              mensalidade(<strong>É GRÁTIS</strong>).
            </h1>

            <input
              type="text"
              name="name"
              size={40}
              placeholder="NOME"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="position"
              placeholder="CARGO"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              // value={contractor.email.value}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="EMPRESA"
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="numberOfEmployees"
              placeholder="QTD DE FUNCIONÁRIOS"
              onChange={this.handleChange}
            />

            <button type="submit">
              <strong>Cadastre-se</strong>
            </button>
          </FormBox>
        </Wrapper>
      </Container>
    );
  }
}
