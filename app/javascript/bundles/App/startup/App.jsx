import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/index.js';
import HelloWorld from '../components/HelloWorld';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <Provider store={configureStore(props)}>
    <HelloWorld />
  </Provider>
);

export default App;
