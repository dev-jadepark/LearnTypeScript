import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Counter from '../Counter';
import MessageForm from '../MessageForm';
import Profile from '../Profile';
import MainTab, { MainTabNavigationScreenParams } from './MainTab';

type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();


type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <Text>Detail {params.id}</Text>
    </View>
  )
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={MainTab} name="MainTab" options={{headerShown: false}} />
      <Stack.Screen component={DetailScreen} name="Detail" />
    </Stack.Navigator>
  )
}

export default RootStack;