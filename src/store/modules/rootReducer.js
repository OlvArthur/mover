import { combineReducers } from 'redux';

import cart from './cart/reducer';
import session from './session/reducer';

export default combineReducers({
  cart,
  session,
});
