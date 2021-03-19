import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import RootRouter from './router/RootRouter';

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App;
