import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'company',
      storage,
      whitelist: ['auth', 'user', 'cart'],
    },
    reducers
  );

  return persistedReducer;
};