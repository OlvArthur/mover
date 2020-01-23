import styled from 'styled-components';
import { animated } from 'react-spring';
import { Input, Label, Control, Box, Field, Help, Button } from 'bloomer';

export const Container = styled.div`
  background: #ffff;
`;

export const Spring = styled(animated.div).attrs({
  to: {
    width: '50%',
    position: 'absolute',
    zIndex: 2,
    opacity: props => (props.onTop ? 1 : 0.4),
    transform: props => (props.onTop ? 'translateY(0em)' : 'translateY(1em)'),
  },
  config: { duration: 250 },
})``;

export const BloomerBox = styled(Box)`
  h1 {
    margin-bottom: 10em;
  }
`;

export const BloomerField = styled(Field)``;

export const BloomerNotification = styled(Notification)``;

export const BloomerLabel = styled(Label)``;

export const BloomerControl = styled(Control)``;

export const BloomerInput = styled(Input)``;

export const BloomerHelp = styled(Help)``;

export const BloomerButton = styled(Button)``;
