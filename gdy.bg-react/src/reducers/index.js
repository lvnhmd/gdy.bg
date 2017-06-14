import { combineReducers } from 'redux';
import SourcesReducer from './reducer_sources';

const rootReducer = combineReducers({
  books: SourcesReducer
});

export default rootReducer;
