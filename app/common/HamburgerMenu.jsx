import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {HAMBERGUR_MENU} from '../utils/Constants';
var commonStyle = require('../assests/styles');

const HamburgerMenu = (props) => {
  return (
    <View style={[commonStyle.hambergurContainer]}>
      <View style={[commonStyle.hambergurTopSection]}>
        <View style={[commonStyle.row, commonStyle.hambergurProfileContainer]}>
          <Image
            style={commonStyle.hambergurProfileImage}
            width="100%"
            height="100%"
            source={require('../assests/images/user.png')}
          />
          <View style={commonStyle.hambergurProfileInfo}>
            <Text style={{fontSize: 20, textTransform: 'capitalize'}}>
              Ajay Kumar
            </Text>
          </View>
        </View>
      </View>
      <View style={[commonStyle.hambergurBottomSection]}>
        {HAMBERGUR_MENU.map((menu) => {
          return (
            <TouchableOpacity
              style={[commonStyle.hambergurBottomMenu]}
              key={menu.id}>
              <View style={[commonStyle.row, {alignItems: 'center'}]}>
                <Image
                  style={[commonStyle.drawerTogglerImage, {marginTop: 0}]}
                  source={menu.image}
                />
                <Text style={[commonStyle.hambergurBottomMenuText]}>
                  {menu.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={commonStyle.hambergurCopyrightSection}>
        All Right Reserved To Maxdigi Solutions.
      </Text>
    </View>
  );
};

export default HamburgerMenu;
