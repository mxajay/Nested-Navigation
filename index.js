/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './app/store/configureStore';
import App from './app/App';
import {name as appName} from './app.json';
const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
