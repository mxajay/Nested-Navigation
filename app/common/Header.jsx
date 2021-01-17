import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
var commonStyle = require('../assests/styles');

const Header = (props) => {
  const {navigation} = props;
  return (
    <View style={[commonStyle.header]}>
      <TouchableOpacity
        style={[commonStyle.drawerTogglerContainer]}
        onPress={() => navigation.toggleDrawer()}>
        <Image
          style={[commonStyle.drawerTogglerImage]}
          source={require('../assests/icons/menu.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
