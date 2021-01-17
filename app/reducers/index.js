import {CONSUME_DATA} from '../utils/ActionTypes';

const initialState = {
  dashboardData: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSUME_DATA:
      return Object.assign({}, state, {
        dashboardData: action.payload,
      });

    default:
      return state;
  }
};

export default Reducer;
