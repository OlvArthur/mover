import React, { Component } from 'react';
import LoginBox from './components/LoginBox/index';

class Sign extends Component {
  state = {
    LoginOnTop: true,
  };

  render() {
    const { LoginOnTop } = this.state;

    return <LoginBox>{LoginOnTop}</LoginBox>;
  }
}

export default Sign;
