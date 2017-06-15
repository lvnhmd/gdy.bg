import { combineReducers } from 'redux';
import SourcesReducer from './reducer_sources';
import ActiveCompetition from './reducer_active_competition';
import ActiveSource from './reducer_active_source';

const rootReducer = combineReducers({
  books: SourcesReducer,
  activeCompetition: ActiveCompetition,
  activeSource: ActiveSource
});

export default rootReducer;
