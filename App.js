import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import TestScreen from './screens/TestScreen';
import ResultScreen from './screens/ResultScreen';
import MenuScreen from './screens/assets/MenuScreen';
import KnigiScreen from './screens/KnigiScreen';
import AboutScreen from './screens/AboutScreen';
import MistakeListScreen from './screens/MistakeListScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Knigi" component={KnigiScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Mistakes" component={MistakeListScreen}options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
