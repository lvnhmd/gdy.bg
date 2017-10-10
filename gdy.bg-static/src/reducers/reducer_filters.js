//import _ from 'lodash';
import { APPLY_FILTERS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case APPLY_FILTERS: {
            return action.payload;
        }
        // no default
    }
    return state;
}  