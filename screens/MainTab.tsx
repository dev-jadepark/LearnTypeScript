import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigationProp } from './RootStack';
import { Button, Text, View } from 'react-native';
import Profile from '../Profile';
import MessageForm from '../MessageForm';
import Counter from '../Counter';

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};
export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

//추후 RootStack 내부 화면에서
// navigation.navigate('MainTab', { screen: 'Account' }) 가 가능하게 해줌
export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };
  return (
    <View>
      <Profile name="Jond Doe">
        <Text>Hellow World</Text>
      </Profile>
      <MessageForm />
      <Counter />
      <Text>Home</Text>
      <Button title="open Detail" onPress={onPress} />
    </View>
  );
}
 
function AccountScreen() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;