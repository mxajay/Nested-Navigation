import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {navigate} from '../utils/Functions';
var commonStyle = require('../assests/styles');

const Footer = (props) => {
  return (
    <View style={[commonStyle.footer]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[commonStyle.footerIconContainer]}>
          <Image
            style={[commonStyle.footerIcon]}
            source={require('../assests/icons/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.footerIconContainer]}>
          <Image
            style={[commonStyle.footerIcon]}
            source={require('../assests/icons/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.footerIconContainer]}>
          <Image
            style={[commonStyle.footerIcon]}
            source={require('../assests/icons/favourite.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyle.footerIconContainer]}>
          <Image
            style={[commonStyle.footerIcon]}
            source={require('../assests/icons/updates.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
