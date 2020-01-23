import React, { Component } from 'react';

import {
  Spring,
  BloomerBox,
  BloomerField,
  BloomerNotification,
  BloomerLabel,
  BloomerControl,
  BloomerInput,
  BloomerHelp,
  BloomerButton,
} from './styles';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errors: '',
  };

  render() {
    const { password, errors, email, name } = this.state;
    const { clickedState, clicked } = this.props;
    const LoginOnTop = clickedState;

    return (
      <Spring>
        <BloomerBox>
          <form>
            <h1>REGISTER</h1>

            <BloomerField>
              {errors ? (
                <BloomerNotification isColor="danger">
                  {errors}
                </BloomerNotification>
              ) : null}

              <BloomerLabel>Name: </BloomerLabel>
              <BloomerControl>
                <BloomerInput
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
              </BloomerControl>
              {name.length > 0 && name.length < 3 ? (
                <BloomerHelp isColor="danger">
                  Nome precisa ter no mínimo 3 caracteres
                </BloomerHelp>
              ) : null}
            </BloomerField>

            <BloomerField>
              <BloomerLabel>Email: </BloomerLabel>
              <BloomerControl>
                <BloomerInput
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </BloomerControl>
              {email.length > 0 && email.length < 3 ? (
                <BloomerHelp isColor="danger">
                  Email preciter no mínimo 3 caracteres.
                </BloomerHelp>
              ) : null}
            </BloomerField>

            <BloomerField>
              <BloomerLabel>Password: </BloomerLabel>
              <BloomerControl>
                <BloomerInput
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
                {password.length > 0 && password.length < 8 ? (
                  <BloomerHelp isColor="danger">
                    Password must be a minimum length of 8.
                  </BloomerHelp>
                ) : null}
              </BloomerControl>
            </BloomerField>

            <BloomerField isGrouped>
              <BloomerControl>
                <BloomerButton
                  style={{
                    display: LoginOnTop ? 'none' : 'block',
                  }}
                  type="submit"
                  isColor="danger"
                >
                  REGISTER
                </BloomerButton>
                <BloomerButton
                  onClick={clicked}
                  style={{
                    display: LoginOnTop ? 'block' : 'none',
                  }}
                  isColor="danger"
                >
                  REGISTER
                </BloomerButton>
              </BloomerControl>
              <BloomerControl>
                <BloomerButton
                  onClick={clicked}
                  isColor="primary"
                  style={{ display: LoginOnTop ? 'none' : 'block' }}
                >
                  LOGIN
                </BloomerButton>
              </BloomerControl>
            </BloomerField>
          </form>
        </BloomerBox>
      </Spring>
    );
  }
}

export default Register;
