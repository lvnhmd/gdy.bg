import { combineReducers } from 'redux';
import SourcesReducer from './reducer_sources';
import FiltersReducer from './reducer_filters';
import CompetitionsReducer from './reducer_competitions';
import SearchTermReducer from './reducer_search_term';
import TrackEntryReducer from './reducer_track_entry';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  sources: SourcesReducer,
  filters: FiltersReducer,
  competitions: CompetitionsReducer,
  searchTerm: SearchTermReducer,
  entry: TrackEntryReducer,
  user: AuthReducer
});

export default rootReducer;
