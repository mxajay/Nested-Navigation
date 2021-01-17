import {Dimensions, Platform} from 'react-native';

export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = 'api_key=22907ab1c4830499c6f448ee8846a29c';
export const API_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const STATUS_BAR_HEIGHT = Platform.OS == 'ios' ? 10 : 20;
export const DEVICE_WIDTH = Dimensions.get('window').width - 20;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const HAMBERGUR_MENU = [
  {
    id: 1,
    title: 'Movies',
    screen: 'Movies',
    // image: require('../assests/icons/movies.png'),
  },
  {
    id: 2,
    title: 'TV Shows',
    screen: 'TvShows',
    // image: require('../assests/icons/tvs.png'),
  },
  {
    id: 3,
    title: 'Updates',
    screen: 'Updates',
    // image: require('../assests/icons/updates.png'),
  },
  {
    id: 4,
    title: 'Settings',
    screen: 'Settings',
    // image: require('../assests/icons/settings.png'),
  },
  {
    id: 5,
    title: 'Contact Us',
    screen: 'Contact',
    // image: require('../assests/icons/contact.png'),
  },
];

export const COLORS = {
  APP_COLOR: '#e2322e',
};
