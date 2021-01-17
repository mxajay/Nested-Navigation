import React from 'react';
import {View, Text} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {Layout} from '../../common';
import {DEVICE_HEIGHT} from '../../utils/Constants';

const Messages = ({navigation, route}) => {
  const headerHeight = useHeaderHeight();
  return (
    <Layout>
      <View
        style={{
          height: DEVICE_HEIGHT - 55 - headerHeight,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <Text>This is the {route.name} screen</Text>
      </View>
    </Layout>
  );
};

export default Messages;
