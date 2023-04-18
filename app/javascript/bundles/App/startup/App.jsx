import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import configureStore from '../store/index.js';
import Counter from '../components/Counter';
import Header from '../components/Header/Index';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <Provider store={configureStore}>
    <Header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Counter />}
          />
        </Routes>
      </BrowserRouter>
    </Header>
  </Provider>
);

export default App;
