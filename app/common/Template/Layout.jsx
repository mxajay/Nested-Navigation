import React from 'react';
import {SafeAreaView, StatusBar, ScrollView, View} from 'react-native';
import commonStyle from '../../utils/CommonStyles';

const Layout = (props) => {
  return (
    <SafeAreaView style={[commonStyle.container]}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      {props.scrollview ? (
        <ScrollView
          style={[commonStyle.body]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {props.children}
        </ScrollView>
      ) : (
        <View style={[commonStyle.body]}>{props.children}</View>
      )}
    </SafeAreaView>
  );
};

export default Layout;
