import { combineReducers } from 'redux';

import userReducer from './userReducer';
import menuReducer from './menuReducer';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  userReducer,
  menuReducer,
  gameReducer,
});

export default reducers;
