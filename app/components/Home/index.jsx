import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import commonStyle from '../../utils/CommonStyles';
import {getData} from '../../actions';
import {Layout, ImageGrid, Button, Carousel} from '../../common';
import useDeviceOrientation from '@rnhooks/device-orientation';

const Home = ({navigation}) => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [resetSliderLayout, setResetSliderLayout] = useState();
  const deviceOrientation = useDeviceOrientation();

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    setResetSliderLayout(Math.random());
  }, [deviceOrientation]);

  return (
    <Layout scrollview={true}>
      <View style={{paddingBottom: 20}}>
        <View key={resetSliderLayout}>
          <Carousel
            type="slider"
            items={data.Reducer.dashboardData.slice(0, 5)}
          />
        </View>
        <Button
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('ProfileStack')}>
          Stack Navigator (Profile)
        </Button>
        <Button
          style={{marginTop: 10}}
          onPress={() => navigation.navigate('Messages')}>
          Tab Navigator (Messages)
        </Button>
        <View style={[commonStyle.row]}>
          <ImageGrid
            items={data.Reducer.dashboardData}
            style={{height: 100, width: '33.3%', paddingHorizontal: 5}}
            imageStyles={{borderRadius: 10}}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Home;
