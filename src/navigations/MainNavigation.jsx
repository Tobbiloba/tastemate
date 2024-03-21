import React from 'react';
import {createStackNavigator as createNativeStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen.jsx';
import AllMenus from '../screens/AllMenus.jsx';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={() => ({
        headerShown: false,
        headerTintColor: 'white',
        headerShadowVisible: false,
        headerStyle: {backgroundColor: 'white'},
        // gestureEnabled: true,
        // ...TransitionPresets.SlideFromRightIOS
      })}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AllMenus" component={AllMenus} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
