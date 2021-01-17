import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  ProfileStackNavigator,
  FavouriteStackNavigator,
  MessagesStackNavigator,
} from './StackNavigator';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'red',
      }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
      <Drawer.Screen name="Favourites" component={FavouriteStackNavigator} />
      <Drawer.Screen name="Messages" component={MessagesStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
