import {CONSUME_DATA} from '../utils/ActionTypes';

export const getData = () => {
  return async (dispatch) => {
    let data = await fetch(
      'http://shibe.online/api/shibes?count=30&urls=true&httpsUrls=true',
    );
    data = await data.json();
    dispatch({type: CONSUME_DATA, payload: data});
  };
};
