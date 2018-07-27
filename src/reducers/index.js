import { combineReducers } from 'redux';

import userReducer from './userReducer';
import menuReducer from './menuReducer';

const reducers = combineReducers({
  userReducer,
  menuReducer,
});

export default reducers;
