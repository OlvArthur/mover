import React, { Component } from 'react';

import LoginBox from './components/LoginBox';
import Register from './components/RegisterBox';
import { Container } from './styles';

class Sign extends Component {
  state = {
    LoginOnTop: true,
  };

  clicked = () => {
    this.setState(prevState => ({ LoginOnTop: !prevState.LoginOnTop }));
  };

  render() {
    const { LoginOnTop } = this.state;

    return (
      <Container>
        <LoginBox clickedState={LoginOnTop} clicked={this.clicked} />
        <Register clickedState={LoginOnTop} clicked={this.clicked} />
      </Container>
    );
  }
}

export default Sign;
