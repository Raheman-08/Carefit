import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Registration from './src/screens/Registration';
import HomeScreen from './src/screens/HomeScreen';
import WatchConnect from './src/screens/WatchConnect';
import History from './src/screens/History';
import Setting from './src/screens/Setting';
import EditProfile from './src/screens/EditProfile';
import Privacy from './src/screens/Privacy';
import ForgotPassword from './src/screens/ForgotPassword';
import OtpScreen from './src/screens/OtpScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
import { Platform } from 'react-native';



export const HomeTabNavigator = () => (
  <Bottom.Navigator
    screenOptions={{
      tabBarStyle: {height: 90, gap: 20},
      tabBarActiveTintColor: '#F57B36',
    }}>
    <Bottom.Screen
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="home" color={color} size={size} />
        ),
      }}
      name="Home"
      component={HomeScreen}
    />
    <Bottom.Screen
      name="History"
      component={History}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="history" color={color} size={size} />
        ),
      }}
    />
    <Bottom.Screen
      name="Settings"
      component={Setting}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="settings" color={color} size={size} />
        ),
      }}
    />
  </Bottom.Navigator>
);

const SettingStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={Setting}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Edit"
        component={EditProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Privacy"
        component={Privacy}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OtpScreen"
          component={OtpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Registration}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Connect"
          component={WatchConnect}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Edit"
          component={EditProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Privacy"
          component={Privacy}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={HomeTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SettingStack"
          component={SettingStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
