import { combineReducers } from 'redux';
import SourcesReducer from './reducers_sources';
import ActiveCompetition from './reducers_active_competition';
import ActiveSource from './reducers_active_source';
import CompetitionsReducer from './reducers_competitions';

const rootReducer = combineReducers({
  sources: SourcesReducer,
  activeCompetition: ActiveCompetition,
  activeSource: ActiveSource,
  competitions: CompetitionsReducer
});

export default rootReducer;
