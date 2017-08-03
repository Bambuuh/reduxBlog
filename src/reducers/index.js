import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducerPosts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  from: formReducer,
});

export default rootReducer;
