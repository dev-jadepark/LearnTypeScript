/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Profile from './Profile';
import { Text } from 'react-native';
import MessageForm from './MessageForm';
import Counter from './Counter';

function App() {
  return (
    <>
      <Profile name="Jond Doe">
        <Text>Hellow World</Text>
      </Profile>
      <MessageForm />
      <Counter />
    </>
  );
}

export default App;
