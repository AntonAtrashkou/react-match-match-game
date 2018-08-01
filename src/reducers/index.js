import { combineReducers } from 'redux';

import userReducer from './userReducer';
import menuReducer from './menuReducer';
import gameReducer from './gameReducer';
import scoreReducer from './scoreReducer';

const reducers = combineReducers({
  userReducer,
  menuReducer,
  gameReducer,
  scoreReducer,
});

export default reducers;
