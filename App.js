import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Registration from './src/screens/Registration';
import HomeScreen from './src/screens/HomeScreen';
import WatchConnect from './src/screens/WatchConnect';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Registration} />
      <Stack.Screen options={{headerShown: false}} name="Connect" component={WatchConnect} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}