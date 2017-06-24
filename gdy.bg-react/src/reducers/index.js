import { combineReducers } from 'redux';
import SourcesReducer from './reducers_sources';
import ActiveCompetition from './reducers_active_competition';
import Filters from './reducers_filters';
import CompetitionsReducer from './reducers_competitions';

const rootReducer = combineReducers({
  sources: SourcesReducer,
  activeCompetition: ActiveCompetition,
  filters: Filters,
  competitions: CompetitionsReducer
});

export default rootReducer;
