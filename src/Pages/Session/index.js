import React from 'react';

import { Container, Header, FlexGrid } from './styles';

export default function Session() {
  return (
    <Container>
      <Header>
        <h1>Intregra Login</h1>
        <h2>Log In!</h2>
      </Header>

      <FlexGrid>
        <div>
          <form>
            <div>
              <label>Email</label>
              <input type="text" name="email" required="required" />
            </div>
          </form>
        </div>
      </FlexGrid>
    </Container>
  );
}
