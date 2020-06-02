import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import GuesserCounter from './src/GuesserCounter';

const store = createStore(reducer)

const initialState = {
  counter: 0
}
const reducer = (state=initialState) => {
  return state
}

export default function App() {

  return (
    <Provider store={store}>
      <GuesserCounter />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
