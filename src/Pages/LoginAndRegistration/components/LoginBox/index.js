import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
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

class LoginBox extends Component {
  state = {
    email: '',
    password: '',
    errors: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginUser = e => {
    e.preventDefault();
    const { email } = this.state;

    alert(`You are logged in as ${email}`);
  };

  render() {
    const { email, password, errors } = this.state;
    const { clickedState, clicked } = this.props;
    const onTop = clickedState;

    return (
      <Container>
        <Spring onTop={onTop}>
          <BloomerBox>
            <form onSubmit={this.loginUser}>
              <BloomerField>
                <h1>Login</h1>
                {errors ? (
                  <BloomerNotification isColor="danger">
                    {errors}
                  </BloomerNotification>
                ) : null}
                <BloomerLabel>Email: </BloomerLabel>
                <BloomerControl>
                  <BloomerInput
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </BloomerControl>
              </BloomerField>
              <BloomerField>
                <BloomerLabel>Password: </BloomerLabel>
                <BloomerControl>
                  <BloomerInput
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    required
                  />
                </BloomerControl>
                {password.length > 0 && password.length < 8 ? (
                  <BloomerHelp isColor="danger">
                    Senha precisa ter no minimo 8 caracteres.
                  </BloomerHelp>
                ) : null}
              </BloomerField>

              <BloomerField isGrouped style={{ marginBottom: '2em' }}>
                <BloomerControl>
                  <BloomerButton
                    style={{ display: onTop ? 'block' : 'none' }}
                    type="submit"
                    isColor="primary"
                    disabled={!!(email.length < 5 || password.length < 8)}
                  >
                    LOGIN
                  </BloomerButton>
                  <BloomerButton
                    style={{ display: onTop ? 'none' : 'block' }}
                    isColor="primary"
                  >
                    LOGIN
                  </BloomerButton>
                </BloomerControl>

                <BloomerControl>
                  <BloomerButton
                    onClick={clicked}
                    isColor="danger"
                    style={{ display: onTop ? 'block' : 'none' }}
                  >
                    REGISTER
                  </BloomerButton>
                </BloomerControl>
              </BloomerField>
            </form>
          </BloomerBox>
        </Spring>
      </Container>
    );
  }
}

LoginBox.propTypes = {
  clickedState: PropTypes.bool.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default LoginBox;
