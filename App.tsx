import { Fragment } from 'react';

import { StatusBar } from 'expo-status-bar';

import StoreProvider from './store/provider';

import Navigator from './components/navigation';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />

      <StoreProvider>
        <Navigator />
      </StoreProvider>
    </Fragment>
  );
}
