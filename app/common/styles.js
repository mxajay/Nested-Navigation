'use strict';
var React = require('react-native');
var {StyleSheet} = React;
import {DEVICE_WIDTH} from '../utils/Constants';

const carousel = StyleSheet.create({
  container: {
    width: '100%',
    shadowOpacity: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    bottom: 0,
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 40,
    color: '#FFF',
  },
});

const slider = StyleSheet.create({
  slide: {
    flexBasis: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 220,
    position: 'relative',
  },
  slideTextWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  slideText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
  },
});

const stats = StyleSheet.create({
  stat: {
    paddingHorizontal: 5,
    flexBasis: '33%',
    flex: 1,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  statHold: {
    width: '100%',
    marginBottom: 8,
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: '600',
    paddingTop: 5,
  },
});

const imageGrid = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

module.exports = {
  carousel: carousel,
  slider: slider,
  stats: stats,
  imageGrid: imageGrid,
};
