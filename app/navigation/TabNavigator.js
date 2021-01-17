import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Feather';

import {
  MainStackNavigator,
  ProfileStackNavigator,
  FavouriteStackNavigator,
  MessagesStackNavigator,
} from './StackNavigator';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const TabBarIcon = (props) => {
    return (
      <Icon
        name={props.name}
        size={22}
        style={{marginBottom: -2}}
        color={props.focused ? 'red' : 'grey'}
      />
    );
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {paddingBottom: 10, height: 55},
        activeTintColor: 'red',
      }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteStackNavigator}
        options={{
          title: 'Favourites',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="heart" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStackNavigator}
        options={{
          title: 'Messages',
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} name="message-square" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
