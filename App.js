import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store'

import PrincipalLayout from './src/principal/Index';
import Loading from './src/screens/containers/Loading';

const App = () => (
  <Provider
    store={store}
  >
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    > 
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <PrincipalLayout />
    </PersistGate>
  </Provider>
);

export default App;