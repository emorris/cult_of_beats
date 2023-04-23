import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import configureStore from '../store/index.js';
import MainApp from '../components/Layouts/MainApp';
import Home from '../components/Home/Index';
import Login from '../components/LoginSignUp/Index'
import Logout from '../components/LoginSignUp/Logout'
import Alerts from '../components/Alerts/Index'
import UserSettings from '../components/UserSettings/Index'
// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <Provider store={configureStore}>
    <BrowserRouter>
      <MainApp>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/settings"
            element={<UserSettings />}
          />
          
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/logout"
            element={<Logout />}
          />
        </Routes>
      </MainApp>
    </BrowserRouter>
  </Provider>
);

export default App;
