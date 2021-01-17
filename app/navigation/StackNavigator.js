import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/Home';
import Profile from '../components/Profile';
import Favourite from '../components/Favourite';
import Messages from '../components/Messages';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'red',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ProfileStack"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favourites" component={Favourite} />
    </Stack.Navigator>
  );
};
const MessagesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ProfileStackNavigator,
  FavouriteStackNavigator,
  MessagesStackNavigator,
};
