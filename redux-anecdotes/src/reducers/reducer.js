import { combineReducers } from 'redux';

import anecdoteReducer from './anecdoteReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
});

export default reducer;
