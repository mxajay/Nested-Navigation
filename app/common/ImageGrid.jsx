import React from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';
import {imageGrid} from './styles';
import {DEVICE_WIDTH} from '../utils/Constants';

const ImageGrid = (props) => {
  return (
    <React.Fragment>
      {props.items.map((item, idx) => {
        return (
          <TouchableOpacity
            style={[
              imageGrid.container,
              {
                ...props.style,
              },
            ]}
            key={idx}>
            <Image
              style={[imageGrid.image, {...props.imageStyles}]}
              source={{uri: typeof item == 'string' ? item : item.imageUri}}
            />
          </TouchableOpacity>
        );
      })}
    </React.Fragment>
  );
};

export default ImageGrid;
