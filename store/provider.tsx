import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';

import store from '.';

type StoreProviderProps = {
  children: ReactNode;
};
const StoreProvider: FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
