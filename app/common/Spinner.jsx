import React from 'react';
import {ActivityIndicator, StyleSheet, View, Dimensions} from 'react-native';

const Spinner = (props) => {
  return (
    <React.Fragment>
      {props.spinner ? (
        <View style={[styles.container]}>
          <ActivityIndicator
            animating={props.spinner}
            size="large"
            color="#e6131a"
          />
        </View>
      ) : (
        <View />
      )}
    </React.Fragment>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 9,
  },
});
