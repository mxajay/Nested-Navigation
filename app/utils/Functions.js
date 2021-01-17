import {useState, useCallback} from 'react';
import {Alert, Linking, Platform} from 'react-native';

export function DateFormatter(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  date = yyyy + '-' + mm + '-' + dd;
  return date;
}

export function openMap(lat, lng, label = null) {
  const url =
    Platform.OS == 'android'
      ? 'google.navigation:q=' + lat + '+' + lng
      : // : 'maps://app?saddr=100+101&daddr=' + lat + '+' + lng; // Native map
        'comgooglemaps://?saddr=100+101&daddr=' + lat + '+' + lng; // Google map
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      //Alert.alert('ERROR', 'Unable to open: ' + url, [{text: 'OK'}]);
      Alert.alert('Notice', 'Please install Google Map: ' + url, [
        {text: 'OK'},
      ]);
    }
  });
}
