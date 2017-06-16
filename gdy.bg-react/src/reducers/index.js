import { combineReducers } from 'redux';
import SourcesReducer from './reducers_sources';
import ActiveCompetition from './reducers_active_competition';
import ActiveSource from './reducers_active_source';

const rootReducer = combineReducers({
  sources: SourcesReducer,
  activeCompetition: ActiveCompetition,
  activeSource: ActiveSource
});

export default rootReducer;
