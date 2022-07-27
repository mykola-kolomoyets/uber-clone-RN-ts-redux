import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import navigationReducer from './slices/navigation';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

const store = configureStore({
  reducer: {
    navigation: navigationReducer
  },
  middleware: customizedMiddleware
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatch: () => Dispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export default store;
