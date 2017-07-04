import { combineReducers } from 'redux';
import SourcesReducer from './reducers_sources';
import FiltersReducer from './reducers_filters';
import CompetitionsReducer from './reducers_competitions';
import SearchTermReducer from './reducers_search_term';
import LoginReducer from './reducers_login'

const rootReducer = combineReducers({
  sources: SourcesReducer,
  filters: FiltersReducer,
  competitions: CompetitionsReducer,
  searchTerm: SearchTermReducer,
  user: LoginReducer
});

export default rootReducer;
