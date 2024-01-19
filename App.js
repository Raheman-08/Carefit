import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Registration from './src/screens/Registration';
import HomeScreen from './src/screens/HomeScreen';
import WatchConnect from './src/screens/WatchConnect';
import History from './src/screens/History';
import Setting from './src/screens/Setting';
import EditProfile from './src/screens/EditProfile';
import Privacy from './src/screens/Privacy';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer navigationOptions={{gesturesEnabled: false}}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Registration} />
      <Stack.Screen options={{headerShown: false}} name="Connect" component={WatchConnect} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="History" component={History} />
      <Stack.Screen options={{headerShown: false}} name="Setting" component={Setting} />
      <Stack.Screen options={{headerShown: false}} name="Edit" component={EditProfile} />
      <Stack.Screen options={{headerShown: false}} name="Privacy" component={Privacy} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}