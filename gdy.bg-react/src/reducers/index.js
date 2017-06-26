import { combineReducers } from 'redux';
import SourcesReducer from './reducers_sources';
import ActiveCompetitionReducer from './reducers_active_competition';
import FiltersReducer from './reducers_filters';
import CompetitionsReducer from './reducers_competitions';
import SearchTermReducer from './reducers_search_term';

const rootReducer = combineReducers({
  sources: SourcesReducer,
  activeCompetition: ActiveCompetitionReducer,
  filters: FiltersReducer,
  competitions: CompetitionsReducer,
  searchTerm: SearchTermReducer
});

export default rootReducer;
