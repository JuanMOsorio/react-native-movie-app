import {combineReducers} from 'redux';

import navigation from './Navigation';
import videos from './Videos';

const reducer = combineReducers({
  videos,
  navigation
});


export default reducer;
