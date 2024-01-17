import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../HomeScreen';
import Setting from '../Setting';
import History from '../History';

const Bottom = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Bottom.Navigator>
      {/* <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */}

      <Bottom.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />

      <Bottom.Screen
        name="Settings"
        component={Setting}
        options={{headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default BottomBar;
