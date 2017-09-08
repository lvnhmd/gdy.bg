import { FETCH_COMPETITIONS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COMPETITIONS:
            return action.payload.data;
        // no default    
    }
    return state;
}

