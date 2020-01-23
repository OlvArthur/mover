import styled from 'styled-components';
import { animated } from 'react-spring';
import {
  Box,
  Field,
  Label,
  Control,
  Input,
  Button,
  Notification,
  Help,
} from 'bloomer';

export const Spring = styled(animated.div).attrs({
  to: {
    width: '50%',
    position: 'absolute',
    zIndex: props => (props.LoginOnTop ? 1 : 2),
    opacity: props => (props.LoginOnTop ? 0.4 : 1),
    transform: props =>
      props.LoginOnTop ? 'translateY(0em)' : 'translatey(-1em)',
  },
  config: { duration: 250 },
})``;

export const Container = styled.div``;

export const BloomerBox = styled(Box)``;

export const BloomerField = styled(Field)``;

export const BloomerLabel = styled(Label)``;

export const BloomerControl = styled(Control)``;

export const BloomerInput = styled(Input)``;

export const BloomerButton = styled(Button)``;

export const BloomerNotification = styled(Notification)``;

export const BloomerHelp = styled(Help)``;
