/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <>
      <Container>
        <div>Jurunense</div>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://verbrascorp.websiteseguro.com/static/media/VERTEX_ECONOMICO_36L_46sAbjn.png"
                  alt="Tinta"
                />
              </td>
              <td>
                <strong>Tinta fosca Verbrás</strong>
                <span>R$20,00</span>
              </td>
              <td>
                <div>
                  {/** td não pode receber display: flex, por iso a nova div */}
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={9} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$180,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <ProductTable>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://telhanorte.vteximg.com.br/arquivos/seo-argamaca-rejunte-0.jpg?v=636262292076300000"
                  alt="Argamassa"
                />
              </td>
              <td>
                <strong>Argamassa AC3 Quartizolit</strong>
                <span>R$20,00</span>
              </td>
              <td>
                <div>
                  {/** td não pode receber display: flex, por iso a nova div */}
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={7} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$140,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <ProductTable>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://cdn.awsli.com.br/600x450/158/158648/produto/6825883/05a1e2f988.jpg"
                  alt="Tubo"
                />
              </td>
              <td>
                <strong>Tubo PVC 40º Krona</strong>
                <span>R$18,00</span>
              </td>
              <td>
                <div>
                  {/** td não pode receber display: flex, por iso a nova div */}
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={30} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$540,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">APROVAR O PEDIDO</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$860,00</strong>
          </Total>
        </footer>
      </Container>

      <Container>
        <div>Lojão do Pedreiro</div>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="http://t0.gstatic.com/images?q=tbn%3AANd9GcSYpHAZcFzOH-NeBMt1AGxFv6e9b5CFFScifZ3qrA3i8a7-V1hPEbWpCdqBIcQqQq0MPLL-nGEH&usqp=CAc"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Massa PVA Coral</strong>
                <span>R$16,00</span>
              </td>
              <td>
                <div>
                  {/** td não pode receber display: flex, por iso a nova div */}
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={10} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$160,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <ProductTable>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://www.ecompletocdn.com.br/i/fp/1909/1063005_2_1565807868.png"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Cimento CP2 Z Votorantim</strong>
                <span>R$21,00</span>
              </td>
              <td>
                <div>
                  {/** td não pode receber display: flex, por iso a nova div */}
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={20} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$420,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">APROVAR O PEDIDO</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$580,00</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}
