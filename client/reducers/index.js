import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import posts from './posts';
import comments from './comments';

// create rootReducer
const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

// export rootReducer
export default rootReducer;