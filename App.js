import React from 'react';
import { AppRegistry } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

AppRegistry.registerComponent('mobile', () => App);